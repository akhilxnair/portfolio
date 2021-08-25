// Import Modules
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaGithub,
  FaSourcetree,
} from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'
import { BsQuestionSquare } from 'react-icons/bs'
import { AiOutlineAntDesign } from 'react-icons/ai'
import {
  SiDotNet,
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
import { ISocialMedias, ISkillCategory, ISkill } from 'types/Interfaces'

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

export const Skills: { [key in SkillCategory]: Skill[] } = {
  backend: [
    { name: 'C# - .NET.Core', icon: SiDotNet },
    { name: 'Node', icon: SiNodeDotJs },
    { name: 'Javascript (ES6+)', icon: SiJavascript },
    { name: 'Typescript', icon: SiTypescript },
    { name: 'Graphql (JS, C#)', icon: SiGraphql },
    { name: 'PHP (Wordpress, Slim)', icon: SiPhp },
  ],
  frontend: [
    { name: 'React, RecoilJS', icon: SiReact },
    { name: 'NextJS', icon: SiNextDotJs },
    { name: 'Apollo Graphql', icon: SiApollographql },
    { name: 'Redux', icon: SiRedux },
    { name: 'VueJS', icon: SiVueDotJs },
    { name: 'Ghost', icon: SiGhost },
  ],
  database: [
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MsSQL', icon: SiMicrosoftsqlserver },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDb', icon: SiMongodb },
    { name: 'Redis', icon: SiRedis },
    { name: 'SocketIO', icon: SiSocketDotIo },
    { name: 'Google Pubsub', icon: SiGooglecloud },
  ],
  cicd: [
    { name: 'Docker', icon: SiDocker },
    { name: 'GCP', icon: SiGooglecloud },
    { name: 'CPanel', icon: SiCpanel },
    { name: 'Rancher', icon: SiRancher },
    { name: 'GitlabCICD', icon: SiGitlab },
    { name: 'Buildkite', icon: BsQuestionSquare },
  ],
  'ui frameworks': [
    { name: 'Styled Components', icon: SiStyledComponents },
    { name: 'AntDesign', icon: AiOutlineAntDesign },
    { name: 'MaterialUI', icon: SiMaterialUi },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'ChakraUI', icon: BsQuestionSquare },
  ],
  'productivity boost': [
    { name: 'VSCode', icon: SiVisualstudiocode },
    { name: 'Git', icon: SiGit },
    { name: 'Bash', icon: SiGnubash },
    { name: 'SourceTree', icon: FaSourcetree },
  ],
  mobile: [
    { name: 'React Native', icon: SiReact },
    { name: 'Web PWA', icon: IoLogoPwa },
  ],
  games: [{ name: 'Unity3D', icon: SiUnity }],
  desktop: [
    { name: 'Windows Forms, WPF', icon: SiMicrosoft },
    { name: 'Electron', icon: SiElectron },
  ],
}