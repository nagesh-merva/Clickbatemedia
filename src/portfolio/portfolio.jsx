import Marketing from "./Marketing.jpg"
import Content from "./Content.jpg"
import Web from "./Web.jpg"


function Portfolio() {
    return (
        <div className="pt-5 md:pt-20 w-full h-auto bg-slate-900">
            <h1 className="pt-8 font-sans text-2xl  md:text-6xl font-semibold text-stone-100 text-center">Our Portfolio </h1>
            <div className="pt-10 md:pt-20 grid grid-cols-1 md:grid-cols-2 ">
                <div className="relative h-[32rem] bg-sky-950 flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-belgiano font-bold text-amber-50">MARKETING</h1>
                    <p className="p-10 text-stone-50 text-md text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ducimus provident reiciendis fuga dolorem reprehenderit! Rerum dolorum accusantium vero nulla.</p>
                    <button className="absolute bottom-8 text-xl font-semibold rounded-full border-2 pl-4 pr-4 p-2 bg-stone-200 border-x-black drop-shadow-xl shadow-black hover:scale-125 hover:border-y-black hover:bg-white transition-all">Know more</button>
                </div>
                <div className="h-[32rem] bg-white flex justify-center items-center">
                    <img src={Marketing} className=" h-96 w-auto" alt="" />
                </div>
            </div>
            <div className="relative w-full h-[32rem] flex items-center">
                <img src={Content} className="h-[32rem] w-full" alt="" />
                <h1 className="absolute left-14 text-5xl font-bold font-belgiano text-stone-200 drop-shadow-lg">Content Creation</h1>
                <button className="absolute left-[10%] bottom-[10%] text-xl font-semibold rounded-full border-2 pl-4 pr-4 p-2 bg-stone-200 border-x-black drop-shadow-xl shadow-black hover:scale-125 hover:border-y-black hover:bg-white transition-all">Know more</button>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 ">
                <div className="h-[32rem] bg-white flex justify-center items-center">
                    <img src={Web} className=" h-[30rem] w-auto" alt="" />
                </div>
                <div className="relative h-[32rem] bg-sky-950 flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-belgiano font-bold text-amber-50">Web Design</h1>
                    <p className="p-10 text-stone-50 text-md text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ducimus provident reiciendis fuga dolorem reprehenderit! Rerum dolorum accusantium vero nulla.</p>
                    <button className="absolute bottom-8 text-xl font-semibold rounded-full border-2 pl-4 pr-4 p-2 bg-stone-200 border-x-black drop-shadow-xl shadow-black hover:scale-125 hover:border-y-black hover:bg-white transition-all">Know more</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio