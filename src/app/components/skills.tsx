'use client'

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { FigmaSvg, GithubSvg, NotionSvg, SlackSvg } from "./svgs"

export const Skills = () => {
    const skills = [
        {
            id: 1,
            svg: <GithubSvg/>,
            description: ["", ""]
        },
        {
            id: 2,
            svg: <FigmaSvg/>,
            description: ["", ""]
        },
        {
            id: 3,
            svg: <SlackSvg/>,
            description: ["", ""]
        },
        {
            id: 4,
            svg: <NotionSvg/>,
            description: ["", ""]
        },
    ]

    const [selectedSkill, setSelectedSkill] = useState(1)

    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"])
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
    const opacity = useTransform(scrollYProgress, [0.2, 0.75], [1, 0])

    const [show, setShow] = useState(false)

    useEffect(() => {
        const display = scrollYProgress.on("change", value =>
        setShow(value === 1))

        return () => display()
    }, [scrollYProgress])

    return (
        <div ref={containerRef} className="h-[200dvh] w-full bg-green-200">
            <div className="flex justify-center items-center sticky top-0 h-dvh bg-background overflow-hidden">
                <motion.h2 style={{opacity, translateX}} className="relative text-9xl text-foreground">COMPETENCES</motion.h2>
                <motion.div style={{scaleX}} className=" absolute h-dvh w-full bg-foreground transform origin-right">
                    {show &&
                        <div className="flex items-center justify-evenly h-full w-full ">
                            <div className="flex flex-col text-background text-8xl font-bold uppercase">
                                <p onClick={() => setSelectedSkill(1)} className="cursor-pointer">Github</p>
                                <p onClick={() => setSelectedSkill(2)} className="cursor-pointer">Figma</p>
                                <p onClick={() => setSelectedSkill(3)} className="cursor-pointer">Slack</p>
                                <p onClick={() => setSelectedSkill(4)} className="cursor-pointer">Notion</p>
                            </div>

                            <div className="relative w-[30%] aspect-square">
                                <AnimatePresence>
                                    {skills.filter(skill => skill.id === selectedSkill).map(skill => (
                                        <motion.div 
                                            initial={{y: "50%", rotate: -15, opacity: 0, scale: 0.9}}
                                            animate={{y: 0, rotate: 0, opacity: 1, scale: 1}}
                                            transition={{ duration: 1 }}
                                            exit={{x: "50%", rotate: 15, opacity: 0, scale: 0.5, transition: {duration: 0.5}}}
                                            className="w-full h-full absolute inset-0 bg-background rounded-lg border border-black shadow-sm shadow-[#C8C8C8]" key={skill.id}
                                        />
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                    }
                </motion.div>
            </div>
        </div>
    )
}