import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SweepTrack Pro — Metal Detecting GPS App for Android";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050510",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent line */}
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#00FF6A",
            marginBottom: "32px",
            borderRadius: "2px",
          }}
        />
        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#E8E8F0",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          SweepTrack Pro
        </div>
        {/* Subtitle */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 400,
            color: "#00FF6A",
            lineHeight: 1.3,
            marginBottom: "40px",
          }}
        >
          Metal Detecting GPS App for Android
        </div>
        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {["GPS Tracking", "Historical Maps", "Offline Maps", "Permission Vault", "61 Presets", "Cloud Backup"].map(
            (f) => (
              <div
                key={f}
                style={{
                  fontSize: "18px",
                  color: "#8888AA",
                  padding: "8px 16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                }}
              >
                {f}
              </div>
            )
          )}
        </div>
        {/* Brand */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "16px",
            color: "#8888AA",
          }}
        >
          sweeptrack.pro &middot; by Loriba
        </div>
      </div>
    ),
    { ...size }
  );
}
