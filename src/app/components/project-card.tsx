'use client'

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export const ProjectCard = ({ card, containerProgress }) => {
    const {title, color, translateY, range, targetScale} = card
    const cardRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 0.5", "start start"]
    })
    const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.9])
    const borderTopLeftRadius = useTransform(scrollYProgress, [0, 1], ["0", "25px"])
    const borderTopRightRadius = useTransform(scrollYProgress, [0, 1], ["0", "25px"])

    const scale = useTransform(containerProgress, [range, 1], [1, targetScale])


    return (
        <div ref={cardRef} className="h-dvh w-full flex items-end justify-center sticky top-0">
            <motion.div 
                style={{ scaleX, borderTopLeftRadius, borderTopRightRadius, scale, transformOrigin: "top" }}
                className={`h-[90%] w-full flex items-center justify-center ${color} relative ${translateY}`}
            >
            </motion.div>
        </div>
    )
}