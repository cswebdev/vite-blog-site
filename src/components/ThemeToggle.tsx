import { useEffect, useState } from "react";

export default function ThemeToggle() {
   const [theme, setTheme] = useState(
      localStorage.getItem("theme") || "dark-theme"
   );

   useEffect(() => {
      document.body.classList.remove("dark-theme", "light-theme");
      document.body.classList.add(theme);
      localStorage.setItem("theme", theme);
   }, [theme]);

   const toggleTheme = () => {
      setTheme((prev) =>
         prev === "dark-theme" ? "light-theme" : "dark-theme"
      );
   };

   return (
      <button
         onClick={toggleTheme}
         className="bg-cta hover:bg-cta-active text-cta-text p-2 rounded"
      >
         Toggle Theme
      </button>
   );
}
