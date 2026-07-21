import { useLocalStorage } from './use-local-storage';

export type Settings = {
  whatsappNumber: string;
  instagramLink: string;
  googleMapsLink: string;
  googleMapsEmbed: string;
  email: string;
  phone: string;
  address: string;
  openingHours: string;
};

const defaultSettings: Settings = {
  // WhatsApp Number (Country Code +91)
  whatsappNumber: "919600420706",

  // Instagram Profile
  instagramLink: "https://www.instagram.com/jungle_foods_?igsh=eWRhaWoxcjNvbzRj",

  // Google Maps Location
  googleMapsLink:
    "https://www.google.com/maps/place/FPM7%2B5RJ,+Cuddalore+Chidambaram+Hwy,+Manjakuzhi,+Tamil+Nadu+608501",

  // Google Maps Embed (Replace with actual embed URL if available)
  googleMapsEmbed:
    "https://google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGD0yBggCEEUYPTIGCAMQRRg80gEIMjg4NGowajeoAgCwAgA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KVFRhyYAwVQ6MTvf-FmwhJPv&daddr=FPM7%2B5RJ,+Cuddalore+Chidambaram+Hwy,+Manjakuzhi,+Tamil+Nadu+608501",

  // Email Address (Replace with your actual email)
  email: "hello@junglefoods.com",

  // Contact Number
  phone: "+91 96004 20706",

  // Restaurant Address
  address:
    "Jungle Foods, FPM7+5RJ, Cuddalore Chidambaram Hwy, Manjakuzhi, Tamil Nadu 608501",

  // Opening Hours
  openingHours: "10:00 AM - 10:00 PM",
};

export function useSettings() {
  const [settings, setSettings] = useLocalStorage<Settings>(
    "jf_settings",
    defaultSettings
  );

  return {
    settings,
    setSettings,
  };
}
