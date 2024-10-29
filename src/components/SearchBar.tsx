import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="ml-11 w-1/3 overflow-hidden rounded-md border-2">
      <div className="flex">
        <input
          type="text"
          placeholder="search"
          className="w-full pl-2 focus:rounded-none active:rounded-none"
        />
        <button className="bg-neutral-200 px-3">
          <Search />
        </button>
      </div>
    </form>
  );
}
