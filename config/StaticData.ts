// Import Modules
import { IoLogoPwa } from 'react-icons/io5';
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiMatrix,
  SiApollographql,
  SiReact,
  SiNextDotJs,
  SiRedux,
  SiStyledComponents,
  SiDocker,
  SiGitlab,
  SiPostgresql,
  SiMongodb,
  SiSocketDotIo,
  SiMaterialUi,
  SiStorybook,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiSass,
  SiBootstrap,
  SiJest,
  SiCocoapods,
  SiGitkraken,
  SiEslint,
  SiPrettier,
  SiFramer,
  SiGoogletagmanager,
  SiSentry,
} from 'react-icons/si';

// Import Interfaces
import { ISocialMedias } from 'types/Interfaces';

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
];

export const Skills = {
  languages: [
    { name: 'Javascript', icon: SiJavascript },
    { name: 'Typescript', icon: SiTypescript },
  ],
  frontend: [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'React', icon: SiReact },

    { name: 'CSS3', icon: SiCss3 },
    { name: 'NextJS', icon: SiNextDotJs },
  ],
  css: [
    { name: 'SCSS', icon: SiSass },
    { name: 'MaterialUI', icon: SiMaterialUi },
    { name: 'Styled Components', icon: SiStyledComponents },
    { name: 'Bootstrap', icon: SiBootstrap },
  ],
  state: [
    { name: 'Redux', icon: SiRedux },
    { name: 'MobX', icon: SiMatrix },
  ],
  testing: [
    { name: 'Jest / RTL', icon: SiJest },
    { name: 'Cypress', icon: SiCocoapods },
  ],
  tracking: [
    { name: 'Sentry', icon: SiSentry },
    { name: 'Google Tag Manager', icon: SiGoogletagmanager },
  ],
  libraries: [
    { name: 'ESLint', icon: SiEslint },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'Apollo GraphQL', icon: SiApollographql },
    { name: 'Prettier', icon: SiPrettier },
    { name: 'Storybook', icon: SiStorybook },
    { name: 'SocketIO', icon: SiSocketDotIo },
  ],
  backend: [{ name: 'Node JS + Express JS', icon: SiNodeDotJs }],
  database: [
    { name: 'MongoDb', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ],
  cicd: [
    { name: 'Docker', icon: SiDocker },
    { name: 'Gitlab CI/CD', icon: SiGitlab },
  ],
  tools: [
    { name: 'Docker', icon: SiDocker },
    { name: 'Gitlab CI/CD', icon: SiGitlab },
  ],
  productivity: [
    { name: 'Git', icon: SiGit },
    { name: 'Bash', icon: SiGnubash },
    { name: 'VSCode', icon: SiVisualstudiocode },
    { name: 'GitKraken', icon: SiGitkraken },
  ],
  mobile: [
    { name: 'PWA / Web Views', icon: IoLogoPwa },
    { name: 'React Native', icon: SiReact },
  ],
};
