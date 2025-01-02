import { motion } from "motion/react"

export const BlinkingCursor = () => {
    const cursorVariants = {
        blink: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.5, 0.5, 1]
            }
        }
    }

    return (
        <motion.div 
            className={`inline-block w-[1px] h-5 translate-y-1 bg-background`}
            variants={cursorVariants}
            animate="blink"
        />
    )
}