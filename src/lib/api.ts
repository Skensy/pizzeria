
import { MenuItem, ContactInfo, StrapiResponse, StrapiMenuItem, StrapiContactInfo, StrapiHomepage, StrapiAbout } from '../types';
import { MENU_ITEMS, CONTACT_INFO } from '../constants';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const IS_GITHUB_PAGES = process.env.GITHUB_PAGES === 'true';

/**
 * Helper to fetch data from Strapi
 */
async function fetchAPI<T>(path: string, urlParamsObject = {}, options = {}): Promise<T | null> {
  try {
    if (IS_GITHUB_PAGES) {
      return null;
    }

    // Merge default and user options
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    // Build request URL
    const queryString = Object.keys(urlParamsObject)
      // @ts-ignore
      .map((key) => `${key}=${urlParamsObject[key]}`)
      .join('&');
    
    // Check if query string is not empty before appending
    const requestUrl = `${API_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);
    const response = await fetch(requestUrl, {
      ...mergedOptions,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`Strapi API Fetch failed: ${response.status} ${response.statusText}`);
      throw new Error('An error occurred please try again');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch API error:', error);
    return null;
  }
}

/**
 * Get Menu Items - Fallbacks to Constants if API fails
 */
export async function getMenuItems(): Promise<MenuItem[]> {
  const data = await fetchAPI<StrapiResponse<StrapiMenuItem[]>>('/menu-items', { populate: '*' });
  
  if (!data || !data.data) {
    return MENU_ITEMS; // Fallback
  }

  return data.data.map((item) => {
    return {
      id: item.id,
      nome: item.nome,
      description: item.description,
      price: Number(item.price),
      category: item.category,
      image: item.image?.url 
        ? `${API_URL}${item.image.url}` 
        : 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', // Fallback image
      isVegetarian: item.isVegetarian,
      isSpicy: item.isSpicy,
      ingredients: [] // Add empty ingredients as not present in Strapi model yet
    };
  });
}

/**
 * Get Contact Info - Fallbacks to Constants if API fails
 */
export async function getContactInfo(): Promise<ContactInfo> {
  const data = await fetchAPI<StrapiResponse<StrapiContactInfo>>('/contact-info', { populate: '*' });

  if (!data || !data.data) {
    return CONTACT_INFO; // Fallback
  }

  const attr = data.data;
  return {
    address: attr.address,
    phone: attr.phone,
    email: attr.email,
    hours: attr.hours?.map((h) => ({
      days: h.days,
      time: h.time
    })) || []
  };
}

/**
 * Get Homepage Data - Fallbacks to static data if API fails
 */
export async function getHomepageData() {
  const data = await fetchAPI<StrapiResponse<StrapiHomepage>>('/homepage', { populate: '*' });

  if (!data || !data.data) {
    return null; // Return null to signal usage of default static JSX
  }

  const attr = data.data;
  return {
    heroTitle: attr.heroTitle,
    heroSubtitle: attr.heroSubtitle,
    heroImage: attr.heroImage?.url 
      ? `${API_URL}${attr.heroImage.url}` 
      : null
  };
}

/**
 * Get About Page Data
 */
export async function getAboutData() {
  const data = await fetchAPI<StrapiResponse<StrapiAbout>>('/about', { populate: '*' });

  if (!data || !data.data) {
    return null;
  }

  const attr = data.data;
  return {
    heroImage: attr.heroImage?.url ? `${API_URL}${attr.heroImage.url}` : null,
    galleryImage1: attr.galleryImage1?.url ? `${API_URL}${attr.galleryImage1.url}` : null,
    galleryImage2: attr.galleryImage2?.url ? `${API_URL}${attr.galleryImage2.url}` : null,
  };
}
