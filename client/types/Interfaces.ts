// Import Modules
import { IconType } from 'react-icons'
import { ColorMode } from '@chakra-ui/react'

export interface IThemeMode {
  Light: ColorMode
  Dark: ColorMode
}

export type ISkillSetModal = {
  onOpen(): void
}

export interface Article {
  id: string
  type_of: string
  title: string
  description: string
  readable_publish_date: string
  slug: string
  url: string
  tag_list: string[]
  social_image: string
}

export type ISocialMedias = {
  label: string
  href: string
  icon: IconType
}

export type ICompany = 'SCG' | 'Blotocol'

export type IExperience = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: { light: string; dark?: string }
  roles?: JSX.Element[]
}

export type ISkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop'

export type ISkill = {
  name: string
  icon: IconType
}
