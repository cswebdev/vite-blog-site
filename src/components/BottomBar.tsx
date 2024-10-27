import { Plus } from "lucide-react";
import DropdownMenu from "./DropDownMenu";

export default function BottomBar() {
    return (
        <>
        <div className="flex flex-row h-20 w-full bg-blue-400 lg:bg-transparent md:bg-blue-400 sm:bg-blue-400 justify-end items-center">
            <div className="absolute bottom-1 left-0 flex justify-center items-center w-24 h-24 ml-4 rounded-full bg-neutral-700 border-blue-600">avatar</div>
            <div className="flex flex-row h-full w-1/4 items-center p-1">
            <button
            //  className="flex flex-row text-blue-600 font-semibold ring-1 px-3 py-2 rounded-md bg-white text-sm lg:text-lg sm:text-md"
             className="btn-primary"
             >Create Post <Plus /></button>
            </div>
            <DropdownMenu options={[]} darkModeEnabled={false} index={0} />

        </div>
        </>
    )
}