import { useState, useEffect } from "react";
import { DropDownMenuProps } from "../types/Types";
import "../styles.css";
import { Settings } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
// import UserSettings from "../pages/UserSettings";

const DropdownMenu: React.FC<DropDownMenuProps> = () => {
  // Declare state variables directly within the DropdownMenu component
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest("#menu-button") &&
        !target.closest("#dropdown-menu")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative m-2 inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleMenu}
          className="btn-settings"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Settings size={32} />
        </button>
      </div>

      {isOpen && (
        <div
          id="dropdown-menu"
          className="btn-menu-popup mr-2"
          role="menu"
          aria-labelledby="menu-button"
          tabIndex={-1}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="overflow-hidden py-0" role="none">
            <NavLink
              to="/UserSettings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </NavLink>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              FAQ
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              Support
            </a>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
