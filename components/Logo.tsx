// Import Modules
import Link from 'next/link';
import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react';

// Import Config
import { mobileBreakpointsMap } from 'config/ThemeConfig';
import { SimpleOpacity } from 'config/Animation';

// Import Styles
import styles from 'styles/Logo.module.css';

const Logo = () => {
  const MotionImage = motion(Image);
  const { colorMode } = useColorMode();
  const [isLogoLoaded, setLogoLoaded] = useState(false);
  const isMobile = useBreakpointValue(mobileBreakpointsMap);

  return (
    <AnimatePresence>
      <Link href="/" passHref>
        <MotionImage
          zIndex={2}
          alt="Akhil Logo"
          initial="initial"
          objectFit="cover"
          variants={SimpleOpacity}
          fallbackSrc="./images/logo_dark.png"
          onLoad={() => setLogoLoaded(true)}
          animate={isLogoLoaded && 'animate'}
          boxSize={isMobile ? '30px' : '50px'}
          src={`./images/logo_${colorMode}.png`}
          className={!isMobile ? styles.logo : ''}
        />
      </Link>
    </AnimatePresence>
  );
};

export default memo(Logo);
