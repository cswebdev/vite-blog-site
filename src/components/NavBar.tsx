

export default function NavBar() {
    return (
        <div className="flex flex-row content-center items-center bg-slate-100 justify-between py-3 px-3 mb-10">
            <p className="font-bold cursor-default">
                simplr-social
            </p>
            <div className="flex flex-row items-center gap-10">
                <div className="flex flex-row list-none gap-4">
                    <a className="text-black hover:text-slate-700" href="#">Home</a>
                    <a className="text-black hover:text-slate-700" href="#">Explore</a>
                    <a className="text-black hover:text-slate-700" href="#">About</a>
                </div>
                <button className="border rounded-md py-1 px-5 text-white bg-blue-500 hover:bg-blue-600">Login</button>
            </div>
        </div>
    )
}