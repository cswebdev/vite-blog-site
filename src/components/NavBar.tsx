import { NavLink } from "react-router-dom";
import "../styles.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
   return (
      <div className="flex flex-row content-center items-center justify-between bg-background px-3 py-3">
         <p className="cursor-default font-bold md:text-2xl lg:text-4xl lg:text-blue-500">
            simply.social
         </p>
         <SearchBar />
         <div className="flex flex-row items-center">
            <div className="flex list-none flex-row gap-x-4 text-2xl text-blue-500">
               <NavLink
                  className="border-b-2 border-transparent hover:border-b-2 hover:border-b-blue-600 hover:text-blue-600"
                  to="/"
               >
                  Home
               </NavLink>
               <a
                  className="border-b-2 border-transparent hover:border-b-2 hover:border-b-blue-600 hover:text-blue-600"
                  href="#"
               >
                  Explore
               </a>
               <a
                  className="mr-10 border-b-2 border-transparent hover:border-b-2 hover:border-b-blue-600 hover:text-blue-600"
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
