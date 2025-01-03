import { motion } from "motion/react"

type AnimatedTextProps = {
    children: string
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            whileTap="hovered" 
            className="relative block overflow-hidden whitespace-nowrap cursor-pointer"
        >
            <div>
                {children.split("").map((letter, index) => {
                    return <motion.span
                        className="inline-block"
                        variants={{
                            initial: { y: 0},
                            hovered: { y: "-100%"}
                        }}
                        transition={{ delay: index * 0.05, duration: 0.25, ease: "easeInOut"}}
                        key={index}
                    >
                        {letter}
                    </motion.span>
                })}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((letter, index) => {
                    return <motion.span 
                        className="inline-block"
                        variants={{
                            initial: { y: "100%"},
                            hovered: { y: 0 }
                        }}
                        transition={{ delay: index * 0.05, duration: 0.25, ease: "easeInOut"}}
                        key={index}
                    >
                        {letter}
                    </motion.span>
                })}
            </div>
        </motion.div>
    )
}