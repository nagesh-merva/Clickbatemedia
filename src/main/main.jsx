import background from "./background.jpg"
import graphic from "./graphic.png"

function MainPage() {
    return (
        <div className="relative h-screen w-full bg-white/30 backdrop-filter backdrop-blur-2xl shadow-lg flex justify-center items-center overflow-hidden">

            <img src={background} className="absolute w-full h-full -z-10" alt="" />
            <div className="absolute grid grid-cols-1 md:grid-cols-2 gap-4  h-full w-full bg-white/5 z-10 backdrop-filter backdrop-blur-2xl shadow-lg pl-2 pr-2 ">
                <div className="relative  flex justify-center items-center flex-col overflow-hidden">
                    <img src={graphic} className="absolute -bottom-12 -left-10 md:bottom-0 md:-left-12 -z-10 opacity-80 h-52 md:h-72" alt="" />
                    <img src={graphic} className="absolute -top-5 -right-8 md:-top-40 md:right-8 -z-10 opacity-80 h-52 md:h-96 rotate-90" alt="" />
                    <p className=" text-gray-300 font-semibold font-sans text-lg pb-4">Hello <s className="text-slate-800">Digital</s> World! We are</p>
                    <div className="group flex flex-col justify-center items-center">
                        <h1 className="text-stone-300 font-regular text-6xl drop-shadow-lg group-hover:animate-pulse">CLICKBATE</h1>
                        <p className="text-stone-300 font-regular text-2xl drop-shadow-lg group-hover:animate-pulse">media</p>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 font-sans pt-6"> Social Media Marketing Agency</h3>
                    <p className=" text-black font-thin  font-sans text-xl md:pl-32 pt-8 text-clip pl-2 pr-2">We are team of enthusiastic individuals who help brands grow by unleashing the potential of a social media</p>
                    <button className="absolute bottom-20 text-xl font-semibold rounded-full border-2 pl-4 pr-4 p-2 bg-stone-200 border-x-black drop-shadow-xl shadow-black hover:scale-125 hover:border-y-black hover:bg-white transition-all">Contact</button>
                </div>
                <div className="relative overflow-hidden">

                </div>
            </div>
        </div >
    )
}

export default MainPage