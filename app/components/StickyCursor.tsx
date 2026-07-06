"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function StickyCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouse = {
    x: useMotionValue(-100),
    y: useMotionValue(-100),
  };

  const smoothOptions = { damping: 20, stiffness: 350, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX - (isHovered ? 25 : 8));
      mouse.y.set(e.clientY - (isHovered ? 25 : 8));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".head__menu") ||
        target.closest(".glass-panel-hover") ||
        target.classList.contains("interactive-hover");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isHovered]);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference border border-[#FAF0ED]"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        width: isHovered ? 50 : 16,
        height: isHovered ? 50 : 16,
        backgroundColor: isHovered ? "rgba(250, 240, 237, 0.15)" : "#FAF0ED",
      }}
      animate={{
        scale: isHovered ? 1.2 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
