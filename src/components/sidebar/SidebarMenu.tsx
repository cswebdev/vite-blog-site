import {
   BellIcon,
   HomeIcon,
   Search,
   Users,
   User,
   Settings,
   MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

interface Option {
   tag: string;
   icon: JSX.Element;
   navLink: string; // Use camelCase for consistency
}

export default function SideBarMenu() {
   const [options] = useState<Option[]>([
      { tag: "Home", icon: <HomeIcon />, navLink: "/homepage" },
      { tag: "Search", icon: <Search />, navLink: "/search" },
      { tag: "Notification", icon: <BellIcon />, navLink: "/notifications" },
      { tag: "Chat", icon: <MessageCircle />, navLink: "/chat" },
      { tag: "Communities", icon: <Users />, navLink: "/communities" },
      { tag: "Profile", icon: <User />, navLink: "/profile" },
      { tag: "Settings", icon: <Settings />, navLink: "/settings" },
   ]);

   return (
      <div className="w-1/2">
         {options.map((option, index) => (
            <NavLink
               key={index}
               to={option.navLink} 
               className="flex items-center my-3 text-lg hover:font-semibold p-1 active:font-bold"
           
            >
               <span className="pr-1">{option.icon}</span>
               <p>{option.tag}</p>
            </NavLink>
         ))}
      </div>
   );
}
