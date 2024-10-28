import { Search } from "lucide-react";

export default function SearchBar() {
   return (
      <form className="w-4/12 border-2 rounded-md overflow-hidden">
         <div className="flex">
            <input
               type="text"
               placeholder="search"
               className="w-full pl-2 active:rounded-none focus:rounded-none "
            />
            <button className="px-3 bg-neutral-300">
               <Search />
            </button>
         </div>
      </form>
   );
}
