import ThemeButton from "../ThemeButton";

export default function GeneralSettings() {
   const setTheme = (themeClass: string) => {
      document.body.classList.remove(
         "light-theme",
         "dark-theme",
         "high-contrast",
         "pastel-pink",
         "pastel-blue",
         "pastel-purple"
      );
      document.body.classList.add(themeClass);
      localStorage.setItem("theme", themeClass);
   };

   // themes for theme preview
   const themes = [
      {
         title: "Light Theme",
         navbarColor: "rgba(212, 212, 212, 1)",
         cardColor: "rgba(255, 255, 255, 1)",
         bottomBarColor: "rgba(212, 212, 212, 1)",
         backgroundColor: "rgba(245, 245, 245, 1)",
         className: "light-theme",
      },
      {
         title: "Dark Theme",
         navbarColor: "rgba(38, 38, 38, 1)",
         cardColor: "rgba(23, 23, 23, 1)",
         bottomBarColor: "rgba(38, 38, 38, 1)",
         backgroundColor: "rgba(0, 0, 0, 1)",
         className: "dark-theme",
      },
      {
         title: "High Contrast",
         navbarColor: "rgba(255, 255, 0, 1)",
         cardColor: "rgba(0, 0, 0, 1)",
         bottomBarColor: "rgba(0, 0, 0, 1)",
         backgroundColor: "rgba(255, 255, 255, 1)",
         className: "high-contrast",
      },
      {
         title: "Pastel Pink",
         navbarColor: "rgba(255, 182, 193, 1)",
         cardColor: "rgba(255, 105, 180, 1)",
         bottomBarColor: "rgba(255, 192, 203, 0.8)",
         backgroundColor: "rgba(255, 240, 245, 1)",
         className: "pastel-pink",
      },
      {
         title: "Pastel Blue",
         navbarColor: "rgba(173, 216, 230, 1)",
         cardColor: "rgba(135, 206, 235, 1)",
         bottomBarColor: "rgba(70, 130, 180, 1)",
         backgroundColor: "rgba(240, 248, 255, 1)",
         className: "pastel-blue",
      },
      {
         title: "Pastel Purple",
         navbarColor: "rgba(230, 210, 255, 1)",
         cardColor: "rgba(200, 180, 255, 1)",
         bottomBarColor: "rgba(180, 140, 255, 1)",
         backgroundColor: "rgba(240, 240, 255, 1)",
         className: "pastel-purple",
      },
   ];

   return (
      <>
         <h4>General Settings</h4>
         <div className="pt-10">Theme Selection</div>
         <div className="container p-4 gap-0">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">
               {themes.map((theme, index) => (
                  <div key={index} className="flex flex-col items-center">
                     <div className="text-center text-sm font-semibold mb-2">
                        {theme.title}
                     </div>
                     <ThemeButton
                        navbarColor={theme.navbarColor}
                        cardColor={theme.cardColor}
                        bottomBarColor={theme.bottomBarColor}
                        backgroundColor={theme.backgroundColor}
                        onClick={() => setTheme(theme.className)}
                     />
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
