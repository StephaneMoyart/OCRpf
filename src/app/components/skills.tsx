'use client'

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { AnimatedText } from "./animated-text"

export const Skills = () => {
    const skills = [
        {
            id: 1,
            svg: <svg width="160" height="160" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="#161614"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>,
            description: ["Versionnage de projets", "Collaboration et Pull requests"]
        },
        {
            id: 2,
            svg: <svg fill="none" height="160" width="160" xmlns="http://www.w3.org/2000/svg" viewBox="1.466 2.199 285.068 427.602"><path d="M1.466 2.2h285.068V429.8H1.466z" strokeWidth="3"/><path d="M144 216c0-39.359 31.907-71.267 71.267-71.267 39.359 0 71.267 31.908 71.267 71.267 0 39.36-31.908 71.267-71.267 71.267C175.907 287.267 144 255.36 144 216z" fill="#1abcfe"/><path d="M1.466 358.534c0-39.359 31.907-71.267 71.267-71.267H144v71.267c0 39.36-31.907 71.267-71.267 71.267S1.466 397.894 1.466 358.534z" fill="#0acf83"/><path d="M144 2.2v142.533h71.267c39.36 0 71.267-31.907 71.267-71.267S254.627 2.2 215.267 2.2z" fill="#ff7262"/><path d="M1.466 73.466c0 39.36 31.907 71.267 71.267 71.267H144V2.199H72.733c-39.36 0-71.267 31.908-71.267 71.267z" fill="#f24e1e"/><path d="M1.466 216c0 39.36 31.907 71.267 71.267 71.267H144V144.733H72.733c-39.36 0-71.267 31.908-71.267 71.267z" fill="#a259ff"/></svg>,
            description: ["Réalisation selon maquettes", "Suivi des intentions du Designer"]
        },
        {
            id: 3,
            svg: <svg enableBackground="new 0 0 2447.6 2452.5" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg"><g clipRule="evenodd" fillRule="evenodd"><path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"/><path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"/><path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"/><path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"/></g></svg>,
            description: ["Communication d'équipe", ":)"]
        },
        {
            id: 4,
            svg: <svg height="160" viewBox="13.38 3.2 485.44 505.7" width="160" xmlns="http://www.w3.org/2000/svg"><path d="m186.84 13.95c-79.06 5.85-146.27 11.23-149.43 11.86-8.86 1.58-16.92 7.59-20.71 15.5l-3.32 6.96.32 165.88.47 165.88 5.06 10.28c2.85 5.69 22.14 32.26 43.17 59.61 41.59 53.92 44.59 56.93 60.4 58.51 4.59.47 39.06-1.11 76.38-3.32 37.48-2.37 97.56-6.01 133.62-8.06 154.01-9.35 146.1-8.56 154.95-16.15 11.07-9.17 10.28 5.85 10.75-195.76.32-170.94.16-182.16-2.37-187.38-3-5.85-8.38-9.96-78.59-59.3-46.96-32.89-50.28-34.63-71.32-34.95-8.69-.31-80.48 4.43-159.38 10.44zm177.73 21.66c6.64 3 55.19 36.84 62.3 43.33 1.9 1.9 2.53 3.48 1.58 4.43-2.21 1.9-302.66 19.77-311.35 18.5-3.95-.63-9.8-3-13.12-5.22-13.76-9.33-47.91-37.32-47.91-39.37 0-5.38-1.11-5.38 132.83-15.02 25.62-1.74 67.68-4.9 93.3-6.96 55.49-4.43 72.1-4.27 82.37.31zm95.51 86.5c2.21 2.21 4.11 6.48 4.74 10.59.47 3.8.79 74.64.47 157.18-.47 141.68-.63 150.54-3.32 154.65-1.58 2.53-4.74 5.22-7.12 6.01-6.63 2.69-321.46 20.56-327.94 18.66-3-.79-7.12-3.32-9.33-5.53l-3.8-4.11-.47-152.75c-.32-107.21 0-154.65 1.27-158.92.95-3.16 3.32-6.96 5.38-8.22 2.85-1.9 21.51-3.48 85.71-7.27 45.07-2.53 114.8-6.8 154.81-9.17 95.17-5.86 94.86-5.86 99.6-1.12z"/><path d="m375.48 174.45c-17.08 1.11-32.26 2.69-34 3.64-5.22 2.69-8.38 7.12-9.01 12.18-.47 5.22 1.11 5.85 18.18 7.91l7.43.95v67.52c0 40.16-.63 66.73-1.42 65.94-.79-.95-23.24-35.1-49.97-75.9-26.72-40.95-48.86-74.64-49.18-74.95-.32-.32-17.71.63-38.58 2.06-25.62 1.74-39.69 3.32-42.54 4.9-4.59 2.37-9.65 10.75-9.65 16.29 0 3.32 6.01 5.06 18.66 5.06h6.64v194.18l-10.75 3.32c-8.38 2.53-11.23 4.11-12.65 7.27-2.53 5.38-2.37 10.28.16 10.28.95 0 18.82-1.11 39.37-2.37 40.64-2.37 45.22-3.48 49.49-11.86 1.27-2.53 2.37-5.22 2.37-6.01 0-.63-5.53-2.53-12.18-4.11-6.8-1.58-13.6-3.16-15.02-3.48-2.69-.79-2.85-5.69-2.85-73.69v-72.9l48.07 75.43c50.44 79.06 56.77 88.08 64.52 92.03 9.65 5.06 34.16 1.58 46.49-6.48l3.8-2.37.32-107.84.47-108 8.38-1.58c9.96-1.9 14.55-6.48 14.55-14.39 0-5.06-.32-5.38-5.06-5.22-2.83.13-19.12 1.08-36.04 2.19z"/></svg>,
            description: ["Gestion de projet", "Suivi collaboratif"]
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
                <motion.h2 
                    style={{opacity, translateX}}
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ amount: "all", once: true }} transition={{ duration: 0.8}} 
                    className="relative text-5xl md:text-7xl lg:text-9xl text-foreground"
                >
                    COMPETENCES
                </motion.h2>
                <motion.div style={{scaleX}} className=" absolute h-dvh w-full bg-foreground transform origin-right">
                    {show &&
                        <div className="flex items-center justify-evenly h-full w-full max-md:flex-col">
                            <div className="flex flex-col text-background lg:text-8xl font-bold uppercase text-7xl">
                                <motion.div initial={{ opacity: 0, y: "150%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} onClick={() => setSelectedSkill(1)}>
                                    <AnimatedText>Github</AnimatedText>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: "300%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} onClick={() => setSelectedSkill(2)}>
                                    <AnimatedText>Figma</AnimatedText>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: "450%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} onClick={() => setSelectedSkill(3)}>
                                    <AnimatedText>Slack</AnimatedText>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: "600%" }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} onClick={() => setSelectedSkill(4)}>
                                    <AnimatedText>Notion</AnimatedText>
                                </motion.div>
                            </div>

                            <div className="relative w-[95%] max-md:max-w-[400px] aspect-square md:min-w-[370px] md:w-[40%] lg:w-[30%]">
                                <AnimatePresence>
                                    {skills.filter(skill => skill.id === selectedSkill).map(skill => (
                                        <motion.div 
                                            initial={{y: "50%", rotate: -15, opacity: 0, scale: 0.9}}
                                            animate={{y: 0, rotate: 0, opacity: 1, scale: 1}}
                                            transition={{ duration: 0.8 }}
                                            exit={{x: "50%", rotate: 15, opacity: 0, scale: 0.5, transition: {duration: 0.5}}}
                                            className="w-full h-full flex flex-col absolute inset-0 bg-background rounded-lg border border-black shadow-sm shadow-[#C8C8C8]" key={skill.id}
                                        >
                                            <div className="flex justify-center items-center h-1/2">
                                                <div className="w-40 h-40 p-2 lg:w-[200px] lg:h-[200px] flex justify-center items-center">
                                                    {skill.svg}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center justify-evenly h-1/2">
                                                <p>{skill.description[0]}</p>
                                                <p>{skill.description[1]}</p>
                                            </div>
                                        </motion.div>
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