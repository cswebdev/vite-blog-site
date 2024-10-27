import "../styles.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
   return (
      <div className="flex flex-row bg-white items-center content-center py-3 px-3 min-w-full justify-between">
         <p className="font-bold lg:text-3xl md:text-2xl lg:text-blue-500 cursor-default ">
            simplr.social
         </p>
         <SearchBar />
         <div className="flex flex-row items-center">
            <div className="flex flex-row list-none  text-blue-500">
               <a
                  className="border-b-2 border-transparent hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600"
                  href="#"
               >
                  Home
               </a>
               <a
                  className="border-b-2 border-transparent hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600"
                  href="#"
               >
                  Explore
               </a>
               <a
                  className="border-b-2 border-transparent hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600"
                  href="#"
               >
                  About
               </a>
            </div>
            <button className="btn-primary">Login</button>
         </div>
      </div>
   );
}
