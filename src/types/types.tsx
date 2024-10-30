export interface BlogPost {
  id: number;
  title: string;
  text: string;
  image?: string;
  author: string;
}

export interface SectionContent {
  title: string;
  description: string;
}

export interface LandingPageContent {
  headline: string;
  subheadline: string;
  sections: SectionContent[];
  callToAction: {
    text: string;
    link: string;
  };
}

export interface DropDownMenuProps {
  options: { label: string; onClick: () => void }[];
  darkModeEnabled: boolean;
  index: number;
}
