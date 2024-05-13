import 'boxicons/css/boxicons.min.css'
import cursor from "./cursoranimation.json"
import Lottie from 'lottie-react'

function Contact() {
    return (
        <div className="bg-slate-900 h-screen w-full flex flex-col justify-center items-center">
            <h1 className="font-sans font-bold text-2xl md:text-6xl text-amber-50 ">Get in touch with us</h1>
            <div className="flex flex-col md:flex-row pt-10 justify-center items-center  space-y-4 md:space-y-0 md:space-x-4">
                <button className=" text-md font-normal rounded-full border-2 p-4 bg-stone-200 border-x-black drop-shadow-xl shadow-black hover:scale-125 hover:border-y-black hover:bg-white transition-all"><li className='bx bx-phone'></li> +91 93545486885</button>
                <button className=" text-md font-normal rounded-full border-2 p-4 bg-stone-200 border-x-black drop-shadow-xl shadow-black hover:scale-125 hover:border-y-black hover:bg-white transition-all"><li className='bx bx-envelope'></li> clickbatemedia@gmail.com</button>
                <button className=" text-md font-normal rounded-full border-2 p-4 bg-stone-200 border-x-black drop-shadow-xl shadow-black hover:scale-125 hover:border-y-black hover:bg-white transition-all"><li className='bx bxl-instagram'></li> @clickbatemedia</button>
            </div>
            <div className='h-32 w-32 pt-1'>
                <Lottie animationData={cursor}></Lottie>
            </div>
        </div>
    )
}

export default Contact