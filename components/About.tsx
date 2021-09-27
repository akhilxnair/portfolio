// Import Modules
import { memo } from 'react'
import dynamic from 'next/dynamic'
import { useDisclosure } from '@chakra-ui/react'

// Import Components
import Detail from 'components/Detail'

const SkillSetModal = dynamic(() => import('components/SkillSetModal'))

const AboutSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Detail onOpen={onOpen} />
      <SkillSetModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
export default memo(AboutSection)
