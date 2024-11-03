import { CircleUserRound, Plus } from "lucide-react";
import { User } from "../../types/types";
import SideBarMenu from "./SidebarMenu";

interface SideBarProps {
   user?: User | null;
}

export default function SideBar({ user }: SideBarProps) {
   return (
      <div className="h-screen w-1/6 fixed overflow-hidden z-40">
         {user ? (
            <div className="flex h-full mt-14 items-center flex-col w-full border border-transparent border-r-2  border-r-black">
               <div className="h-20 w-20 mb-2 mt-20 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center p-0">
                  {user.avatar ? (
                     <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="h-full w-full object-cover"
                     />
                  ) : (
                     <CircleUserRound className="w-full h-full text-neutral-700 " />
                  )}
               </div>
               <h4 className="font-bold text-cta-text-active mb-2">
                  {user.username}
               </h4>
               <p className="text-neutral-400">200 / 2.4k</p>
               <SideBarMenu />
               <button className="btn-primary m-6">
                  Create Post
                  <span className="pl-1">
                     <Plus />
                  </span>
               </button>
            </div>
         ) : (
            <div className="flex items-center mt-28 flex-col fixed left-22">
               <p>Please log in</p>
            </div>
         )}
      </div>
   );
}
