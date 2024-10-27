import { useState, useEffect } from "react";
import { DropDownMenuProps } from "../types/blogs";
import '../styles.css'

const DropdownMenu: React.FC<DropDownMenuProps> = () => {
    // Declare state variables directly within the DropdownMenu component
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('#menu-button') && !target.closest('#dropdown-menu')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={toggleMenu}
                    // className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-100"
                    className="btn-primary"
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    Settings
                </button>
            </div>

            {isOpen && (
                <div
                    id="dropdown-menu"
                    className="btn-menu-popup"
                    role="menu"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                    onMouseLeave={() => setIsOpen(false)} // Hide menu on mouse leave
                >
                    <div className="py-0 overflow-hidden" role="none">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                            Account Settings
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-1">
                            FAQ
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-2">
                            Support
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
