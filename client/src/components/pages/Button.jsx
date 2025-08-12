import { useState } from "react";

const Button = ({ text = "hover me", onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-full border border-white  px-6 py-3 font-extrabold uppercase text-white cursor-pointer"
    >
      {/* Background Circle (replaces ::before) */}
      <span
        className={`absolute left-1/2 top-[-200%] aspect-square rounded-full bg-white transition-all duration-500`}
        style={{
          transform: "translateX(-50%)",
          height: hovered ? "400%" : "0%",
        }}
      ></span>

      {/* Text Animation */}
      <span className="relative block overflow-hidden">
        <span
          className={`relative mix-blend-difference transition-transform duration-500 ${
            hovered
              ? "translate-y-0 animate-[moveUpAlternate_0.3s_ease_forwards]"
              : ""
          }`}
          style={{
            animation: hovered ? "moveUpAlternate 0.3s ease forwards" : "none",
          }}
        >
          {text}
        </span>
      </span>

      {/* Keyframe Animation Inline */}
      <style>
        {`
          @keyframes moveUpAlternate {
            0% { transform: translateY(0); }
            50% { transform: translateY(80%); }
            51% { transform: translateY(-80%); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </button>
  );
};

export default Button;
