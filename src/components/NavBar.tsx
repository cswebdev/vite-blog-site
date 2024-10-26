import DropdownMenu from "./DropDownMenu";


export default function NavBar() {

    // const DropDownMenu = () => {
    //     const [isOpen, setIsOpen] = useState(false);
    // }

    // const toggleMenu = () => {
    //     setIsOpen((prev) => !prev);
    // }

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         const target = event.target as HTMLElement;
    //         if(!target.closest('#menu-button') && !target.closest("dropdown-menu")) {
    //             setIsOpen(false)
    //         }
    //     }

    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside)
    //     };
    // }, []);



    return (
        <div className="flex flex-row content-center items-center bg-white justify-between py-3 px-3 mb-10 min-w-full">
            <p className="font-bold lg:text-3xl md:text-2xl lg:text-blue-500 cursor-default">
                simplr.social
            </p>
            <div className="flex flex-row items-center lg:gap-8 md:gap-6 sm:gap-3">
                <div className="flex flex-row list-none lg:gap-8 md:gap-10 sm:gap-6 lg:text-lg text-blue-500">
                    <a className="border-b-2 border-transparent hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" href="#">Home</a>
                    <a className="border-b-2 border-transparent hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" href="#">Explore</a>
                    <a className="border-b-2 border-transparent hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600" href="#">About</a>
                    {/* <a className="border-b-2 border-transparent hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600">Settings</a> */}
                    <DropdownMenu options={[]} darkModeEnabled={false} index={0} />
                    
                </div> 
                <button className="rounded-md py-1 px-5 font-extrabold text-blue-500 bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:border-blue-600">Login</button>
            </div>
        </div>
    )
}