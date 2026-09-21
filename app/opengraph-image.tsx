import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(120% 140% at 20% 0%, #3684e6 0%, #0b1424 55%, #04070d 100%)",
          color: "#f4f6fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#7db0ee", letterSpacing: 4, textTransform: "uppercase" }}>
          {siteConfig.role}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#aebbd1", marginTop: 24 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size,
  );
}
