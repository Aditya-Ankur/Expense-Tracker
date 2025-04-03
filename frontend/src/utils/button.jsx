import React from "react";

export function Button({
  children,
  variant = "primary",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-lg transition-all duration-200 text-sm font-medium w-full
        ${variant === "primary" ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black border border-gray-200 hover:border-gray-300"}`}
    >
      {children}
    </button>
  );
}