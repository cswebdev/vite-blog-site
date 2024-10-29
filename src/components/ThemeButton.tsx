interface ThemeButtonProps {
   navbarColor: string;
   cardColor: string;
   bottomBarColor: string;
   backgroundColor: string;
   onClick: () => void;
}

export default function ThemeButton({
   navbarColor,
   cardColor,
   bottomBarColor,
   backgroundColor,
   onClick,
}: ThemeButtonProps) {
   return (
      <button
         onClick={onClick}
         className="w-full h-48 rounded-md shadow-md cursor-pointer"
         style={{
            backgroundColor,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #ccc",
            position: "relative",
            overflow: "hidden",
         }}
         title="Preview Theme"
      >
         <button
            style={{ backgroundColor }}
            className={`w-full h-48  border-2 border-neutral-200 hover:border-neutral-500 rounded-sm flex flex-col items-center relative p-0 m-0`}
         >
            {/* Navbar */}
            <div className="w-full h-8 flex justify-between items-center">
               <div
                  style={{ backgroundColor: navbarColor }}
                  className="w-16 h-3 rounded-md m-0 ml-1"
               ></div>
               <div
                  style={{ borderColor: navbarColor }}
                  className="w-1/3 h-3 border-2 bg-white rounded-md"
               ></div>
               <div
                  style={{ backgroundColor: navbarColor }}
                  className="w-16 h-3 rounded-md m-0 mr-1"
               ></div>
            </div>
            {/* Posts */}
            <div className="flex flex-col items-center flex-grow justify-center">
               <div
                  style={{ backgroundColor: cardColor }}
                  className="w-20 h-14 m-1 rounded-sm"
               ></div>
               <div
                  style={{ backgroundColor: cardColor }}
                  className="w-20 h-14 m-1 rounded-sm"
               ></div>
            </div>
            {/* Bottom bar */}
            <div className="w-full h-8 absolute bottom-0 flex justify-end items-center">
               <div
                  style={{ backgroundColor: bottomBarColor }}
                  className="w-16 h-3 rounded-md mr-1"
               ></div>
            </div>
         </button>
      </button>
   );
}
