import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const defaultDark = prefersDark || hour >= 20 || hour < 6;
    setIsDark(defaultDark);
    document.documentElement.setAttribute(
      "data-theme",
      defaultDark ? "dark" : "light"
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "white",
        fontSize: "1.4rem",
        display: "flex",
        alignItems: "center",
      }}
      aria-label="Changer de thème"
      title="Changer de thème"
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;
