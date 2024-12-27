'use client'

import { motion, useScroll, useTransform } from "motion/react"
import { ExpressSvg, MongodbSvg, MongooseSvg, MotionSvg, NextSvg, NodejsSvg, ReactSvg, TailwindSvg, TypescriptSvg, ZodSvg } from "./svgs"
import { useRef, useState, useEffect } from "react"

export const Stack = () => {
    const stackItems = [
        {
            id: 1,
            name: "ReactSvg",
            svg: <NextSvg/>,
            color: ""
        },
        {
            id: 2,
            name: "ReactSvg",
            svg: <ReactSvg/>,
            color: ""
        },
        {
            id: 3,
            name: "Typescript",
            svg: <TypescriptSvg/>,
            color: ""
        },
        {
            id: 4,
            name: "Tailwind",
            svg: <TailwindSvg/>,
            color: ""
        },
        {
            id: 5,
            name: "Motion",
            svg: <MotionSvg/>,
            color: ""
        },
        {
            id: 6,
            name: "NodeJs",
            svg: <NodejsSvg/>,
            color: ""
        },
        {
            id: 7,
            name: "Express",
            svg: <ExpressSvg/>,
            color: ""
        },
        {
            id: 8,
            name: "MongoDB",
            svg: <MongodbSvg/>,
            color: ""
        },
        {
            id: 9,
            name: "Mongoose",
            svg: <MongooseSvg/>,
            color: ""
        },
        {
            id: 10,
            name: "Zod",
            svg: <ZodSvg/>,
            color: ""
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
                            className="h-dvh w-full flex flex-wrap justify-center items-center gap-8"
                            initial={{ x:-100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{ duration: 0.7}}
                        >
                            {stackItems.map(item => (
                                <div key={item.id} className="flex items-center justify-center h-1/3 w-1/6 rounded-lg ">
                                        <div className="flex items-center justify-center w-1/2 h-1/2">
                                            {item.svg}
                                            
                                        </div>
                                </div>
                            ))}
                        </motion.div>
                    }
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}