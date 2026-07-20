import { useLocalStorage } from './use-local-storage';

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  isMarketPrice: boolean;
  isVeg: boolean;
  isAvailable: boolean;
  rating: number;
  isFeatured: boolean;
  image: string | null;
};

export function useMenu() {
  const [menu, setMenu] = useLocalStorage<MenuItem[]>('jf_menu_items', []);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem = { ...item, id: crypto.randomUUID() };
    setMenu([...menu, newItem]);
  };

  const updateMenuItem = (id: string, updates: Partial<MenuItem>) => {
    setMenu(menu.map((item) => (item.id === id ? { ...item, ...updates } : item)));
  };

  const deleteMenuItem = (id: string) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  return { menu, addMenuItem, updateMenuItem, deleteMenuItem };
}
