// Import Modules
import { useEffect, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Image as ChkImage, Text, Link, SkeletonCircle, useColorModeValue } from '@chakra-ui/react'

// Import Config
import { avatarAnimation } from 'config/Animation'

const AvatarImages = { DarkMode: '/KL_avatar.png', LightMode: './KL_avatar_light.png', }

declare global {
  export interface Window {
    preloadedPictures?: HTMLImageElement[]
  }
}

const Avatar = () => {
  const MotionBox = motion(Box)
  const imgAvatar = useColorModeValue(AvatarImages.LightMode, AvatarImages.DarkMode)

  useEffect(() => {
    // Some nice preloading and caching
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode]
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
      return img
    })
    window.preloadedPictures = preloadedImages
  }, [])

  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate="animate"
        variants={avatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage
          src={imgAvatar}
          alt="KL Lawingco Avatar"
          htmlWidth="250"
          htmlHeight="250"
          margin="auto"
          fallback={<SkeletonCircle height="100%" width="100%" />}
        />
        <Text textAlign="center" fontSize="smaller" variant="description">
          Art by{' '}
          <Link href="https://twitter.com/kojiro_ai" target="_blank" aria-label="KojiroArt" rel="noreferrer"          >
            Akhil
          </Link>
        </Text>
      </MotionBox>
    </AnimatePresence>
  )
}

export default memo(Avatar)
