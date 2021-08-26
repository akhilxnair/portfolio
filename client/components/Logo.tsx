// Import Modules
import Link from 'next/link'
import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react'

// Import Config
import { ThemeMode, mobileBreakpointsMap } from 'config/ThemeConfig'
import { simpleOpacity } from 'config/Animation'

// Import Styles
import styles from 'styles/Logo.module.css'

const Logo = () => {
  const MotionImage = motion(Image)
  const { colorMode } = useColorMode()
  const [isLogoLoaded, setLogoLoaded] = useState(false)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const image = colorMode === ThemeMode.Dark ? './LogoDark.png' : './LogoLight.png'

  return (
    <AnimatePresence>
      <Link href="/" passHref>
        <MotionImage
          className={!isMobile ? styles.logo : ''}
          boxSize={isMobile ? '30px' : '50px'}
          objectFit="cover"
          src={image}
          alt="Akhil Logo"
          fallbackSrc="./LogoDark.png"
          variants={simpleOpacity}
          initial="initial"
          animate={isLogoLoaded && 'animate'}
          onLoad={() => setLogoLoaded(true)}
          zIndex={2}
        />
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)
