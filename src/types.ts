
export interface MenuItem {
  id: number | string;
  nome: string;
  description: string;
  price: number;
  category: 'pizze' | 'sfizi' | 'dolci' | 'bevande';
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  ingredients?: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: {
    days: string;
    time: string;
  }[];
}

// Strapi Generic Response Wrapper
export interface StrapiExampleItem {
  id: number;
  attributes: any;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Strapi Content Types
export interface StrapiMenuItem {
  id: number;
  documentId: string;
  nome: string;
  description: string;
  price: number;
  category: 'pizze' | 'sfizi' | 'dolci' | 'bevande';
  image: {
    url: string;
  };
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface StrapiContactInfo {
  id: number;
  documentId: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    id: number;
    days: string;
    time: string;
  }[];
}

export interface StrapiHomepage {
  id: number;
  documentId: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: {
    url: string;
  };
}

export interface StrapiAbout {
  id: number;
  documentId: string;
  heroImage: {
    url: string;
  };
  galleryImage1: {
    url: string;
  };
  galleryImage2: {
    url: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Page {
  Home = 'home',
  Menu = 'menu',
  About = 'chi-siamo',
  Contact = 'contatti'
}
