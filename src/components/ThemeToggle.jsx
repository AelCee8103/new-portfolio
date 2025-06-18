import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react"; // Added useState import

import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark mode if no theme is stored or if it's set to dark
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      if (!storedTheme) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []); // Added dependency array to prevent infinite re-renders
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
