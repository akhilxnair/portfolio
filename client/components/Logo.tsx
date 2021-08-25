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
  return (
    <AnimatePresence>
      <Link href="/" passHref>
        {colorMode === ThemeMode.Dark ? (
          <MotionImage
            className={!isMobile ? styles.logo : ''}
            boxSize={isMobile ? '30px' : '50px'}
            objectFit="cover"
            src="./logo.png"
            alt="Akhil Logo"
            fallbackSrc="./logo.png"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        ) : (
          <MotionImage
            className={!isMobile ? styles.logo : ''}
            boxSize={isMobile ? '30px' : '50px'}
            objectFit="cover"
            src="./logo_light.png"
            fallbackSrc="./logo_light.png"
            alt="KL Lawingco Logo"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        )}
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)
