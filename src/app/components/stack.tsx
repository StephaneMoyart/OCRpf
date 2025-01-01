'use client'

import { motion, useScroll, useTransform } from "motion/react"
import { ExpressSvg, MongodbSvg, MongooseSvg, MotionSvg, NextSvg, NodejsSvg, ReactSvg, TailwindSvg, TypescriptSvg, ZodSvg } from "./svgs"
import { useRef, useState, useEffect } from "react"

export const Stack = () => {
    const stackItems = [
        {
            id: 1,
            name: "NextSvg",
            svg: <NextSvg/>,
            color: "#000000",
            hoverRingColor: "hover:shadow-[#FFFFFF]"
        },
        {
            id: 2,
            name: "ReactSvg",
            svg: <ReactSvg/>,
            color: "#61DAFB",
            hoverRingColor: "hover:shadow-[#61DAFB]"
        },
        {
            id: 3,
            name: "Typescript",
            svg: <TypescriptSvg/>,
            color: "#3178C6",
            hoverRingColor: "hover:ring-[#3178C6]"
        },
        {
            id: 4,
            name: "Tailwind",
            svg: <TailwindSvg/>,
            color: "#06B6D4",
            hoverRingColor: "hover:ring-[#06B6D4]"
        },
        {
            id: 5,
            name: "Motion",
            svg: <MotionSvg/>,
            color: "#F5EA16",
            hoverRingColor: "hover:ring-[#F5EA16]"
        },
        {
            id: 6,
            name: "NodeJs",
            svg: <NodejsSvg/>,
            color: "#83CD29",
            hoverRingColor: "hover:ring-[#83CD29]"
        },
        {
            id: 7,
            name: "Express",
            svg: <ExpressSvg/>,
            color: "#FFFFFF",
            hoverRingColor: "hover:ring-[#FFFFFF]"
        },
        {
            id: 8,
            name: "MongoDB",
            svg: <MongodbSvg/>,
            color: "#599636",
            hoverRingColor: "hover:ring-[#599636]"
        },
        {
            id: 9,
            name: "Mongoose",
            svg: <MongooseSvg/>,
            color: "#850000",
            hoverRingColor: "hover:ring-[#850000]"
        },
        {
            id: 10,
            name: "Zod",
            svg: <ZodSvg/>,
            color: "#3068B7",
            hoverRingColor: "hover:ring-[#3068B7]"
        },
    ]

    const transitionContainer = useRef(null)

    const { scrollYProgress } = useScroll({
        target: transitionContainer,
        offset: ["start start","end end"]
    })

    const [displayTitle, setDisplayTitle] = useState(false)

    const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const scaleY = useTransform(scrollYProgress, [0.5, 1], [0.009, 1])

    useEffect(() => {
        const display = scrollYProgress.on("change", value =>
        setDisplayTitle(value === 1))

        return () => display()
    }, [scrollYProgress])

    return (
        <>
            <motion.div ref={transitionContainer} className="h-[300dvh] bg-green-200" >
                <div className="sticky top-0 h-dvh w-full bg-foreground">
                    <h2 className="absolute top-[50%] left-[50%] -translate-y-[calc(50%+14px)] -translate-x-[50%] text-9xl text-background">STACK</h2>
                    <motion.div className="flex items-center justify-center sticky h-dvh w-full bg-background"
                    style={{scaleX, scaleY}}
                    >
                    {displayTitle && 
                        <motion.div 
                            className="flex justify-center items-center h-dvh w-full"
                            // initial={{ x:-100, opacity: 0}}
                            // animate={{x: 0, opacity: 1}}
                            // transition={{ duration: 0.7}}
                        >
                            <div className="w-[90%] grid grid-cols-5 grid-rows-2 gap-8">
                                {stackItems.map(item => (
                                    <div key={item.id} className={`max-h-[300px] flex items-center justify-center bg-foreground rounded-md border-2 border-black shadow-md shadow-black transition-shadow duration-500 ${item.hoverRingColor}`}>
                                        <div className="flex items-center justify-center w-1/2 h-1/2">
                                            {item.svg}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    }
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}