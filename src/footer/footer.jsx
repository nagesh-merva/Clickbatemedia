import React, { useRef, useEffect } from 'react'
import { animate } from '@motionone/dom'
import logo from './logo.png'

function Footer() {
    const boxRef = useRef(null);

    useEffect(() => {
        const animation = animate(
            boxRef.current,
            { transform: ['translateY(0px)', 'translateY(-30px)'] },
            { duration: 2, repeat: Infinity, direction: 'alternate' }
        )

        return () => animation.cancel()
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="relative bg-black h-96 text-white py-4">
            <div className="container h-full mx-auto px-4 flex flex-col">
                <div className="p-5 flex justify-center items-center w-full h-auto space-x-3">
                    <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center hover:animate-pulse">
                        <i className="text-lg text-blue-500 bx bxl-twitter"></i>
                    </div>
                    <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center hover:animate-pulse">
                        <i className='text-lg text-pink-600 bx bxl-instagram'></i>
                    </div>
                    <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center hover:animate-pulse">
                        <i className='text-lg text-blue-600 bx bxl-linkedin'></i>
                    </div>
                </div>
                <div className="pt-10 flex justify-center h-auto w-full space-x-5">
                    <li className="text-lg font-poppins bx bxs-phone">+91 9354548685</li>
                    <li className="text-lg font-popppins bx bx-envelope">  clickbatemedia@gmail.com</li>
                </div>
                <div className='pt-10 flex flex-col items-center justify-center h-auto w-full'>
                    <img src={logo} className='w-52 h-auto' alt="logo" />
                    <a href="#" onClick={scrollToTop}><i ref={boxRef} className='pt-6 text-2xl bx bx-chevron-up'></i></a>
                </div>
                <p className="absolute bottom-2 left-10">&copy; 2024 ClickBateMedia. </p>
                <p className="absolute bottom-2 right-10">All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
