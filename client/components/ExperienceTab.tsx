/* eslint-disable react/no-array-index-key */
// Import Modules
import { BiRightArrow } from 'react-icons/bi'
import Image from 'next/image';
import { Text, Link, Stack, Tabs, TabList, Tab, TabPanels, TabPanel, List, ListIcon, ListItem, SlideFade, useColorModeValue, useBreakpointValue, useColorMode } from '@chakra-ui/react'

const ExperienceTab = () => {
  const { colorMode } = useColorMode()
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  const activeBorderColor = useColorModeValue('teal.500', '#97DFFC')
  const tabOrientation = useBreakpointValue({ base: 'horizontal', sm: 'horizontal', md: 'vertical', lg: 'vertical', xl: 'vertical' }) ?? ('vertical' as any)
  const tabMinWidth = useBreakpointValue({ base: '160px', sm: '160px', md: 'auto', lg: 'auto', xl: 'auto' })

  const ExperiencesList = [
    {
      name: 'FamPay',
      url: 'https://fampay.in/',
      position: 'Frontend Engineer',
      duration: 'Oct 2020 - Present',
      subDetail: 'FinTech for Teenagers',
      light: '/FamPayDark.png',
      dark: '/FamPayLight.png',
      roles: [
        <>
          Creating Web views and PAW&apos;s for
          <Link aria-label="FamPay" href="https://play.google.com/store/apps/details?id=com.fampay.in&hl=en_IN&gl=US" target="_blank" rel="noreferrer">
            {' '}FamPay App{' '}
          </Link>
          serving 2 Million+ users using modern frontend technologies.
        </>,
        <>
          Create and maintain
          <Link variant="primaryLink" href="https://i.imgur.com/0wjhJUa.mp4" target="_blank" rel="noreferrer"        >
            {' '}Explore{' '}
          </Link>
          section which drives the Gamification of the entire application through multiple types of rewards such as Raffles, Spinners, etc.
        </>,
        <>
          Build and Maintain
          <Link variant="primaryLink" href="https://gift.fam.cards/" target="_blank" rel="noreferrer"        >
            {' '}Gift a FamCard{' '}
          </Link>
          , Savings Goal,
          <Link variant="primaryLink" href="https://i.imgur.com/2jcyM9w.jpg" target="_blank" rel="noreferrer"        >
            {' '}IPL Predictions{' '}
          </Link>
          , Landing Page and multiple other web projects using React JS and related technologies.
        </>,
        <>
          Work with backend team to build and maintain deployment pipelines for all out projects using Docker and GitLab CI/CD.
        </>,
        <>
          Hired in Oct 2020, so as the first fulltime Frontend Developer,
          my responsibilities also include helping in hiring new developers by listing requirements,
          reviewing coding assignment, conduction Interviews, onboarding and mentoring new developers.
        </>,
      ],
    },
    {
      name: 'Zuru Tech India',
      url: 'https://zuru.tech/',
      position: 'Frontend Engineer',
      duration: 'Oct 2018 - Oct 2020',
      light: '/ZuruDark.png',
      dark: '/ZuruLight.png',
      roles: [
        <>
          Creating scalable web applications using React which were implemented inside our
          <Link variant="primaryLink" href="https://www.youtube.com/watch?v=DPdvNVxgQQY" target="_blank" rel="noreferrer"        >
            {' '}Dreamcatcher{' '}
          </Link>
          desktop software using custom chromium headless browser.
        </>,
        <>
          Transition from a Monorepo architecture to a micro-frontend architecture which included 7 services like Assets library, Chat application, etc.
        </>,
        <>
          Maintainer of
          <Link variant="primaryLink" href="https://i.imgur.com/ohp50kK.png" target="_blank" rel="noreferrer"        >
            {' '}Zuru Store{' '}
          </Link>
          which displayed all information about the architectures and buildings. My role was to actively review code, maintain and build new features.
        </>,
        <>
          Contributed in services like Chat System, Asset Library, User Management,
          Notification System and many supporting system using React JS and other frontend technologies interacting with a
          Headless Chromium Browser inside Dreamcatcher written in C++.
        </>,
        <>
          Communicate with the Design team in Italy and Backend Team in India to actively create a performance focused product.
        </>,
      ],
    },
  ]

  return (
    <Tabs id="experienceTabs" orientation={tabOrientation} isLazy>
      <TabList width="30%" borderColor="transparent">
        {ExperiencesList.map((company) => (
          <Tab
            key={`Tab-${company.name}`}
            fontSize="smaller"
            h="120px"
            minWidth={tabMinWidth}
            boxShadow="none"
            borderColor={borderColor}
            borderLeftWidth={tabOrientation === 'vertical' ? '4px' : '0'}
            _selected={{
              borderColor: activeBorderColor,
              boxShadow: 'none',
              borderLeftWidth: tabOrientation === 'vertical' ? '4px' : '0',
              borderBottomWidth: tabOrientation === 'horizontal' ? '4px' : '0',
              background: 'whiteAlpha.100',
            }}
            borderBottomWidth={tabOrientation === 'horizontal' ? '4px' : '0'}
          >
            <Image
              src={colorMode === 'dark' ? company.dark : company.light}
              alt={company.name}
              width={88}
              height={30}
            />
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {ExperiencesList.map((company) => (
          <TabPanel key={`TabPanel-${company.name}`}>
            <SlideFade offsetY="20px" in>
              <Stack spacing={0}>
                <Text as="span" fontSize="lg" fontWeight="bold" variant="description">
                  {company.position}
                </Text>
                <Text as="span">
                  <Link href={company.url} aria-label={company.name} rel="noreferrer" target="_blank" fontSize="lg" fontWeight="bold">
                    {company.name}
                  </Link>
                  <Text as="span" textTransform="none" fontSize="small" variant="description">
                    {' '} {company.subDetail}
                  </Text>
                </Text>
                <Text fontSize="smaller">{company.duration}</Text>
              </Stack>
              <List spacing={3} pt={5}>
                {company.roles?.map((roleDesc, idx) => (
                  <ListItem key={idx} fontSize="smaller" display="flex" alignItems="center" justifyContent="flex-start">
                    <ListIcon as={BiRightArrow} color={emphasis} display="block" />
                    <Text as="span" display="block" variant="description">
                      {roleDesc}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </SlideFade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default ExperienceTab
