'use client'

import { useScroll, useTransform } from "motion/react"
import { useEffect, useRef } from "react"
import { ProjectCard } from "./project-card"

export const Projects = () => {
    const cards = [
        {
            title: "numero 1",
            color: "bg-blue-200",
            translateY: "top-[10px]",
            range: 1/3,
            targetScale: 0.95
        },
        {
            title: "numero 2",
            color: "bg-green-200",
            translateY: "top-[20px]",
            range: 2/3,
            targetScale: 0.975
        },
        {
            title: "numero3",
            color: "bg-red-200",
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
        <div ref={container} className="">
            { cards.map((card, index) => 
                <ProjectCard key={index} card={card}  containerProgress={scrollYProgress}/>  
            )}
        </div>
    )
}