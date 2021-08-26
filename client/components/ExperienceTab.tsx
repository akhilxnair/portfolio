/* eslint-disable react/no-array-index-key */
// Import Modules
import { BiRightArrow } from 'react-icons/bi'
import { Text, Link, Stack, Tabs, TabList, Tab, TabPanels, TabPanel, Image, List, ListIcon, ListItem, SlideFade, Skeleton, useColorModeValue, useBreakpointValue, useColorMode } from '@chakra-ui/react'

const ExperienceTab = () => {
  const { colorMode } = useColorMode()
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  const activeBordercolor = useColorModeValue('teal.500', '#97DFFC')
  const tabOrientation = useBreakpointValue({ base: 'horizontal', sm: 'horizontal', md: 'vertical', lg: 'vertical', xl: 'vertical' }) ?? ('vertical' as any)
  const tabMinWidth = useBreakpointValue({ base: '160px', sm: '160px', md: 'auto', lg: 'auto', xl: 'auto' })

  const ExperiencesList = [
    {
      name: 'FamPay',
      longName: 'FamPay',
      url: 'https://fampay.in/',
      position: 'Frontend Engineer',
      duration: 'Oct 2020 - Present',
      logo: { light: '/FamPayLogo.svg', dark: '/FamPayLogo.svg', },
      roles: [
        <>
          Revamping the legacy Partner Portal into a new{' '}
          <Link aria-label="Westfield Marketing Hub" href="https://partner.scentregroup.com/" target="_blank" rel="noreferrer">
            Westfield Marketing Hub
          </Link>{' '}
          using NextJS and Typescript. Restructuring the old express backend app
          into a newer design approach.
        </>,
        <>
          Created multiple Contentful and Bynder extensions to improve BX process
          better.
        </>,
        <>
          Worked on maintaining{' '}
          <Link variant="primaryLink" href="https://www.westfield.com.au/" target="_blank" rel="noreferrer"        >
            Westfield
          </Link>
          {' '}main site and Graphql apis written in NodeJS.
        </>,
        <>
          Migrating of existing marketing emails related tools and batches from
          Responsys into the new platform called Braze.
        </>,
        <>
          Hired at early 2020, first big task was helping with selection a new
          marketing vendor that can scale as well as enable us to have
          personalisation, selecting{' '}
          <Link aria-label="Braze" href="https://www.braze.com/" target="_blank" rel="noreferrer"        >
            Braze
          </Link>{' '}
          as a result.
        </>,
      ],
    },
    {
      name: 'Zuru Tech',
      longName: 'Zuru Tech India',
      url: 'https://zuru.tech/',
      position: 'Frontend Engineer',
      duration: 'Oct 2018 - Oct 2020',
      logo: { light: '/ZuruLogo.png', dark: '/ZuruLogo.png', },
      roles: [
        <>
          Developed a Twitter Raffle Campaign / Contest Bot called Camps with
          statistics similar to Facebook Ads.
        </>,
        <>
          In 2019 got promoted as Senior Software Engineer and worked with Cryto
          Exchange, Smart Contracts and other APIs using several techs such as
          NodeJS, .NET Core and React.
        </>,
        <>
          Create highly scalable Japanese e-commerce sites. Most notable clients
          were TV Tokyo, Layla EC using .NET.
        </>,
        <>
          Hired at 2016, Undergone a training first with Japanese language.
          Shortly after, worked with in-house .NET MVC Framework called ERS.
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
              borderColor: activeBordercolor,
              boxShadow: 'none',
              borderLeftWidth: tabOrientation === 'vertical' ? '4px' : '0',
              borderBottomWidth: tabOrientation === 'horizontal' ? '4px' : '0',
              background: 'whiteAlpha.100',
            }}
            borderBottomWidth={tabOrientation === 'horizontal' ? '4px' : '0'}
          >
            <Image
              src={colorMode === 'dark' ? company.logo.dark : company.logo.light}
              alt={company.longName}
              maxWidth="88px"
              fallback={<Skeleton height="100%" width="100%" />}
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
                  <Link href={company.url} aria-label="scentregroup" rel="noreferrer" target="_blank" fontSize="lg" fontWeight="bold">
                    #{company.name}
                  </Link>
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
