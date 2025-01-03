'use client'

import Image from "next/image"
import { TypedText } from "./typed-text"
import { BlinkingCursor } from "./blinking-cursor"
import { motion, useAnimate } from "motion/react"
import { useEffect, useRef } from "react"

export const HeroSection = () => {
    return (
        <div className="relative flex flex-col items-center w-full lg:h-dvh">
                <div className="flex max-lg:gap-4 lg:gap-8 justify-center items-center lg:h-1/4 max-lg:p-5 w-full">
                    <motion.p
                        className="text-7xl origin-bottom"
                        initial={{ opacity: 0, rotateX: -90 }}
                        animate={{ opacity: 1 , rotateX: 0 }}
                        // transition={{ delay: 5 }}
                    >
                        👋
                    </motion.p>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl">Web Dev Fullstack</h1>
                </div>
                <div className="relative flex gap-2 text-background max-md:justify-center max-md:items-center max-lg:flex-col max-lg:w-[95%] lg:absolute lg:top-1/4 lg:h-[72%] lg:w-[90%]">
                    <div className="relative z-10 md:absolute bg-white/10 rounded-lg md:top-4 md:right-4 lg:top-[-30px] lg:right-[-30px] max-md:w-full max-w-[375px] aspect-square md:w-72">
                        <div className="absolute inset-1 rounded-lg cursor-default z-50">
                            <Image
                                className="rounded-lg"
                                src="/profil.jpg"
                                alt="photo de profil"
                                fill={true}
                                />
                        </div>
                    </div>
                    
                    <div className="relative lg:h-full w-full lg:w-1/3 bg-foreground border-2 border-black shadow-lg shadow-black rounded-md max-lg:rounded-b-2xl lg:rounded-l-2xl p-4 max-lg:order-3">
                        <TypedText text="
                            Interets &#123; <br /> 
                            &nbsp;&nbsp; Developpement d'App Web complètes <br /> 
                            &#125; <br />
                            <br />
                            Bonus &#123; <br />
                            &nbsp;&nbsp; Animations (motion) <br />
                            &#125;
                        "/>
                        <BlinkingCursor/>
                    </div>
                    
                    <div className="relative lg:h-full w-full lg:w-1/3 bg-foreground border-2 border-black shadow-lg shadow-black rounded-md p-4 max-lg:order-2">
                        <TypedText text="
                            Portfolio &#123; <br /> 
                            &nbsp;&nbsp; Réalisation personnelle <br /> 
                            &#125; <br />
                            <br />
                            Ayant utilisé &#123; <br /> 
                            &nbsp;&nbsp; NextJs <br /> 
                            &nbsp;&nbsp; React <br /> 
                            &nbsp;&nbsp; Motion <br /> 
                            &nbsp;&nbsp; Tailwind <br /> 
                            &nbsp;&nbsp; Typescript <br /> 
                            &#125; <br />
                            <br />
                            /* Et c'est tout ! */
                        "/>
                        <BlinkingCursor/>
                    </div>
                    
                    <div className="relative lg:h-full w-full lg:w-1/3 bg-foreground border-2 border-black shadow-lg shadow-black rounded-md max-lg:order-1 max-lg:rounded-t-2xl lg:rounded-r-2xl p-4">
                        <TypedText text="
                            Nom &#123; <br /> 
                            &nbsp;&nbsp; Moyart <br /> 
                            &#125; <br />
                            <br />
                            Prenom &#123; <br /> 
                            &nbsp;&nbsp; Stephane <br /> 
                            &#125; <br />
                            <br />
                            Parcours &#123; <br /> 
                            &nbsp;&nbsp; Developpeur Web <br /> 
                            &nbsp;&nbsp; Niveau: Bac + 2 <br /> 
                            &nbsp;&nbsp; Organisme: Openclassrooms <br /> 
                            &#125; <br />
                            <br />
                            Recherche &#123; <br/> 
                            &nbsp;&nbsp; Nouvelles opportunités <br/> 
                            &nbsp;&nbsp; Missions <br/> 
                            &#125;
                        "/>
                        <BlinkingCursor/>
                    </div>
                </div>
            </div>
    )
}