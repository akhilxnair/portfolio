/* eslint-disable camelcase */
// Import Modules
import { IconType } from "react-icons";
import { ColorMode, ResponsiveValue } from "@chakra-ui/react";

export interface IThemeMode {
  Light: ColorMode;
  Dark: ColorMode;
}

export type ISkillSetModal = {
  onOpen(): void;
};

export type IFeaturedCard = {
  height: string | ResponsiveValue<any>;
  src: string;
  idx: number;
  title: string;
  description: string;
  objectPosition?: string;
  ctaUrl: string;
  isMobile?: boolean;
};

export interface IArticle {
  id: string;
  type_of: string;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  url: string;
  tag_list: string[];
  social_image: string;
}

export type ISocialMedias = {
  label: string;
  href: string;
  icon: IconType;
};

export type ISkill = {
  name: string;
  icon: IconType;
};

export type ISkillModal = {
  isOpen: boolean;
  onClose(): void;
};
