import logo from "./logo.png"

function NavBar() {
    return (
        <nav className="w-full h-14 bg-slate-900 relative shadow-xl shadow-black">
            <img src={logo} className="w-fit h-full pl-2 md:pl-8 p-4 md:p-2" alt="logo" />
            <div className="absolute w-fit h-full flex justify-center items-center top-0 right-3 md:right-20 space-x-4">
                <a className=" no-underline font-semibold text-gray-500 hover:text-sky-200 hover:scale-105 transition-colors" href="">Home</a>
                <a className=" no-underline font-semibold text-gray-500 hover:text-sky-200 hover:scale-105 transition-colors" href="">Work</a>
                <a className=" no-underline font-semibold text-gray-500 hover:text-sky-200 hover:scale-105 transition-colors" href="">About</a>
                <a className=" no-underline font-semibold text-gray-500 hover:text-sky-200 hover:scale-105 transition-colors" href="">Contact</a>
            </div>
        </nav>
    )
}

export default NavBar