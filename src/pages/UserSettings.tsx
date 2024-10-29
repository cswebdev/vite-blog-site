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
    <div className="flex min-h-screen bg-background">
      <div className="mt-32 flex w-2/3 flex-col justify-start">
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
                    } text-copy-secondary hover:border-cta`}
                    onClick={() => setSelectedSection("General")}
                  >
                    General
                  </button>
                </li>
                <li>
                  <button
                    className="border-b-4 border-transparent text-copy-secondary hover:border-pink-400"
                    onClick={() => setSelectedSection("Account")}
                  >
                    Account
                  </button>
                </li>
                <li>
                  <button
                    className="border-b-4 border-transparent text-copy-secondary hover:border-pink-400"
                    onClick={() => setSelectedSection("Privacy")}
                  >
                    Privacy
                  </button>
                </li>
                <li>
                  <button
                    className="border-b-4 border-transparent text-copy-secondary hover:border-pink-400"
                    onClick={() => setSelectedSection("Notifications")}
                  >
                    Notifications
                  </button>
                </li>
              </ul>
            </div>
            <div className="rounded-rt-lg col-span-2 ml-8 rounded-br-lg bg-card pl-10 pr-10 pt-0 text-copy-primary">
              <h2 className="mb-4 text-2xl font-semibold">
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
