import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TypingProps {
    text: string
    el?: keyof JSX.IntrinsicElements
    className: string
}

const defaultAnimation = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity: 1
    }
}

const TypingText = ({text, el: Wrapper = "p", className}: TypingProps)=>{
    return(
        <Wrapper className={className} >
            <motion.span initial="hidden" animate="visible" transition={{staggerChildren:0.05}}aria-hidden>
                {text.split('').map((char)=>(
                    <motion.span 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    variants={defaultAnimation}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.span>
        </Wrapper>
    )
}

export default TypingText;
