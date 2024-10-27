import { Plus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import DropdownMenu from "./DropDownMenu";

export default function BottomBar() {
   return (
      <>
         <div className="flex flex-row h-20 w-full bg-white lg:bg-transparent md:bg-white sm:bg-white justify-end items-center">
            <div className="absolute bottom-0 lg:bottom-1 md:bottom-1 sm:bottom-0 left-0 flex justify-center items-center lg:w-28 lg:h-28 w-20 h-20 ml-4 rounded-full bg-neutral-700 border-blue-600">
               avatar
            </div>
            <div className="flex flex-row h-full items-center p-1"></div>
            <div className="flex flex-row content-center items-center space-x-2 lg:space-x-15 md:space-x-5">
               <button className="btn-primary m-6">
                  Create Post{" "}
                  <span className="pl-1">
                     <Plus />
                  </span>
               </button>
               <button className="border-1 p-2 rounded-full">
                  <MessageCircle
                     size={32}
                     className="text-blue-500 hover:fill-blue-500 active:fill-blue-600 active:text-blue-600"
                  />
               </button>
               <DropdownMenu options={[]} darkModeEnabled={false} index={0} />
            </div>
         </div>
      </>
   );
}
