import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Stack } from "./components/stack";

export default function Home() {

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
