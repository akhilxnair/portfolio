// Import Modules
import {
  Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
  ModalFooter, List, ListItem, ListIcon, SimpleGrid, useColorModeValue, Divider, Text,
} from '@chakra-ui/react';

// Import Config
import { Skills } from 'config/StaticData';

//  Import  Utils
import { splitSkills } from 'utils/HelperFunction';

// Import Interfaces
import { ISkill, ISkillModal } from 'types/Interfaces';

// Import Styles
import styles from 'styles/SkillSetModal.module.css';

const SkillList = ({ title, skills }: { title: string, skills: ISkill[] }) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200');
  const columns = splitSkills(skills);
  const [colOne, colTwo = []] = columns;
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem key={item.name} fontSize="small" display="flex" alignItems="center"            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem key={item.name} fontSize="small" display="flex" alignItems="center"            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  );
};
const SkillSetModal = ({ isOpen, onClose }: ISkillModal) => (
  <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" scrollBehavior="inside"    >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Full Skill Set List</ModalHeader>
      <ModalCloseButton />
      <ModalBody className={styles.skillModal}>
        <SkillList title="Programming Languages" skills={Skills.languages} />
        <SkillList title="Frontend" skills={Skills.frontend} />
        <SkillList title="Modern CSS" skills={Skills.css} />
        <SkillList title="State Management" skills={Skills.state} />
        <SkillList title="Testing" skills={Skills.testing} />
        <SkillList title="Tracking" skills={Skills.tracking} />
        <SkillList title="Frontend Tools & Libraries" skills={Skills.libraries} />
        <SkillList title="Backend" skills={Skills.backend} />
        <SkillList title="CI/CD" skills={Skills.cicd} />
        <SkillList title="Database (Novice)" skills={Skills.database} />
        <SkillList title="Mobile Development" skills={Skills.mobile} />
        <SkillList title="Productivity" skills={Skills.productivity} />
      </ModalBody>
      <ModalFooter>
        <Text fontSize="x-small">*Some micro frameworks not included </Text>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default SkillSetModal;
