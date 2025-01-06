import { motion, useScroll, useTransform } from "motion/react"
import { ExpressSvg, MongodbSvg, MongooseSvg, MotionSvg, NextSvg, NodejsSvg, ReactSvg, TailwindSvg, TypescriptSvg, ZodSvg } from "./svgs"
import { useRef, useState, useEffect } from "react"
import { useViewport } from "../utils/use-viewport"

export const Stack = () => {
    const media = useViewport()

    const stackItems = [
        {
            id: 1,
            name: "Next",
            svg: <NextSvg/>,
            color: "#000000",
            textColor: "text-[#FFFFFF]",
            hoverRingColor: "hover:ring-[#FFFFFF]"
        },
        {
            id: 2,
            name: "React",
            svg: <ReactSvg/>,
            color: "#61DAFB",
            textColor: "text-[#61DAFB]",
            hoverRingColor: "hover:-ring-[#61DAFB]"
        },
        {
            id: 3,
            name: "Typescript",
            svg: <TypescriptSvg/>,
            color: "#3178C6",
            textColor: "text-[#3178C6]",
            hoverRingColor: "hover:ring-[#3178C6]"
        },
        {
            id: 4,
            name: "Tailwind",
            svg: <TailwindSvg/>,
            color: "#06B6D4",
            textColor: "text-[#06B6D4]",
            hoverRingColor: "hover:ring-[#06B6D4]"
        },
        {
            id: 5,
            name: "Motion",
            svg: <MotionSvg/>,
            color: "#F5EA16",
            textColor: "text-[#F5EA16]",
            hoverRingColor: "hover:ring-[#F5EA16]"
        },
        {
            id: 6,
            name: "NodeJs",
            svg: <NodejsSvg/>,
            color: "#83CD29",
            textColor: "text-[#83CD26]",
            hoverRingColor: "hover:ring-[#83CD29]"
        },
        {
            id: 7,
            name: "Express",
            svg: <ExpressSvg/>,
            color: "#FFFFFF",
            textColor: "text-[#FFFFFF]",
            hoverRingColor: "hover:ring-[#FFFFFF]"
        },
        {
            id: 8,
            name: "MongoDB",
            svg: <MongodbSvg/>,
            color: "#599636",
            textColor: "text-[#599636]",
            hoverRingColor: "hover:ring-[#599636]"
        },
        {
            id: 9,
            name: "Mongoose",
            svg: <MongooseSvg/>,
            color: "#850000",
            textColor: "text-[#850000]",
            hoverRingColor: "hover:ring-[#850000]"
        },
        {
            id: 10,
            name: "Zod",
            svg: <ZodSvg/>,
            color: "#3068B7",
            textColor: "text-[#3068B7]",
            hoverRingColor: "hover:ring-[#3068B7]"
        },
    ]

    const stackVariants = {
        variant1: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 }},
        variant2: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }},
        variant3: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }},
        variant4: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 }}
    }

    const handleVariantAssignment = (media: string) => {
        if (!media) return
        if (media !== "sm") {
            return {
                variant1: [1, 6],
                variant2: [2, 3, 4],
                variant3: [7, 8, 9],
                variant4: [5, 10]
            }
        } else {
            return {
                variant1: [3, 5, 7],
                variant2: [1, 2],
                variant3: [9, 10],
                variant4: [4, 6, 8]
            }
        }
    }

    const assignedVariant = handleVariantAssignment(media as string)
    
    const getVariant = (id: number) => {
        if (assignedVariant?.variant1.includes(id)) return stackVariants.variant1
        if (assignedVariant?.variant2.includes(id)) return stackVariants.variant2
        if (assignedVariant?.variant3.includes(id)) return stackVariants.variant3
        if (assignedVariant?.variant4.includes(id)) return stackVariants.variant4
    };

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
            <motion.div ref={transitionContainer} className="mt-[25dvh] h-[300dvh] bg-green-200">
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
                            <div className=" h-[150dvh]">
                                <div className="sticky top-0 flex justify-center items-center h-dvh w-full">
                                    <div className="w-[90%] grid grid-cols-2 grid-rows-5 md:grid-cols-5 md:grid-rows-2 gap-4 lg:gap-8">
                                        {stackItems.map(item => (
                                            <motion.div 
                                                initial={getVariant(item.id)?.initial} 
                                                animate={getVariant(item.id)?.animate} 
                                                whileHover="hover" 
                                                transition={getVariant(item.id)?.transition} 
                                                key={item.id} 
                                                className={`relative max-h-36 flex items-center justify-center bg-foreground rounded-md border-2 border-black shadow-md shadow-black transition-shadow duration-500 ${item.hoverRingColor} hover:ring ring-offset-4 ring-offset-[#C8C8C8] md:max-h-[200px] lg:max-h-[300px] lg:aspect-square`}
                                            >
                                                <motion.div 
                                                    variants={{ hover: { opacity: 0, y: "-20%"}}} 
                                                    transition={{ duration: 0.3 }} 
                                                    className="flex items-center justify-center w-[80%] h-[80%] lg:w-1/2 lg:h-1/2"
                                                >
                                                    {item.svg}
                                                </motion.div>
                                                <motion.div 
                                                    initial={{ opacity: 0, y: "50%" }} 
                                                    variants={{ hover: { opacity: 1, y: 0 }}} 
                                                    transition={{ duration: 0.3 }} 
                                                    className={`absolute place-items-center text-xl ${item.textColor}`}
                                                >
                                                    {item.name}
                                                </motion.div>
                                            </motion.div>
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