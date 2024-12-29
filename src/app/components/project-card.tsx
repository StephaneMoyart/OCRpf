'use client'

import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { useRef } from "react"

export const ProjectCard = ({ card, containerProgress }) => {
    const {id, title, mainPicture, secondaryPicture, techs, color, translateY, range, targetScale} = card
    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 0.5", "start start"]
    })
    const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.9])
    const borderTopLeftRadius = useTransform(scrollYProgress, [0, 1], ["0", "20px"])
    const borderTopRightRadius = useTransform(scrollYProgress, [0, 1], ["0", "20px"])
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["0", "20px"])

    const scale = useTransform(containerProgress, [range, 1], [1, targetScale])

    if (id === 3) {
        return (
            <div ref={cardRef} className="h-dvh w-full flex items-end justify-center sticky top-0">
                <motion.div 
                    style={{ scaleX, borderRadius, scale, transformOrigin: "top" }}
                    className={`h-[90%] w-full flex items-center justify-center ${color} relative ${translateY}`}
                >
                    {id === 3 &&
                        <p className="text-foreground text-3xl">D'autres projets sont en cours de création...</p>
                    }
                </motion.div>
            </div>
        )
    }

    return (
        <div ref={cardRef} className="h-dvh w-full flex items-end justify-center sticky top-0">
            <motion.div 
                style={{ scaleX, borderTopLeftRadius, borderTopRightRadius, scale, transformOrigin: "top" }}
                className={`h-[90%] w-full flex flex-col justify-center px-40 ${color} relative ${translateY}`}
            >
                <div className="flex shrink-0 items-center justify-between w-full h-60">
                    <h3 className="text-6xl font-bold">{title}</h3>
                    <div className="flex gap-4">
                        {techs.map((tech, index) => (
                            <div key={index} className="py-2 px-4 rounded-3xl border-dashed border border-white">
                                <p>{tech}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <Image
                        className="rounded-t-[20px]"
                        src={mainPicture}
                        alt="image principale du projet"
                        fill
                        
                    />
                </div>
            </motion.div>
        </div>
    )
}