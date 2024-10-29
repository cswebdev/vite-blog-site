import ThemeToggle from "../ThemeToggle";

// Reusable component for each theme button
const ThemeButton: React.FC<{
   navbarColor: string;
   postsColor: string;
   bottomBarColor: string;
}> = ({ navbarColor, postsColor, bottomBarColor }) => (
   <button className="w-full h-48 bg-white border-2 border-neutral-200 hover:border-neutral-500 rounded-sm flex flex-col items-center relative p-0 m-0">
      {/* Navbar */}
      <div className={`w-full h-8 flex justify-between items-center`}>
         <div
            className={`w-10 h-3 bg-${navbarColor} rounded-md m-0 ml-1`}
         ></div>
         <div
            className={`w-1/3 h-3 border-2 border-${navbarColor} bg-white rounded-md`}
         ></div>
         <div
            className={`w-16 h-3 bg-${navbarColor}  rounded-md m-0 mr-1`}
         ></div>
      </div>
      {/* Posts */}
      <div className={`flex flex-col items-center flex-grow justify-center`}>
         <div className={`w-24 h-16 m-1 rounded-sm bg-${postsColor}`}></div>
         <div className={`w-24 h-16 m-1 rounded-sm bg-${postsColor}`}></div>
      </div>
      {/* Bottom bar */}
      <div
         className={`w-full h-8 bg-${bottomBarColor} absolute bottom-0 flex justify-end items-center`}
      >
         <div className="w-16 h-3 bg-blue-500 rounded-md mr-1"></div>
      </div>
   </button>
);

export default function GeneralSettings() {
   const themes = [
      { navbarColor: "black", postsColor: "black", bottomBarColor: "black" },
      {
         navbarColor: "gray-700",
         postsColor: "gray-400",
         bottomBarColor: "gray-700",
      },
      {
         navbarColor: "blue-500",
         postsColor: "blue-200",
         bottomBarColor: "blue-500",
      },
      {
         navbarColor: "purple-300",
         postsColor: "purple-200",
         bottomBarColor: "purple-500",
      },
      {
         navbarColor: "green-500",
         postsColor: "green-200",
         bottomBarColor: "green-500",
      },
      {
         navbarColor: "pink-500",
         postsColor: "yellow-200",
         bottomBarColor: "yellow-500",
      },
   ];

   return (
      <>
         <h4>General Settings</h4>

         <div className="pt-10">Theme Selection</div>
         <ThemeToggle />
         <div className="container p-4 gap-0">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">
               {/* Map over theme data to render buttons */}
               {themes.map((theme, index) => (
                  <ThemeButton
                     key={index}
                     navbarColor={theme.navbarColor}
                     postsColor={theme.postsColor}
                     bottomBarColor={theme.bottomBarColor}
                  />
               ))}
            </div>
         </div>
      </>
   );
}
