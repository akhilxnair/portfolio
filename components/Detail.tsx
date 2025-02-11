// Import Modules
import { memo } from 'react';
import { IoMdOpen } from 'react-icons/io';
import { GiCoffeePot } from 'react-icons/gi';
import { SiJavascript, SiTypescript, SiJest, SiReact, SiNextdotjs, SiNodedotjs } from 'react-icons/si';
import { Heading, Text, List, ListItem, ListIcon, Icon, SimpleGrid, Box, Tooltip, Stack, useColorModeValue, } from '@chakra-ui/react';

// Import Utils
import { professionalYears } from 'utils/HelperFunction';

// Import Types
import { ISkillSetModal } from 'types/Interfaces';

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis: string = useColorModeValue('teal.500', 'cyan.200');
  return (
    <Stack width={{ base: '100%', lg: '70%' }} spacing={{ base: 6, xl: 8 }}>
      <Heading as="h4" size="2xl" letterSpacing={1.8} style={{ fontVariantCaps: 'small-caps' }}      >
        Who am I
      </Heading>
      <Text variant="description">
        I am a software developer who graduated in 2018 with a Bachelors in Information Technology.
        I`ve been coding professionally for {professionalYears()} years, right now
        I am working as a
        <Tooltip label="React 💙" aria-label="Tech Debt?" hasArrow>
          <Text as="span" variant="emphasis">
            <b>{' '}Senior Frontend Engineer{' '}</b>
          </Text>
        </Tooltip>
        that focuses on
        {' '}
        <Tooltip label="Ha!. Or more accurately negotiation with UI Team" aria-label="Tech Debt?" hasArrow>
          <Text as="span" variant="emphasis">
            <b>UI development</b>
          </Text>
        </Tooltip>
        <b> {', '}Deployment </b>,
        and a bit of <b>Backend</b> for personal projects.
        <br /> <br />
        Here are few main techs that are cup of my{' '}
        <Tooltip label="I drink tea too but as a night owl I'll say coffee" aria-label="I hate Tea!" hasArrow        >
          <Text as="span" variant="emphasis" textDecorationLine="line-through">
            tea
          </Text>
        </Tooltip>
        {' '} coffee <Icon as={GiCoffeePot} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJest} color={emphasis} fontSize="2em" />
            Jest
          </ListItem>
        </List>
        <Box>
          <Text as="button" variant="emphasis" fontSize="smaller" textAlign="left" onClick={onOpen}          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default memo(Detail);
