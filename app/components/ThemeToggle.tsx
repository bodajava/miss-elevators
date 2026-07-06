"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const activeTheme = savedTheme || systemTheme;
    
    setTheme(activeTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    // Render an invisible placeholder during hydration to prevent Next.js mismatch
    return <div className="w-8 h-8 mt-2.5 shrink-0" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer mt-2.5 shrink-0",
        "focus:outline-none focus:ring-1 focus:ring-[#ec4e39]/50",
        theme === "light"
          ? "border-neutral-900/10 bg-neutral-900/5 hover:bg-neutral-900/10 text-neutral-900"
          : "border-white/10 bg-white/5 hover:bg-white/10 text-[#ec4e39]"
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-[#ec4e39] transition-transform duration-300" />
      ) : (
        <Sun className="w-4 h-4 text-[#ec4e39] transition-transform duration-300" />
      )}
    </button>
  );
}
