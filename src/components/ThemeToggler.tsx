import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="flex items-center justify-center transition-all duration-300 bg-blue-100 rounded-lg w-7 h-7 dark:bg-slate-800 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode">
      {theme === "light" ? <HiMoon className="w-5 h-5 text-black" /> : <HiSun className="w-5 h-5 text-white" />}
    </button>
  );
};

export default ThemeToggler;
