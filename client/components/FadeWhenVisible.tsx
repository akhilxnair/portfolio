// Import Modules
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Import Config
import { fadeInUpSlower } from 'config/Animation'

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) controls.start('animate')
  }, [controls, inView])

  return (
    <motion.div style={{ margin: 0 }} ref={ref} animate={controls} initial="initial" variants={fadeInUpSlower}    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
