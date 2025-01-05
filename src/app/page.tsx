'use client'

import Lenis from "lenis";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Stack } from "./components/stack";

export default function Home() {
    const lenis = new Lenis({
        lerp: 0.05, 
        wheelMultiplier: 1, 
    })

    function raf(time: any) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return (
        <>
            <HeroSection/>
            <Projects/>
            <div className="h-[30px] wfull"/>  
            <Skills/>
            <Stack/>
            
            <Footer/>
        </> 
    )
}
