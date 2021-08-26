// Import Modules
import { IoLogoPwa } from 'react-icons/io5'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaGithub,
  FaSourcetree,
} from 'react-icons/fa'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiGraphql,
  SiApollographql,
  SiPhp,
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiStyledComponents,
  SiGhost,
  SiVueDotJs,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSocketDotIo,
  SiMaterialUi,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
} from 'react-icons/si'

// Import Interfaces
import { ISocialMedias } from 'types/Interfaces'

export const SocialMedias: ISocialMedias[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/AkhilxNair',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/akhilxn/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akhilxnair/',
    icon: FaLinkedin,
  },
  {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/users/5917783/akhil-nair',
    icon: FaStackOverflow,
  },
  {
    label: 'Github',
    href: 'https://github.com/akhilxnair',
    icon: FaGithub,
  },
]

export const Skills = {
  languages: [
    { name: 'Javascript', icon: SiJavascript },
    { name: 'Typescript', icon: SiTypescript },
  ],
  frontend: [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'React', icon: SiReact },
    { name: 'NextJS', icon: SiNextDotJs },
    { name: 'Apollo Graphql', icon: SiApollographql },
    { name: 'Redux', icon: SiRedux },
    { name: 'VueJS', icon: SiVueDotJs },
    { name: 'Ghost', icon: SiGhost },
  ],
  backend: [{ name: 'Node', icon: SiNodeDotJs }],
  database: [
    { name: 'MySQL', icon: SiMysql },
    { name: 'Redis', icon: SiRedis },
    { name: 'MongoDb', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'SocketIO', icon: SiSocketDotIo },
    { name: 'Google Pubsub', icon: SiGooglecloud },
  ],
  cicd: [
    { name: 'Docker', icon: SiDocker },
    { name: 'GCP', icon: SiGooglecloud },
    { name: 'GitlabCICD', icon: SiGitlab },
  ],
  frameworks: [
    { name: 'Styled Components', icon: SiStyledComponents },
    { name: 'AntDesign', icon: AiOutlineAntDesign },
    { name: 'MaterialUI', icon: SiMaterialUi },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'ChakraUI', icon: BsQuestionSquare },
  ],
  productivity: [
    { name: 'VSCode', icon: SiVisualstudiocode },
    { name: 'Git', icon: SiGit },
    { name: 'Bash', icon: SiGnubash },
    { name: 'SourceTree', icon: FaSourcetree },
  ],
  mobile: [
    { name: 'React Native', icon: SiReact },
    { name: 'Web PWA', icon: IoLogoPwa },
  ],
}
