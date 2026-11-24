"use client"
import React from 'react'

function Slide_1() {
    return (
        <>
            <div className="bg-[#254f1a] min-h-screen flex items-center justify-center px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto py-20 sm:py-32 lg:py-60">
                    <div className="hero flex flex-col justify-center items-center w-full lg:w-1/2 lg:pr-8">
                        <p className="text-[#d2e823] text-4xl sm:text-5xl lg:text-7xl font-[900]">Everything you are. In one, simple link in bio.</p>
                        <p className="text-neutral-200 my-6 text-base sm:text-[20px]">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-start w-full mt-4">
                            <input className="bg-gray-200 p-4 font-bold rounded-md w-full sm:w-80" type="text" placeholder="Enter you handle" />
                            <button className="bg-[#e9c0e9] font-bold text-neutral-800 p-5 px-8 rounded-full"> Claim your Linktree</button>
                        </div>
                    </div>
                    <div className="image-container w-full lg:w-1/2 mt-10 lg:mt-0">
                        <img src="/image_1.png" className="w-full max-w-120 mx-auto" alt="Linktree profile preview" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide_1
