import logo from "./logo.png"

function NavBar() {
    return (
        <nav className="z-30 fixed flex items-center top-5 left-1/2 transform -translate-x-1/2 w-10/12 h-16 rounded-full bg-gray-950/90" style={{ boxShadow: "inset 0 0 20px 2px rgba(149, 147, 135, 0.3)" }}>
            <img src={logo} className="w-fit h-10 pl-2 md:pl-8 p-4 md:p-2" alt="logo" />
            <div className=" pl-10 w-fit h-full flex justify-center items-center space-x-8">
                <a className=" font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" href="">Home</a>
                <a className=" font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" href="">About Us</a>
                <a className=" font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" href="">Services</a>
                <a className=" font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" href="">Contact Us</a>
            </div>
            <div className="absolute right-8 w-fit h-full flex justify-center items-center space-x-4">
                <a className=" font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" href=""> <li className="bx bxs-phone"></li> +91 7264833272</a>
                <a className=" font-poppins no-underline text-sm font-normal bg-blue-500 h-10 w-fit p-4 flex items-center rounded-full text-white hover:text-gray-200 hover:scale-105 transition-colors" href="">Contact Us</a>
            </div>

        </nav>
    )
}

export default NavBar