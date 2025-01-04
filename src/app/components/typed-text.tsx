import { animate } from "motion"
import { motion, useMotionValue, useTransform } from "motion/react"
import { useEffect, useState } from "react"

type TypedTextProps = {
    text: string
}

export const TypedText: React.FC<TypedTextProps> = ({ text }) => {
    const count = useMotionValue(0)
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            const animation = animate(count, text.length, {
                duration: 5,
            })
            
            return animation.stop
        }, 500)

        return () => clearTimeout(timeout)
    }, [])

    const rounded = useTransform(count, (latest) => Math.round(latest))

  const [liveText, setLiveText] = useState("")

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
        setLiveText(text.slice(0, latest))
    })
    return () => unsubscribe()
}, [rounded, text])

    return (
        <motion.span dangerouslySetInnerHTML={{ __html: liveText}} />
    )
}