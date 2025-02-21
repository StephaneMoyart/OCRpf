import { motion, MotionValue, useScroll, useTransform } from "motion/react"
import { useRef, useState } from "react"
import { CardType } from "./projects"
import { useViewport } from "../utils/use-viewport"

type ProjectCardProps = {
    card: CardType
    containerProgress: MotionValue<number>
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ card, containerProgress }) => {
    const {id, title, mainPicture, secondaryPicture, techs, description, tasks, color, githubLink, translateY, range, targetScale} = card
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

    const [isClicked, setIsClicked] = useState(false)

    const media = useViewport()

    if (id === 3) {
        return (
            <div ref={cardRef} className="h-dvh w-full flex items-end justify-center">
                <motion.div 
                    style={media !== "sm" ? { scaleX, borderRadius, scale, transformOrigin: "top" } : undefined}
                    className={`h-[95%] w-full flex items-center justify-center ${color} relative ${translateY}`}
                >
                    {id === 3 &&
                        <p className="max-md:p-4 md:p-4 md:text-pretty md:text-center text-background text-3xl">D&apos;autres projets sont en cours de création...</p>
                    }
                </motion.div>
            </div>
        )
    }

    return (
        <div ref={cardRef} className="h-dvh w-full flex items-end justify-center md:sticky md:top-0">
            <motion.div
                onClick={() => setIsClicked(prev => !prev)}
                style={media !== "sm" ? { scaleX, borderTopLeftRadius, borderTopRightRadius, scale, transformOrigin: "top" }: undefined}
                className={`h-[95%] w-full relative cursor-pointer ${translateY} group [perspective:5000px]`}
            >
                <motion.div style={media !== "sm" ? { borderTopLeftRadius, borderTopRightRadius } : undefined} className={`h-full w-full ${color} transition-[transform] duration-1000 ease-in-out [transform-style:preserve-3d] ${isClicked ? "[transform:rotateY(180deg)]" : ""}`}>
                    <div className="h-full w-full flex flex-col items-center max-md:gap-8 md:px-10 lg:px-20 xl:px-40 [backface-visibility:hidden]">
                        <div className="flex shrink-0 items-center max-xl:justify-evenly xl:justify-between w-full h-60 max-xl:flex-col">
                            <h3 className="max-md:p-4 text-4xl md:text-6xl text-background">{title}</h3>
                            <div className="max-md:p-4 flex flex-wrap max-md:justify-center gap-4">
                                {techs?.map((tech, index) => (
                                    <div key={index} className="py-2 px-4 rounded-3xl border-dashed border border-white">
                                        <p className="text-background">{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-col-reverse lg:items-end relative h-full w-full">
                            <img
                                className="md:rounded-t-[20px]"
                                src={mainPicture}
                                alt="image principale du projet"
                            />
                            <div className="flex flex-1 justify-center items-center lg:hidden">
                                <p className="p-4 text-background border border-dashed">Appuyer pour + d&apos;informations</p>
                            </div>
                        </div>
                    </div>

                    <motion.div style={{ borderTopLeftRadius, borderTopRightRadius }} className="absolute inset-0 h-full w-full max-md:p-4 md:grid flex flex-col max-md:justify-between md:grid-cols-2 md:grid-rows-2 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-foreground">
                        <div className="max-md:flex max-md:justify-center relative max-md:order-2">
                            <motion.img
                                style={media !== "sm" ? { borderTopLeftRadius } : undefined}
                                src={mainPicture}
                                alt="image principale du projet"
                                className="w-full h-full object-cover max-md:max-w-[420px]"
                            />
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 max-md:gap-4 md:flex md:flex-col md:items-center md:justify-evenly max-md:order-1" style={{ gridTemplateRows: "auto 1fr" }}>
                            <h3 className="max-md:text-2xl text-3xl text-background">{title}</h3>
                            <div className="flex gap-4 max-md:justify-center max-md:flex-wrap">
                                {techs?.map((tech, index) => (
                                    <div key={index} className="px-2 py-2 lg:px-4 rounded-3xl border-dashed border border-white">
                                        <p className="text-background max-lg:text-[11px]">{tech}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-background max-md:text-[14px] p-2 pl-0 md:pl-2 text-pretty md:text-center">{description}</p>
                            <a href={githubLink} target="_blank" className="flex justify-center items-center p-2">
                                <svg 
                                    onClick={e => e.stopPropagation()}
                                    className="cursor-pointer max-md:w-28" width="70" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="rgb(200, 200, 200)"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g>
                                </svg>
                            </a>
                        </div>
                        <div className="flex flex-col items-center justify-evenly max-md:text-[14px] max-md:text-pretty max-md:order-3">
                            {tasks?.map((task, index) => (
                                <p key={index} className="text-background text-pretty text-center p-2">{task}</p>
                            ))}
                        </div>
                        
                        <img
                            className="w-full h-full object-cover max-md:flex max-md:self-center max-md:order-4 max-md:max-w-[420px]"
                            src={secondaryPicture}
                            alt="image secondaire du projet"
                            
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}