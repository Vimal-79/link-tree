"use client"
import React from 'react'

function Slide_3() {
    return (
        <>
            <div className="bg-[#780016] min-h-screen flex items-center justify-center px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto py-20 sm:py-40">
                    <div className="hero flex flex-col justify-center items-center w-full lg:w-1/2 lg:pr-8">
                        <p className="text-[#e9c0e9] text-4xl sm:text-5xl lg:text-6xl font-[900]">Share your Linktree from your Instagram, TikTok, Twitter and other bios</p>
                        <p className="text-neutral-200 my-6 text-base sm:text-[20px]">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
                        <div className="flex gap-2 justify-start w-full mt-4">
                            <button className="bg-[#e9c0e9] hover:bg-[#dba8db] font-bold text-neutral-950 p-5 px-18 rounded-full cursor-pointer"> Get stated for free</button>
                        </div>
                    </div>
                    <div className="image-container w-full lg:w-1/2 mt-10 lg:mt-0">
                        <img src="/image_3.png" className="w-full max-w-140 mx-auto" alt="Social bio preview" />
                    </div>
                </div>
            </div></>

    )
}

export default Slide_3
