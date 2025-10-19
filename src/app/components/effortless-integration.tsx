import type React from "react"

interface EffortlessIntegrationProps {
  /** Fixed width from Figma: 482px */
  width?: number | string
  /** Fixed height from Figma: 300px */
  height?: number | string
  /** Optional className to pass to root */
  className?: string
  /** Theme palette */
  theme?: "light" | "dark"
}

/**
 * Effortless Integration – Social automation constellation (Facebook, Instagram, Messenger)
 * Updated to match Echelon design system.
 * Maintains 482×300 layout and token pattern.
 */
const EffortlessIntegration: React.FC<EffortlessIntegrationProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "dark",
}) => {
  // Design tokens (derived from Figma local variables)
  const themeVars =
    theme === "light"
      ? {
          "--ei-background": "#f8f9fa",
          "--ei-center-bg": "#37322f",
          "--ei-center-text": "#ffffff",
          "--ei-orbit-line": "rgba(55,50,47,0.08)",
        }
      : ({
          "--ei-background": "#1f2937",
          "--ei-center-bg": "#37322f",
          "--ei-center-text": "#ffffff",
          "--ei-orbit-line": "rgba(255,255,255,0.06)",
        } as React.CSSProperties)

  return (
    <div
      className={className}
      style={
        {
          width,
          height,
          position: "relative",
          background: "var(--ei-background)",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="Effortless social automation integration with Facebook, Instagram, and Messenger"
    >
      {/* Orbit rings */}
      {[80, 120, 160].map((r, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: r * 2,
            height: r * 2,
            borderRadius: "50%",
            border: `1px solid var(--ei-orbit-line)`,
          }}
        />
      ))}

      {/* Center core */}
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "var(--ei-center-bg)",
          color: "var(--ei-center-text)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
          zIndex: 2,
        }}
      >
        e
      </div>

      {/* Facebook node */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-180%, -50%)",
          background: "#1877F2",
          width: 44,
          height: 44,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(24,119,242,0.3)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.4 1.5-3.7 3.6-3.7 1 0 2 .1 2 .1v2.3H15c-1.2 0-1.6.8-1.6 1.5v1.9H16.8L16.3 15h-2v7A10 10 0 0 0 22 12Z" />
        </svg>
      </div>

      {/* Instagram node */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translate(80%, -130%)",
          background:
            "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(221,42,123,0.3)",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8ZM17.2 6.8a.8.8 0 1 1-.8.8.8.8 0 0 1 .8-.8Z" />
        </svg>
      </div>

      {/* Messenger node */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(100%, 40%)",
          background: "#0099FF",
          width: 44,
          height: 44,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,153,255,0.3)",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2a10 10 0 0 0-8 16.3V22l2.3-1.3A9.9 9.9 0 0 0 12 22a10 10 0 0 0 0-20Zm.6 12.5L10.5 12l-4.1 2.5 4.4-4.6 2.1 2.5 3.8-2.5-4.1 4.6Z" />
        </svg>
      </div>
    </div>
  )
}

export default EffortlessIntegration
