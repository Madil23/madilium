export enum MaterialType {
  PMMA = 'PMMA',
  WOOD = 'WOOD',
}

export enum CardColor {
  BLACK = 'black',
  WHITE = 'white',
  CLEAR = 'transparent',
  WOOD_OAK = '#A0522D',
  WOOD_WALNUT = '#5C4033',
}

export enum TemplateStyle {
  MODERN_MINIMAL = 'MODERN_MINIMAL',
  NEON_CYBER = 'NEON_CYBER',
  PROFESSIONAL = 'PROFESSIONAL',
  NATURE_ECO = 'NATURE_ECO',
  VIBRANT_SOCIAL = 'VIBRANT_SOCIAL',
}

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'linkedin' | 'twitter' | 'website' | 'email';
  url: string;
}

export interface UserProfile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  links: SocialLink[];
}

export interface ProductConfig {
  material: MaterialType;
  color: string;
  quantity: number;
}

export interface AppState {
  profile: UserProfile;
  template: TemplateStyle;
  product: ProductConfig;
}
