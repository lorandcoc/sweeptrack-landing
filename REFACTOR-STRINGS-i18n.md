# Task: Refactor Strings.kt into per-language files + add 12 new languages

## Context

The app currently has a single `util/Strings.kt` (1,385 lines) containing **797 string keys** in two inline maps (`EN` and `RO`). The language picker in `SettingsScreen.kt` already iterates `Lang.entries` and persists the choice to SharedPreferences. The `t()` function uses Compose state for reactive recomposition.

The landing site at `o:/REACT APPS/sweeptrack-landing/dictionaries/` already has partial translations (~370 keys) for all target languages in JSON format. Reuse those where keys match.

## Goal

1. Split `Strings.kt` into one file per language
2. Add 12 new languages: **de, es, fr, nl, pl, it, pt, sv, tr, hu, ru, da**
3. Keep the exact same runtime behavior — `t()`, `setLang()`, `loadLang()`, SharedPreferences persistence, Compose recomposition

## Target file structure

```
com/sweeptrack/pro/util/strings/
  Lang.kt            ← enum, t(), setLang(), loadLang(), map registry
  StringsEn.kt       ← internal val EN: Map<String, String> = mapOf(...)
  StringsRo.kt       ← internal val RO: Map<String, String> = mapOf(...)
  StringsDe.kt       ← internal val DE: Map<String, String> = mapOf(...)
  StringsEs.kt       ← internal val ES: Map<String, String> = mapOf(...)
  StringsFr.kt       ← internal val FR: Map<String, String> = mapOf(...)
  StringsNl.kt       ← internal val NL: Map<String, String> = mapOf(...)
  StringsPl.kt       ← internal val PL: Map<String, String> = mapOf(...)
  StringsIt.kt       ← internal val IT: Map<String, String> = mapOf(...)
  StringsPt.kt       ← internal val PT: Map<String, String> = mapOf(...)
  StringsSv.kt       ← internal val SV: Map<String, String> = mapOf(...)
  StringsTr.kt       ← internal val TR: Map<String, String> = mapOf(...)
  StringsHu.kt       ← internal val HU: Map<String, String> = mapOf(...)
  StringsRu.kt       ← internal val RU: Map<String, String> = mapOf(...)
  StringsDa.kt       ← internal val DA: Map<String, String> = mapOf(...)
```

## Step-by-step instructions

### Step 1 — Read the existing Strings.kt

Read `app/src/main/java/com/sweeptrack/pro/util/Strings.kt` in full. Extract:
- The complete `EN` map (all 797 key-value pairs)
- The complete `RO` map (all 797 key-value pairs)
- The `Lang` enum, `t()`, `setLang()`, `loadLang()` logic

### Step 2 — Create the new package directory

Create `app/src/main/java/com/sweeptrack/pro/util/strings/`

### Step 3 — Create Lang.kt

This file replaces the infrastructure part of the old Strings.kt. It must contain:

```kotlin
package com.sweeptrack.pro.util.strings

import android.content.Context
import androidx.compose.runtime.mutableStateOf
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

enum class Lang(val code: String, val label: String) {
    EN("en", "EN"),
    RO("ro", "RO"),
    DE("de", "DE"),
    ES("es", "ES"),
    FR("fr", "FR"),
    NL("nl", "NL"),
    PL("pl", "PL"),
    IT("it", "IT"),
    PT("pt", "PT"),
    SV("sv", "SV"),
    TR("tr", "TR"),
    HU("hu", "HU"),
    RU("ru", "RU"),
    DA("da", "DA");
}

private val maps: Map<Lang, Map<String, String>> = mapOf(
    Lang.EN to EN,
    Lang.RO to RO,
    Lang.DE to DE,
    Lang.ES to ES,
    Lang.FR to FR,
    Lang.NL to NL,
    Lang.PL to PL,
    Lang.IT to IT,
    Lang.PT to PT,
    Lang.SV to SV,
    Lang.TR to TR,
    Lang.HU to HU,
    Lang.RU to RU,
    Lang.DA to DA,
)

// ── State ──
private val _lang = MutableStateFlow(Lang.EN)
val lang: StateFlow<Lang> = _lang
val _composeLang = mutableStateOf(Lang.EN)

fun setLang(lang: Lang, context: Context) {
    _lang.value = lang
    _composeLang.value = lang
    context.getSharedPreferences("sweeptrack_app", Context.MODE_PRIVATE)
        .edit().putString("language", lang.code).apply()
}

fun loadLang(context: Context) {
    val saved = context.getSharedPreferences("sweeptrack_app", Context.MODE_PRIVATE)
        .getString("language", "en") ?: "en"
    val lang = Lang.entries.find { it.code == saved } ?: Lang.EN
    _lang.value = lang
    _composeLang.value = lang
}

fun t(key: String): String =
    maps[_composeLang.value]?.get(key) ?: EN[key] ?: key
```

**IMPORTANT:** Preserve the exact same StateFlow/MutableState pattern from the original file. Check the original for any nuances I may have missed — field names, visibility modifiers, etc. Match them exactly.

### Step 4 — Create StringsEn.kt and StringsRo.kt

Move the existing `EN` and `RO` maps verbatim from the old `Strings.kt`:

```kotlin
package com.sweeptrack.pro.util.strings

internal val EN: Map<String, String> = mapOf(
    "key" to "value",
    // ... all 797 pairs
)
```

Same pattern for `RO`.

### Step 5 — Create the 12 new language files

For each new language (DE, ES, FR, NL, PL, IT, PT, SV, TR, HU, RU, DA):

1. Start with all 797 keys from `EN`
2. Check the landing site file at `o:/REACT APPS/sweeptrack-landing/dictionaries/{code}.json` — for any matching keys, use the existing translation
3. For remaining keys, translate the English value to the target language
4. Write as `StringsXx.kt` using the same `internal val XX: Map<String, String> = mapOf(...)` pattern

Key matching: The landing site uses dotted keys like `"hero.title_line1"` while the app uses underscore keys like `"hero_title"`. They won't match directly — translate all 797 from scratch using the EN values as source. The landing site files are just a reference for tone and terminology.

### Step 6 — Update all imports across the codebase

The old code imports from `com.sweeptrack.pro.util.Strings`. Search the entire codebase for:
- `import com.sweeptrack.pro.util.Strings`
- `Strings.t(`
- `Strings.Lang`
- `Strings.lang`
- `Strings.setLang`
- `Strings.loadLang`
- `Strings._composeLang`

Update all references to point to the new package `com.sweeptrack.pro.util.strings`. Since `t()`, `setLang()`, `loadLang()`, `lang`, and `_composeLang` are now top-level functions/properties (not inside an object), the call sites change from `Strings.t("key")` to `t("key")` with the import `import com.sweeptrack.pro.util.strings.t`.

Alternatively, if you want to minimize call-site changes, you can keep everything inside an `object Strings { ... }` wrapper in `Lang.kt` so that `Strings.t()` still works. Pick whichever approach requires fewer changes — check how many files reference `Strings.*` before deciding.

### Step 7 — Delete the old Strings.kt

Remove `app/src/main/java/com/sweeptrack/pro/util/Strings.kt`

### Step 8 — Update SettingsScreen.kt language picker

The current picker uses `FilterChip` and iterates `Strings.Lang.entries`. With 14 languages, chip buttons won't fit. Replace with a dropdown or grid:
- Show current language as a button with flag + code
- On tap, show a dropdown/dialog listing all 14 languages with their native names
- Use these native labels: English, Romana, Deutsch, Espanol, Francais, Nederlands, Polski, Italiano, Portugues, Svenska, Turkce, Magyar, Russkiy, Dansk

### Step 9 — Build and verify

Run `./gradlew assembleDebug` and fix any compilation errors. Test language switching in the emulator.

## Language rules

**NEVER use "hunt", "hunting", "hunter" or any hunting-derived language in any translation.** This is a metal detecting app. Use: session, detecting trip, dig, outing, detectorist, detecting buddy, fellow detectorists. "Bounty Hunter" is acceptable ONLY as a detector brand name.

## Native language labels for the picker

| Code | Native label | Flag |
|------|-------------|------|
| en   | English     | GB   |
| ro   | Romana      | RO   |
| de   | Deutsch     | DE   |
| es   | Espanol     | ES   |
| fr   | Francais    | FR   |
| nl   | Nederlands  | NL   |
| pl   | Polski      | PL   |
| it   | Italiano    | IT   |
| pt   | Portugues   | PT   |
| sv   | Svenska     | SE   |
| tr   | Turkce      | TR   |
| hu   | Magyar      | HU   |
| ru   | Russkiy     | RU   |
| da   | Dansk       | DK   |
