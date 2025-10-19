import type React from "react"

interface SmartSimpleBrilliant {
  width?: number | string
  height?: number | string
  className?: string
  theme?: "light" | "dark"
}

/**
 * Echelon Chat Automations Visualization
 * Messenger, Instagram, and Facebook automations with real icons.
 */
const ChatAutomation: React.FC<SmartSimpleBrilliant> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "light",
}) => {
  const isLight = theme === "light"

  const themeVars = {
    "--bg": isLight ? "#ffffff" : "#1f2937",
    "--text": isLight ? "#1b1919" : "#f8f8f8",
    "--user": isLight ? "#DBEAFE" : "#2563EB",
    "--bot": isLight ? "#F3F4F6" : "#374151",
    "--shadow": isLight ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.3)",
  } as React.CSSProperties

  return (
    <div
      className={className}
      style={{
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        ...themeVars,
      }}
    >
      <div
        style={{
          width: "340px",
          height: "220px",
          background: "var(--bg)",
          borderRadius: "20px",
          boxShadow: "0 6px 24px var(--shadow)",
          position: "relative",
          padding: "20px",
          overflow: "hidden",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Chat bubbles */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              alignSelf: "flex-start",
              background: "var(--user)",
              color: "#1E3A8A",
              padding: "10px 14px",
              borderRadius: "14px 14px 14px 4px",
              fontSize: "13px",
              lineHeight: 1.5,
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              maxWidth: "75%",
            }}
          >
            Hi! Can you tell me about your plans?
          </div>

          <div
            style={{
              alignSelf: "flex-end",
              background: "var(--bot)",
              color: "var(--text)",
              padding: "10px 14px",
              borderRadius: "14px 14px 4px 14px",
              fontSize: "13px",
              lineHeight: 1.5,
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              maxWidth: "80%",
            }}
          >
            Sure! We offer automated campaigns for Messenger, Instagram & Facebook.
          </div>

          <div
            style={{
              alignSelf: "flex-end",
              background: "var(--bot)",
              color: "var(--text)",
              padding: "10px 14px",
              borderRadius: "14px 14px 4px 14px",
              fontSize: "13px",
              lineHeight: 1.5,
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              maxWidth: "80%",
            }}
          >
            Echelon handles scheduling, replies, and insights — all in one place.
          </div>
        </div>

        {/* Platform icons */}
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "18px",
            display: "flex",
            gap: "14px",
            alignItems: "center",
            opacity: 0.9,
            zIndex: 1,
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
            alt="Facebook"
            style={{ width: 20, height: 20, opacity: 0.8 }}
          />
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/messenger.svg"
            alt="Messenger"
            style={{ width: 20, height: 20, opacity: 0.8 }}
          />
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
            alt="Instagram"
            style={{ width: 20, height: 20, opacity: 0.8 }}
          />
        </div>

        {/* Glow background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 80% 10%, rgba(99,102,241,0.08), transparent 60%)",
            zIndex: 0,
          }}
        />
      </div>
    </div>
  )
}

export default ChatAutomation
