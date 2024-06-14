import background from "./background.png"
import graphic from "./graphic.png"

function MainPage() {
    return (
        <div className="bg-black/50 z-10 backdrop-filter">
            <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
                <img src={background} className="absolute w-full h-full -z-10" alt="" />
                <div className="relative  flex justify-center items-center flex-col overflow-hidden">
                    <p className=" text-gray-300 font-thin font-poppins text-lg md:text-2xl pb-4">Hello <s className="text-slate-800">Digital</s> World! We are</p>
                    <div className="pt-4 group flex flex-col justify-center items-center">
                        <h1 className="text-stone-300 font-poppins font-extrabold text-6xl drop-shadow-lg">ClickBate Media</h1>
                    </div>
                    <h3 className="text-xl font-normal text-stone-300 font-sans pt-4">We are a team of creative experts who bring your ideas to life through innovative design and strategy.</h3>
                    {/* <button className="absolute bottom-20 text-xl font-semibold rounded-full border-2 pl-4 pr-4 p-2 bg-stone-200 border-x-black drop-shadow-xl shadow-black hover:scale-125 hover:border-y-black hover:bg-white transition-all">Contact</button> */}
                </div>
            </div>
        </div>
    )
}

export default MainPage