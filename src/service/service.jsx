import logo from "./logo.png"


function Service() {
    return (
        <div className="flex flex-col items-center bg-slate-900 pt-10 p-4 md:p-20">
            <img src={logo} className="h-24 w-auto mb-10" alt="logo" />
            <p className="pt-5  text-lg font-sans font-thin text-stone-300 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ex magnam, adipisci nulla eligendi distinctio voluptatum similique dolorum sunt dolores hic? Quasi repudiandae accusamus, vel molestias nobis delectus inventore? Numquam!</p>

        </div>

    )
}

export default Service