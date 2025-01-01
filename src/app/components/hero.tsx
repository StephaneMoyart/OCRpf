'use client'

import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"

export const HeroSection = () => {
    return (
        <div className="relative flex flex-col items-center h-dvh w-full">
                <div className="flex gap-5 justify-center items-center h-1/4 w-full">
                    <p className="text-7xl">👋</p>
                    <h1 className="text-7xl">Web Dev Fullstack</h1>
                </div>
                <div className="absolute flex gap-2 top-1/4 h-[72%] w-[90%] text-background">
                    <div className="z-10 absolute top-[-30px] right-[-30px] h-72 w-72 bg-white/10 rounded-lg">
                        <div className="absolute inset-1 rounded-lg cursor-default z-50">
                            <Image
                                className="rounded-lg"
                                src="/profil.jpg"
                                alt="photo de profil"
                                fill={true}
                                />
                        </div>
                    </div>
                    
                    <div className="relative h-full w-1/3 bg-foreground border-2 border-black shadow-lg shadow-black rounded-md rounded-l-2xl p-4">
                        <p>Interets &#123; <br /> &nbsp;&nbsp; Developpement d'App Web complètes <br /> &#125;</p>
                    </div>
                    
                    <div className="relative h-full w-1/3 bg-foreground border-2 border-black shadow-lg shadow-black rounded-md p-4">
                    <p>Portfolio &#123; <br /> &nbsp;&nbsp; Réalisation personnelle <br /> &#125;</p>
                    <br />
                    <p>Ayant utilisé &#123; <br /> &nbsp;&nbsp; NextJs <br /> &nbsp;&nbsp; React <br /> &nbsp;&nbsp; Motion <br /> &nbsp;&nbsp; Tailwind <br /> &nbsp;&nbsp; Typescript <br /> &#125;</p>
                    <br />
                    <p>/* Et c'est tout ! */</p>
                    </div>
                    
                    <div className="relative h-full w-1/3 bg-foreground border-2 border-black shadow-lg shadow-black rounded-md rounded-r-2xl p-4">
                    <p>Nom &#123; <br /> &nbsp;&nbsp; Moyart <br /> &#125;</p>
                    <br />
                    <p>Prenom &#123; <br /> &nbsp;&nbsp; Stephane <br /> &#125;</p>
                    <br />
                    <p>Parcours &#123; <br /> &nbsp;&nbsp; Developpeur Web <br /> &nbsp;&nbsp; Niveau: Bac + 2 <br /> &nbsp;&nbsp; Organisme: Openclassrooms <br /> &#125;</p>
                    <br />
                    <p>Recherche &#123; <br /> &nbsp;&nbsp; Nouvelles opportunités <br /> &nbsp;&nbsp; Missions <br /> &#125;</p>
                    </div>
                </div>
            </div>
    )
}