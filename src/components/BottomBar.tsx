import { Plus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import DropdownMenu from "./DropDownMenu";

export default function BottomBar() {
  return (
    <>
      <div className="flex h-20 w-full flex-row items-center justify-end bg-white sm:bg-white md:bg-white lg:bg-transparent">
        <div className="lg:w-18 lg:h-18 absolute bottom-0 left-0 ml-4 flex h-14 w-14 items-center justify-center rounded-full border-blue-600 bg-neutral-700 sm:bottom-0 md:bottom-1 lg:bottom-1">
          avatar
        </div>
        <div className="flex h-full flex-row items-center p-1"></div>
        <div className="lg:space-x-15 flex flex-row content-center items-center space-x-2 md:space-x-5">
          <button className="btn-primary m-6">
            Create Post{" "}
            <span className="pl-1">
              <Plus />
            </span>
          </button>
          <button className="border-1 rounded-full p-2">
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
