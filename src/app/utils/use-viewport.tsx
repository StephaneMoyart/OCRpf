'use client'

import { useEffect, useState } from "react"

export const useViewport = () => {
    const [media, setMedia] = useState<string>()

    useEffect(() => {
        const mediaQueries = {
            sm: window.matchMedia("(max-width: 767px)"),
            md: window.matchMedia("(min-width: 768px) and (max-width: 1023px)"),
            lg: window.matchMedia("(min-width: 1024px)"),
        }
    
        const updateMedia = () => {
            if (mediaQueries.sm.matches) setMedia("sm")
            else if (mediaQueries.md.matches) setMedia("md")
            else if (mediaQueries.lg.matches) setMedia("lg")
        }
    
        Object.values(mediaQueries).forEach((mediaQuery) =>
            mediaQuery.addEventListener("change", updateMedia)
        )
    
        updateMedia()
    
        return () =>
            Object.values(mediaQueries).forEach((mq) =>
                mq.removeEventListener("change", updateMedia)
        )
    }, [])

    return media
}
