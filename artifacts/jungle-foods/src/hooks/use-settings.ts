import { useLocalStorage } from './use-local-storage';

export type Settings = {
  whatsappNumber: string;
  instagramLink: string;
  googleMapsLink: string;
  email: string;
  phone: string;
  address: string;
  openingHours: string;
};

const defaultSettings: Settings = {
  whatsappNumber: "919000000000",
  instagramLink: "https://instagram.com/jungle_foods_",
  googleMapsLink: "https://maps.google.com",
  email: "hello@junglefoods.com",
  phone: "Call us for reservations",
  address: "Your city location",
  openingHours: "12:00 PM – 11:00 PM, All Days"
};

export function useSettings() {
  const [settings, setSettings] = useLocalStorage<Settings>('jf_settings', defaultSettings);
  return { settings, setSettings };
}
