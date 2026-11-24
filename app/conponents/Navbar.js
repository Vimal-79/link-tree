import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'




function Navbar() {

    useEffect(() => {
        window.addEventListener('scroll', handleNavBar)

        return () => {
            window.removeEventListener('scroll', handleNavBar)
        }
    }, [])

    const [hideNavBar, setHideNavBar] = useState(false);
    // const [Scrolled, setScrolled] = useState(0);
    let Scrolled;

    const handleNavBar = () => {


        if (window.scrollY >= 70) {
            setHideNavBar(true);
            if (Scrolled > window.scrollY) {
                console.log("show Navbar")
                setHideNavBar(false);
            }   
            Scrolled = window.scrollY;


            // setScrolled(Math.floor(window.scrollY));
            // console.log("Scrolled more than 70px");
            // console.log("Navbar rendered");
            // console.log(Math.floor(window.scrollY));
            // console.log(Scrolled)
        }

        else if (window.scrollY < 70) {
            setHideNavBar(false);
            // console.log('scrolled less than 70px')
        }
    }



    return (
        <div className={`flex justify-between items-center px-3 sm:px-4 py-3 sm:py-4 w-[94vw] sm:w-[90vw] max-w-[1440px] rounded-full bg-white fixed ${hideNavBar ? 'top-[-100%]' : 'top-3 sm:top-12'} transition-all ease duration-500 right-1/2 translate-x-1/2 z-10`}>
            <div className='flex items-center gap-18 sm:pl-4 lg:pl-8 *:cursor-pointer'>
                <Link href="/">
                    <img className='w-24 sm:w-32' src="/logo.svg" alt="Linktree" />
                </Link>

                <ul className='hidden lg:flex items-center text-neutral-800 font-[500]'>
                    <li className='px-4 py-3 rounded-md hover:bg-neutral-300/30'>Product</li>
                    <li className='px-4 py-3 rounded-md hover:bg-neutral-300/30'>Templates</li>
                    <li className='px-4 py-3 rounded-md hover:bg-neutral-300/30'>Marketplaces</li>
                    <li className='px-4 py-3 rounded-md hover:bg-neutral-300/30'>Learn</li>
                    <li className='px-4 py-3 rounded-md hover:bg-neutral-300/30'>Pricing</li>
                </ul>
            </div>

            <div className='flex gap-2 items-center '>
                <Link href="/login" className='hidden sm:block p-3 sm:p-4 px-4 sm:px-6 font-semibold bg-neutral-300/40 rounded-md hover:bg-neutral-300/50'>Log in</Link>
                <Link href="/signup" className='bg-[#1e2330] text-sm sm:text-[18px] text-white p-3 sm:p-4 px-4 sm:px-6 rounded-full hover:bg-[#283042]'>Sign up free</Link>
            </div>

        </div>
    )
}

export default Navbar
