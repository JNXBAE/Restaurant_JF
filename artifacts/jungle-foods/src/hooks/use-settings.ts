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
  whatsappNumber: "919000000000",
  instagramLink: "https://instagram.com/jungle_foods_",
  googleMapsLink: "https://www.google.com/maps/place/Jungle+Foods/@11.48287,79.7144424,17z/data=!3m1!4b1!4m6!3m5!1s0x3a54c10026875151:0xef9384b059f8df3b!8m2!3d11.48287!4d79.7144424!16s%2Fg%2F11",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5!2d79.7144424!3d11.48287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54c10026875151:0xef9384b059f8df3b!2sJungle%20Foods!5e0!3m2!1sen!2sin!4v1",
  email: "hello@junglefoods.com",
  phone: "Call us for reservations",
  address: "Jungle Foods, FPM7+5RJ, Cuddalore Chidambaram Hwy, Manjakuzhi, Tamil Nadu 608501",
  openingHours: "12:00 PM – 11:00 PM, All Days"
};

export function useSettings() {
  const [settings, setSettings] = useLocalStorage<Settings>('jf_settings', defaultSettings);
  return { settings, setSettings };
}
