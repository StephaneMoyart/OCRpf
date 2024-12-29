'use client'

import { useScroll, useTransform } from "motion/react"
import { useEffect, useRef } from "react"
import { ProjectCard } from "./project-card"

export const Projects = () => {
    const cards = [
        {
            id: 1,
            title: "KASA",
            mainPicture: "/kasa1.png",
            secondaryPicture: "/kasa2.png",
            techs: ["React", "Sass"],
            color: "bg-zinc-800",
            translateY: "top-[10px]",
            range: 1/3,
            targetScale: 0.95
        },
        {
            id: 2,
            title: "MON VIEUX GRIMOIRE",
            mainPicture: "/mvg1.png",
            secondaryPicture: "/mvg2.png",
            techs: ["NodeJs", "Express", "Mongoose", "MongoDB"],
            color: "bg-zinc-700",
            translateY: "top-[20px]",
            range: 2/3,
            targetScale: 0.975
        },
        {
            id: 3,
            title: "numero3",
            color: "bg-zinc-600",
            translateY: "top-[30px]",
            range: 3/3,
            targetScale: 1
        }
    ]

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })

    return (
        <>
            <div className="h-dvh w-full flex justify-center items-center">
                <h2 className="text-9xl">MES PROJETS</h2>
            </div>
            <div ref={container} className="">
                { cards.map((card, index) => 
                    <ProjectCard key={index} card={card}  containerProgress={scrollYProgress}/>  
                )}
            </div>
        </>
    )
}