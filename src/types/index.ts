export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  timeline: string;
  role: string;
  projectType: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution?: string;
  results: string;
  metrics: { label: string; value: string }[];
  heroImage: string;
  gallery: string[];
  deliverables: string[];
  liveUrl?: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  achievements?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
}

export interface Reference {
  name: string;
  company: string;
  role: string;
  phone: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    timezone: string;
    availability: string;
    email: string;
    phone: string;
    bioParagraph1: string;
    bioParagraph2: string;
    bioParagraph3: string;
    avatarUrl: string;
    cvUrl: string;
    stats: { label: string; value: string }[];
  };
  skills: string[];
  technicalSkillsByCategory: {
    category: string;
    skills: string[];
  }[];
  services: {
    title: string;
    description: string;
    tags: string[];
  }[];
  socials: SocialLink[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  references: Reference[];
  languages: Language[];
  awards: Award[];
}
