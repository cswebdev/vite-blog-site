import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark-theme",
  );

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark-theme";
    document.body.classList.add(storedTheme);
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark-theme" ? "light-theme" : "dark-theme"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-100 rounded bg-cta p-2 text-cta-text hover:bg-cta-active"
    >
      Toggle Theme
    </button>
  );
}
