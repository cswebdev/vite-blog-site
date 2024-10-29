import { useState } from "react";
import GeneralSettings from "../components/userSettings/GeneralSettings";
import AccountSettings from "../components/userSettings/AccountSettings";
import PrivacySettings from "../components/userSettings/PrivacySettings";
import NotificationSettings from "../components/userSettings/NotificationSettings";

const components = {
   General: GeneralSettings,
   Account: AccountSettings,
   Privacy: PrivacySettings,
   Notifications: NotificationSettings,
};

export default function UserSettings() {
   const [selectedSection, setSelectedSection] = useState<
      "General" | "Account" | "Privacy" | "Notifications"
   >("General");

   const SelectedComponent = components[selectedSection];

   return (
      <div className="flex min-h-screen bg-background ">
         <div className="flex flex-col justify-start mt-32 w-2/3">
            <div className="p-4">
               <div className="grid grid-cols-[200px_1fr_1fr] gap-0">
                  <div className="">
                     <ul className="space-y-5 text-right font-semibold">
                        <li>
                           <button
                              className={`border-b-4 ${
                                 selectedSection === "General"
                                    ? "border-border"
                                    : "border-transparent"
                              }  hover:border-cta text-copy-secondary`}
                              onClick={() => setSelectedSection("General")}
                           >
                              General
                           </button>
                        </li>
                        <li>
                           <button
                              className="border-b-4 border-transparent hover:border-pink-400 text-copy-secondary"
                              onClick={() => setSelectedSection("Account")}
                           >
                              Account
                           </button>
                        </li>
                        <li>
                           <button
                              className="border-b-4 border-transparent hover:border-pink-400 text-copy-secondary"
                              onClick={() => setSelectedSection("Privacy")}
                           >
                              Privacy
                           </button>
                        </li>
                        <li>
                           <button
                              className="border-b-4 border-transparent hover:border-pink-400 text-copy-secondary"
                              onClick={() =>
                                 setSelectedSection("Notifications")
                              }
                           >
                              Notifications
                           </button>
                        </li>
                     </ul>
                  </div>
                  <div className="pt-0 pr-10 pl-10 rounded-rt-lg rounded-br-lg text-copy-primary bg-card ml-8 col-span-2">
                     <h2 className="text-2xl font-semibold mb-4">
                        Manage your settings here
                     </h2>
                     <div className="justify-center">
                        <SelectedComponent />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
