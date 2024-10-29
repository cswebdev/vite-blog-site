import { Search } from "lucide-react";

export default function SearchBar() {
   return (
      <form className="w-1/3 border-2 rounded-md overflow-hidden ml-11">
         <div className="flex">
            <input
               type="text"
               placeholder="search"
               className="w-full pl-2 active:rounded-none focus:rounded-none "
            />
            <button className="px-3 bg-neutral-200">
               <Search />
            </button>
         </div>
      </form>
   );
}
