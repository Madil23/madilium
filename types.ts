export enum MaterialType {
  PMMA = 'PMMA',
  WOOD = 'WOOD',
}

export enum CardColor {
  // PMMA / Standard
  BLACK = 'black',
  WHITE = 'white',
  CLEAR = 'transparent',
  NAVY_BLUE = '#1a365d',
  EMERALD_GREEN = '#064e3b',
  PURPLE_HAZE = '#581c87',
  RED_VELVET = '#7f1d1d',
  
  // Metallic / Special
  GOLD = 'gold',
  ROSE_GOLD = 'rose_gold',
  SILVER = 'silver',
  
  // Wood
  WOOD_OAK = '#A0522D',
  WOOD_WALNUT = '#5C4033',
  WOOD_BAMBOO = '#E3C699',
  WOOD_EBONY = '#2A2420',
}

export enum TemplateStyle {
  // Original 5
  MODERN_MINIMAL = 'MODERN_MINIMAL',
  NEON_CYBER = 'NEON_CYBER',
  PROFESSIONAL = 'PROFESSIONAL',
  NATURE_ECO = 'NATURE_ECO',
  VIBRANT_SOCIAL = 'VIBRANT_SOCIAL',
  
  // New 10
  GLASS_MORPHISM = 'GLASS_MORPHISM',
  LUXURY_SERIF = 'LUXURY_SERIF',
  DEVELOPER_TERM = 'DEVELOPER_TERM',
  CREATIVE_PORTFOLIO = 'CREATIVE_PORTFOLIO',
  RETRO_80S = 'RETRO_80S',
  INFLUENCER_GLOW = 'INFLUENCER_GLOW',
  CORPORATE_CLEAN = 'CORPORATE_CLEAN',
  MINIMAL_MONO = 'MINIMAL_MONO',
  GAMER_RGB = 'GAMER_RGB',
  ARTISTIC_BRUSH = 'ARTISTIC_BRUSH',
}

export type SocialPlatform = 
  | 'website' | 'email' | 'instagram' | 'linkedin' | 'twitter' | 'facebook' 
  | 'youtube' | 'tiktok' | 'whatsapp' | 'telegram' | 'snapchat' | 'discord' 
  | 'twitch' | 'spotify' | 'github' | 'behance' | 'dribbble' | 'paypal' | 'custom';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
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