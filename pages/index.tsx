/* eslint-disable no-unused-vars */
// Import Modules
import dynamic from 'next/dynamic';
import { Grid, GridItem, Stack, Box, useBreakpointValue } from '@chakra-ui/react';

// Import Components
import Menu from 'components/Menu';
import About from 'components/About';
import Avatar from 'components/Avatar';
import Sidebar from 'components/Sidebar';
import Experience from 'components/Experience';
import ScrollMore from 'components/ScrollMore';
import FeaturedWorks from 'components/FeaturedWorks';
import OpenGraphHead from 'components/OpenGraphHead';
import FadeInLayout from 'components/FadeWhenVisible';

// Import Types
import { IArticle } from 'types/Interfaces';

// Bottom Sections - So no need to render it instantly
const DevToArticles = dynamic(() => import('components/DevToArticles'));
const GetInTouch = dynamic(() => import('components/GetInTouch'));

const Portfolio = ({ articles }: { articles: IArticle[] }) => {
  const sideBarPadding = useBreakpointValue({ base: '5', md: '8', lg: '14' });
  const mainContent = useBreakpointValue({ base: '5', md: '14', lg: '14', xl: 0, });
  const paddingTop = useBreakpointValue({ base: '20', sm: 20, md: 20 });

  return (
    <>
      <OpenGraphHead />
      <Menu />
      <Grid id="mainGrid" templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)', }} templateRows={{ sm: 'repeat(1, 0)', lg: 'repeat(2, 1fr)', }} gap={4}>
        <GridItem padding={sideBarPadding} marginTop={paddingTop} rowSpan={2} colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }} display="flex" alignContent="center" as="div" flexDirection="row">
          <Sidebar />
        </GridItem>
        <GridItem as="main" padding={mainContent} rowSpan={2} colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }} overflow="hidden"        >
          <Stack w="100" spacing={24}>
            <FadeInLayout>
              <Box id="aboutMe" className="contentRow" minH={{ lg: '100vh' }} display="flex" alignItems="center" paddingTop={{ base: 0, lg: 20, xl: 0 }} paddingBottom={{ base: 12, lg: 0 }} flexDirection={{ base: 'column-reverse', lg: 'row', }}>
                <About />
                <Avatar />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box id="jobs" className="contentRow" paddingTop={{ base: 0, lg: 20, xl: 0 }} paddingBottom={{ base: 12, lg: 10 }} paddingX={0} flexDirection="row" >
                <Experience />
              </Box>
            </FadeInLayout>
            {/* <FadeInLayout>
              <Box id="works" className="contentRow" paddingTop={{ base: 0, lg: 20, xl: 20 }} paddingBottom={{ base: 12, lg: 10 }} paddingX={0} flexDirection="row" >
                <FeaturedWorks />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box id="blog" className="contentRow" paddingTop={{ base: 0, lg: 20, xl: 20 }} paddingBottom={{ base: 12, lg: 10 }} paddingX={0} flexDirection="row">
                <DevToArticles articles={articles} />
              </Box>
            </FadeInLayout> */}
            <FadeInLayout>
              <Box id="contact" className="contentRow" paddingTop={{ base: 0, lg: 20, xl: 20 }} paddingX={0} flexDirection="row"              >
                <GetInTouch />
              </Box>
            </FadeInLayout>
          </Stack>
        </GridItem>
      </Grid>
      <ScrollMore />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://dev.to/api/articles?username=akhilxnair');
  const articles = await res.json();
  return { props: { articles } };
};

export default Portfolio;
