'use client'

import { useScroll} from "motion/react"
import { useRef } from "react"
import { ProjectCard } from "./project-card"

export type CardType = {
    id: number
    title?: string
    mainPicture?: string 
    secondaryPicture?: string
    techs?: string[]
    description?: string
    tasks?: string[]
    color: string
    githubLink?: string
    translateY: string
    range: number
    targetScale: number
}

export const Projects = () => {
    const cards: CardType[] = [
        {
            id: 1,
            title: "KASA",
            mainPicture: "/kasa1.png",
            secondaryPicture: "/kasa2.png",
            techs: ["React", "Sass"],
            description: "Création du front-end d'une application web de location immobilière en utilisant React et Sass.",
            tasks: ["Création de 0 avec React/React router", "Reflexion en terme de composants réutilisables", "Design responsive desktop / tablette / mobile à partir d'une maquette Figma"],
            color: "bg-foreground",
            githubLink: "https://github.com/StephaneMoyart/Projet5",
            translateY: "top-[10px]",
            range: 1/3,
            targetScale: 0.95
        },
        {
            id: 2,
            title: "MON VIEUX GRIMOIRE",
            mainPicture: "/mvg1.png",
            secondaryPicture: "/mvg2.png",
            techs: ["NodeJs", "Express", "Mongoose", "MongoDB"],
            description: "Developpement du back-end d'un site communautaire de présentation et notation de livres.",
            tasks: ["Création d'un serveur Express", "Connexion à une base de données mongoDB", "Modélisation de données via Mongoose", "Création d'API RESTful"],
            color: "bg-foreground",
            githubLink: "https://github.com/StephaneMoyart/Projet6",
            translateY: "top-[20px]",
            range: 2/3,
            targetScale: 0.975
        },
        {
            id: 3,
            color: "bg-foreground",
            translateY: "top-[30px]",
            range: 3/3,
            targetScale: 1
        }
    ]

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })

    return (
        <>
            <div className="h-dvh w-full flex justify-center items-center">
                <h2 className="text-9xl">MES PROJETS</h2>
            </div>
            <div ref={container} className="">
                { cards.map((card, index) => 
                    <ProjectCard key={index} card={card}  containerProgress={scrollYProgress}/>  
                )}
            </div>
        </>
    )
}