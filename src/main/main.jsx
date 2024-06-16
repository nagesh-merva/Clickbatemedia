import React, { useRef, useEffect } from 'react'
import { animate, timeline } from '@motionone/dom'
import background from './background.png'

function MainPage() {
    const textRef = useRef(null);

    useEffect(() => {
        const svg = textRef.current;

        const letters = Array.from(svg.querySelectorAll('text path'));
        const animation = timeline(letters.map((letter, i) => [
            letter,
            { strokeDashoffset: [letter.getTotalLength(), 0] },
            { duration: 4, delay: i * 0.25, fill: 'forwards' }
        ]));

        return () => animation.stop();
    }, []);

    return (
        <div className="bg-black/50 z-10 backdrop-filter">
            <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
                <img src={background} className="absolute w-full h-full -z-10" alt="" />
                <div className="relative flex justify-center items-center flex-col overflow-hidden">
                    <p className="text-gray-300 font-thin font-poppins text-lg md:text-2xl pb-4">
                        Hello <s className="text-slate-800">Digital</s> World! We are
                    </p>
                    <div className="pt-4 group flex flex-col justify-center items-center">
                        <svg
                            ref={textRef}
                            viewBox="0 0 150 20"
                            className="h-24 w-full"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.1"
                        >
                            <text x="0" y="15" className="text-stone-300 font-poppins font-extrabold text-lg">
                                <tspan className="stroke-dasharray">ClickBate Media</tspan>
                            </text>
                        </svg>
                    </div>
                    <h3 className="text-xl font-normal text-stone-300 font-sans pt-4">
                        We are a team of creative experts who bring your ideas to life through innovative design and strategy.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

