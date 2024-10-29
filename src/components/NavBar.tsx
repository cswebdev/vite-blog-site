import { NavLink } from "react-router-dom";
import "../styles.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
   return (
      <div className="flex flex-row bg-background items-center content-center py-3 px-3 min-w-full justify-between">
         <p className="font-bold lg:text-4xl md:text-2xl lg:text-blue-500 cursor-default ">
            simply.social
         </p>
         <SearchBar />
         <div className="flex flex-row items-center">
            <div className="flex flex-row list-none gap-x-4 text-blue-500 text-2xl">
               <NavLink
                  className="border-b-2 border-transparent hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600"
                  to="/"
               >
                  Home
               </NavLink>
               <a
                  className="border-b-2 border-transparent hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600"
                  href="#"
               >
                  Explore
               </a>
               <a
                  className="border-b-2 border-transparent mr-10 hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600"
                  href="#"
               >
                  About
               </a>
            </div>
            {/* revisiting idea where to place this button */}
            {/* <button className="btn-primary">Login</button> */}
         </div>
      </div>
   );
}
