"use client";

import { useEffect, useState } from "react";

export default function Game() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      setPosition((prev) => {
        const step = 10;
        switch (e.key) {
          case "ArrowUp":
            return { ...prev, y: prev.y - step };
          case "ArrowDown":
            return { ...prev, y: prev.y + step };
          case "ArrowLeft":
            return { ...prev, x: prev.x - step };
          case "ArrowRight":
            return { ...prev, x: prev.x + step };
          default:
            return prev;
        }
      });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-green-200">
      <img
        src="/dingo.png"
        alt="Dingo"
        className="absolute"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
        <p className="text-sm">Use arrow keys to move the dingo.</p>
      </div>
    </div>
  );
}
