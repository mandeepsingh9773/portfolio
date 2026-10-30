import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#fbfaf8",
        padding: "72px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "#3b5bfd",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {site.monogram}
        </div>
        <div style={{ fontSize: 26, color: "#6b6b73" }}>mandeep.dev</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#17171a",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 38, color: "#3b5bfd", fontWeight: 600 }}>
          {site.role}
        </div>
        <div style={{ fontSize: 26, color: "#6b6b73", maxWidth: 900 }}>
          React, Next.js and Node.js.
        </div>
      </div>
    </div>,
    size,
  );
}
