// Import Modules
import { memo } from 'react';
import { motion } from 'framer-motion';
import { Heading, Text, Stack, Grid, GridItem, useBreakpointValue, } from '@chakra-ui/react';

// Import Config
import { FadeInUpSlower, GalleryStagger } from 'config/Animation';
import { mobileBreakpointsMap } from 'config/ThemeConfig';

// Import Components
import FeaturedCard from 'components/FeaturedCard';

const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  return (
    <Stack width={{ base: '99%', lg: '60%', xl: '75%' }} height="100%" spacing={{ base: 6, xl: 8 }}    >
      <Heading size="2xl" style={{ fontVariantCaps: 'small-caps', }}      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Checkout some of my works I did at freelancing, company projects and even case studies.
      </Text>
      <MotionGrid templateRows="repeat(1, 1fr)" templateColumns="repeat(6, 1fr)" gap={{ base: 5, md: 6 }} variants={GalleryStagger}      >
        <MotionGridItem colSpan={6} variants={FadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Tobira!"
            src="/works/tobira/IphoneX-tobira.jpg"
            description="Japanese social media platform for travelers to show off their
          adventure to the world. I was incharge of Front end integration, made using React, Antd and Styled Components."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://tobira-app-test.netlify.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={FadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="RSV"
            description="RSV is a smart contract (ERC20) powered reservation system. I am incharge of backend using NET.Core 2.1."
            src="/works/rsv.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://solution.rsv.ltd/jp"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={FadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Agora School"
            description="A quizz - reviewer LMS, I made as a freelancer. Backend were powered by PHPSlim and VueJS for Front end."
            src="/works/agora.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://dev.agora-school.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={FadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="TMH Layla EC"
            description="A Japanese Semi-conductor e-commerce made at my old place at IVP. I was working with backend using ASP.NET MVC"
            src="/works/tmh.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.layla-ec.com/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  );
};

export default memo(FeaturedWorksSection);
