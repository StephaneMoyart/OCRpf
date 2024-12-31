'use client'

import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"

export const HeroSection = () => {
    const [contentNb, setContentNb] = useState(1)
    const vsMockContent = [
        "Je présente mon profil ici",
        "Je présente ce que je recherche ici",
        "Bonus, je sais pas encore"
    ]


    return (
        <div className="relative flex flex-col items-center h-dvh w-full">
                <div className="flex gap-5 justify-center items-center h-1/4 w-full">
                    <p className="text-7xl">👋</p>
                    <h1 className="text-7xl">Web Dev Fullstack</h1>
                </div>
                <div className="absolute flex gap-2 top-1/4 h-[72%] w-[90%]">
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
                        <p className="text-background">test principal &#123; <br /> &nbsp;&nbsp; je suis le contenu de ce test <br /> &#125;</p>
                    </div>
                    <div className="relative h-full w-1/3 bg-foreground border-2 border-black shadow-lg shadow-black rounded-md p-4">
                        
                    </div>
                    <div className="relative h-full w-1/3 bg-foreground border-2 border-black shadow-lg shadow-black rounded-md rounded-r-2xl p-4">
                    <p className="text-background">Nom &#123; <br /> &nbsp;&nbsp; Moyart <br /> &#125;</p>
                    <br />
                    <p className="text-background">Prenom &#123; <br /> &nbsp;&nbsp; Stephane <br /> &#125;</p>
                    </div>

                    {/* <div className="flex flex-col absolute inset-1 bg-[#282C34] rounded-t-lg">
                        <div className="flex items-center h-10 w-full bg-[#21252B] rounded-t-lg border-b-background border-b-2">
                            <div onClick={() => setContentNb(1)} className="flex items-center justify-center h-full px-8 border-r border-r-background cursor-pointer">
                                <p>profil.tsx</p>
                            </div>
                            <div onClick={() => setContentNb(2)} className="flex items-center justify-center h-full px-8 border-r border-r-background cursor-pointer">
                                <p>recherche.tsx</p>
                            </div>
                            <div onClick={() => setContentNb(3)} className="flex items-center justify-center h-full px-8 cursor-pointer">
                                <p>style.css</p>
                            </div>
                        </div>

                        <div className="flex flex-1 p-2 rounded-b-lg">
                            <p className="">{vsMockContent[(contentNb - 1)]}</p>
                        </div>
                    </div> */}
                </div>
            </div>
    )
}