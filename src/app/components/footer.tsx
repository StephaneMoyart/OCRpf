'use client'

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export const Footer = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end 0.5", "0.5 start"]
    })

    const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.95])
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "50px"])
    const opacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1])

    const networksVariants = {
        initial: { scale: 0.7 },
        target: { scale: 1, transition: { duration: 0.8 }},
    }

    return (
        <>
            <div className="h-[50dvh] bg-foreground">
                <motion.div
                    style={{ scaleX, borderRadius }}
                    ref={ref} 
                    className="h-full bg-background"
                >
                    <motion.h2 style={{ opacity }} className="text-6xl md:text-9xl absolute left-1/2 max-md:transform max-md:-translate-x-1/2 bottom-14 md:left-14">CONTACT</motion.h2>
                </motion.div>
            </div>
            <div className="relative h-[650px]" style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)"}}>
                <div className="flex flex-col fixed h-[650px] w-full bottom-0 bg-foreground text-background px-24">
                    <motion.div className="flex max-md:flex-col justify-evenly items-center h-4/5">
                        <motion.a variants={networksVariants} initial="initial" whileInView="target" href="https://github.com/StephaneMoyart/" target="_blank">
                            <svg className="cursor-pointer max-md:w-40" width="250" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="rgb(200, 200, 200)"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>
                        </motion.a>
                        <motion.a variants={networksVariants} initial="initial" whileInView="target" href="https://www.linkedin.com/in/stephane-moyart-3868b3291/" target="_blank">
                            <svg className="cursor-pointer max-md:w-40" height="250" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g fill=""><path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="rgb(200, 200, 200)"/><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="rgb(7, 7, 7)"/></g></svg>
                        </motion.a>
                    </motion.div>
                    <div className="flex w-full h-1/5 items-center text-2xl max-lg:flex-col max-lg:justify-evenly max-md:text-xl lg:justify-between">
                        <motion.p initial={{ scale: 1 }} whileInView={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, delay: 1, duration: 3, times: [0, 0.5, 1] }} >moyartstephane@gmail.com</motion.p>
                        <p className="max-md:min-w-[340px]">© 2025 Tous droits réservés.</p>
                    </div>
                </div>
            </div>
        </>
    )
}