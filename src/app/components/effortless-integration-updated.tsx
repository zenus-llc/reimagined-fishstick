import type React from "react"

interface EffortlessIntegrationProps {
  /** Fixed width from Figma: 482px */
  width?: number | string
  /** Fixed height from Figma: 300px */
  height?: number | string
  /** Optional className to pass to root */
  className?: string
}

/**
 * Effortless Integration – Social constellation (Facebook, Instagram, Messenger)
 * Simplified three-ring orbit system showing Echelon’s connected ecosystem
 */
const EffortlessIntegration: React.FC<EffortlessIntegrationProps> = ({
  width = 482,
  height = 300,
  className = "",
}) => {
  const centerX = 250
  const centerY = 179

  const getPositionOnRing = (radius: number, angle: number) => ({
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  })

  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      {/* Subtle background fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.1) 100%)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Outer ring */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1px solid rgba(55, 50, 47, 0.2)",
          opacity: 0.8,
        }}
      />
      {/* Middle ring */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          border: "1px solid rgba(55, 50, 47, 0.25)",
          opacity: 0.7,
        }}
      />
      {/* Inner ring */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          border: "1px solid rgba(55, 50, 47, 0.3)",
          opacity: 0.6,
        }}
      />

      {/* Hub + social nodes */}
      <div
        style={{
          width: "500px",
          height: "358px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Central hub */}
        <div
          style={{
            width: "72px",
            height: "72px",
            position: "absolute",
            left: `${centerX - 36}px`,
            top: `${centerY - 36}px`,
            background: "#37322f",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            color: "#fff",
          }}
        >
          e
        </div>

        {/* Facebook - left */}
        <div
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            left: `${getPositionOnRing(120, Math.PI).x - 20}px`,
            top: `${getPositionOnRing(120, Math.PI).y - 20}px`,
            background: "#1877F2",
            boxShadow: "0 4px 12px rgba(24,119,242,0.3)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
            alt="Facebook"
            style={{
              width: "20px",
              height: "20px",
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>

        {/* Instagram - top-right */}
        <div
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            left: `${getPositionOnRing(160, -Math.PI / 4).x - 20}px`,
            top: `${getPositionOnRing(160, -Math.PI / 4).y - 20}px`,
            background:
              "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)",
            boxShadow: "0 4px 12px rgba(221,42,123,0.4)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
            alt="Instagram"
            style={{
              width: "20px",
              height: "20px",
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>

        {/* Messenger - bottom-right */}
        <div
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            left: `${getPositionOnRing(120, Math.PI / 3).x - 20}px`,
            top: `${getPositionOnRing(120, Math.PI / 3).y - 20}px`,
            background: "#0099FF",
            boxShadow: "0 4px 12px rgba(0,153,255,0.35)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/messenger.svg"
            alt="Messenger"
            style={{
              width: "20px",
              height: "20px",
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>

        {/* SVG connecting lines */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(55,50,47,0.1)" />
              <stop offset="50%" stopColor="rgba(55,50,47,0.05)" />
              <stop offset="100%" stopColor="rgba(55,50,47,0.1)" />
            </linearGradient>
          </defs>

          {[Math.PI, -Math.PI / 4, Math.PI / 3].map((angle, i) => {
            const p = getPositionOnRing(120, angle)
            return (
              <line
                key={i}
                x1={centerX}
                y1={centerY}
                x2={p.x}
                y2={p.y}
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                opacity="0.2"
              />
            )
          })}
        </svg>
      </div>
    </div>
  )
}

export default EffortlessIntegration
