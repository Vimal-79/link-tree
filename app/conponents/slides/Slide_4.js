"use client"
import React from 'react'

function Slide_4() {
    return (
        <>
            <div className="bg-[#e8efd6] min-h-screen flex items-center justify-center px-4 sm:px-6">
                <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1440px] mx-auto py-20 sm:py-30">
                    <div className="image-container w-full lg:w-1/2 mt-10 lg:mt-0">
                        <img src="/image_4.png" className="w-full max-w-140 mx-auto" alt="Audience analytics preview" />
                    </div>
                    <div className="hero flex flex-col justify-center items-center w-full lg:w-1/2 lg:pl-8">
                        <p className="text-[#1e2330] text-4xl sm:text-5xl lg:text-6xl font-[900]">Create and customize your Linktree in minutes</p>
                        <p className="text-neutral-950 my-6 text-base sm:text-[20px]">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
                        <div className="flex gap-2 justify-start w-full mt-4">
                            <button className="bg-[#e9c0e9] hover:bg-[#dba8db] font-bold text-neutral-950 p-5 px-18 rounded-full cursor-pointer"> Get started for free </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide_4
