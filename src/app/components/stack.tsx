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
            hoverRingColor: "[#FFFFFF]"
        },
        {
            id: 2,
            name: "ReactSvg",
            svg: <ReactSvg/>,
            color: "#61DAFB",
            hoverRingColor: "[#61DAFB]"
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

    const [display, setDisplay] = useState(false)

    const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const scaleY = useTransform(scrollYProgress, [0.5, 1], [0.009, 1])

    useEffect(() => {
        const display = scrollYProgress.on("change", value =>
        setDisplay(value === 1))

        return () => display()
    }, [scrollYProgress])

    return (
        <>
            <motion.div ref={transitionContainer} className="h-[300dvh] bg-green-200">
                <div className="sticky top-0 h-dvh w-full bg-foreground">
                    <motion.h2 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ amount: "all", once: true }} transition={{ duration: 0.8}} 
                        className="absolute top-[50%] left-[50%] -translate-y-[calc(50%+13px)] md:-translate-y-[calc(50%+17px)] -translate-x-[50%] text-8xl md:text-9xl text-background"
                    >
                        STACK
                    </motion.h2>
                    <motion.div 
                        className="flex items-center justify-center sticky h-dvh w-full bg-background"
                        style={{scaleX, scaleY}}
                    >
                        {display && 
                            <div className="flex items-center h-[150dvh] relative">
                                <div className="sticky top-0 flex justify-center items-center h-dvh w-full">
                                    <div className="w-[90%] grid grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-2 gap-4 md:gap-8">
                                        {stackItems.map(item => (
                                            <div key={item.id} className={`max-h-36 flex items-center justify-center bg-foreground rounded-md border-2 border-black shadow-md shadow-black transition-shadow duration-500 md:max-h-[200px] lg:max-h-[300px]`}>
                                                <div className="flex items-center justify-center w-[88%] lg:w-1/2 lg:h-1/2 max-md:max-w-[150px]">
                                                    {item.svg}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        }
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}