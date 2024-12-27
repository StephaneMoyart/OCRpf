'use client'

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export const Skills = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"])
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
    const opacity = useTransform(scrollYProgress, [0.2, 0.75], [1, 0])

    return (
        <div ref={containerRef} className="h-[200dvh] w-full bg-green-200">
            <div className="flex justify-center items-center sticky top-0 h-dvh bg-background overflow-x-hidden">
                <motion.h2 style={{opacity, translateX}} className="relative text-9xl text-foreground">COMPETENCES</motion.h2>
                <motion.div style={{scaleX}} className="absolute h-dvh w-full bg-foreground transform origin-right"></motion.div>
            </div>
        </div>
    )
}