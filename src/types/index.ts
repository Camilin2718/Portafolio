export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Web Design' | 'UI/UX' | 'Branding' | 'Product Design' | string;
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
    bioParagraph1: string;
    bioParagraph2: string;
    bioParagraph3: string;
    avatarUrl: string;
    cvUrl: string;
    stats: { label: string; value: string }[];
  };
  skills: string[];
  services: {
    title: string;
    description: string;
    tags: string[];
  }[];
  socials: SocialLink[];
  projects: Project[];
  experiences: Experience[];
  awards: Award[];
}
