// Import Modules
import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Image as ChkImage, SkeletonCircle } from '@chakra-ui/react';

// Import Config
import { AvatarAnimation } from 'config/Animation';

const Avatar = () => {
  const MotionBox = motion(Box);
  return (
    <AnimatePresence>
      <MotionBox
        id="axnAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        initial="initial"
        animate="animate"
        variants={AvatarAnimation}
        exit={{ opacity: 0 }}
      >
        <ChkImage src="/images/akhil.jpg" alt="Akhil Avatar" htmlWidth="250" htmlHeight="250" margin="auto" fallback={<SkeletonCircle height="100%" width="100%" />} />
      </MotionBox>
    </AnimatePresence>
  );
};

export default memo(Avatar);
