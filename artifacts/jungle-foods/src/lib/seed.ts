import { MenuItem } from '../hooks/use-menu';
import { Review } from '../hooks/use-reviews';
import { GalleryImage } from '../hooks/use-gallery';

import bbqMandiPath from '@assets/generated_images/bbq-mandi.jpg';
import alfahamMandiPath from '@assets/generated_images/alfaham-mandi.jpg';
import grillMandiPath from '@assets/generated_images/grill-mandi.jpg';
import tandooriMandiPath from '@assets/generated_images/tandoori-mandi.jpg';
import biryaniPath from '@assets/generated_images/biryani.jpg';
import mojitosPath from '@assets/generated_images/mojitos.jpg';
import shawarmaPath from '@assets/generated_images/shawarma.jpg';
import kothuPath from '@assets/generated_images/kothu-parotta.jpg';
import faloodaPath from '@assets/generated_images/falooda.jpg';

import galleryOutdoorPath from '@assets/generated_images/gallery-outdoor.jpg';
import galleryChefPath from '@assets/generated_images/gallery-chef.jpg';
import galleryFamilyPath from '@assets/generated_images/gallery-family.jpg';
import gallerySpreadPath from '@assets/generated_images/gallery-spread.jpg';

const initialMenu: Omit<MenuItem, 'id'>[] = [
  // MANDI
  { name: 'BBQ Chicken Mandi', category: 'Mandi', description: 'Full ₹440, Half ₹220, Quarter ₹120', price: 120, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.9, isFeatured: true, image: bbqMandiPath },
  { name: 'Al Faham Chicken Mandi', category: 'Mandi', description: 'Charcoal grilled spiced chicken on fragrant rice', price: 120, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: true, image: alfahamMandiPath },
  { name: 'Grill Chicken Mandi', category: 'Mandi', description: 'Perfectly grilled chicken mandi rice platter with herbs and spices', price: 120, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: true, image: grillMandiPath },
  { name: 'Tandoori Chicken Mandi', category: 'Mandi', description: 'Bright orange tandoori chicken on yellow saffron mandi rice', price: 120, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: true, image: tandooriMandiPath },
  { name: 'Family Pack Mandi (Full - 4 persons)', category: 'Mandi', description: 'Served with extra meat and rice', price: 900, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.9, isFeatured: false, image: null },
  { name: 'Family Pack Mandi (Half - 2 persons)', category: 'Mandi', description: 'Perfect for two', price: 450, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Mutton Mandi', category: 'Mandi', description: 'Tender mutton cooked in traditional spices', price: 0, isMarketPrice: true, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Prawn Mandi', category: 'Mandi', description: 'Fresh prawns with mandi rice', price: 0, isMarketPrice: true, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },

  // BIRIYANI
  { name: 'Bucket Biriyani Full', category: 'Biriyani', description: 'A massive bucket of our signature biriyani', price: 999, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Bucket Biriyani Half', category: 'Biriyani', description: 'Half bucket biriyani', price: 499, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Chicken Biriyani', category: 'Biriyani', description: 'Aromatic Indian biriyani in a large pot, golden rice with chicken pieces', price: 120, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: true, image: biryaniPath },
  { name: 'Chicken 65 Biriyani', category: 'Biriyani', description: 'Spicy chicken 65 mixed with biriyani rice', price: 150, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Mutton Biriyani', category: 'Biriyani', description: 'Rich and flavorful mutton biriyani', price: 210, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Egg Biriyani', category: 'Biriyani', description: 'Aromatic rice cooked with boiled eggs', price: 90, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.3, isFeatured: false, image: null },
  { name: 'Prawn Biriyani', category: 'Biriyani', description: 'Spiced prawn biriyani', price: 180, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Plain Biriyani (Veg)', category: 'Biriyani', description: 'Fragrant biriyani rice', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.0, isFeatured: false, image: null },

  // CHINESE - FRIED RICE
  { name: 'Chicken Fried Rice', category: 'Chinese', description: 'Classic wok-tossed chicken fried rice', price: 110, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Egg Fried Rice', category: 'Chinese', description: 'Simple and delicious egg fried rice', price: 90, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.2, isFeatured: false, image: null },
  { name: 'Schezwan Chicken Fried Rice', category: 'Chinese', description: 'Spicy schezwan style', price: 140, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Prawn Fried Rice', category: 'Chinese', description: 'Wok-tossed with fresh prawns', price: 150, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Squid Fried Rice', category: 'Chinese', description: 'Squid rings tossed with rice', price: 0, isMarketPrice: true, isVeg: false, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Veg Fried Rice', category: 'Chinese', description: 'Mixed vegetables', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.1, isFeatured: false, image: null },
  { name: 'Mushroom Fried Rice', category: 'Chinese', description: 'Fresh mushrooms', price: 130, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.3, isFeatured: false, image: null },
  { name: 'Paneer Fried Rice', category: 'Chinese', description: 'Soft paneer cubes', price: 130, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Gobi Fried Rice', category: 'Chinese', description: 'Cauliflower bits', price: 110, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.2, isFeatured: false, image: null },
  { name: 'Ghee Rice', category: 'Chinese', description: 'Aromatic rice cooked in pure ghee', price: 140, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },

  // CHINESE - NOODLES
  { name: 'Chicken Noodles', category: 'Chinese', description: 'Wok-tossed chicken noodles', price: 110, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Egg Noodles', category: 'Chinese', description: 'Egg tossed noodles', price: 90, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.2, isFeatured: false, image: null },
  { name: 'Schezwan Chicken Noodles', category: 'Chinese', description: 'Spicy schezwan style', price: 140, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Prawn Noodles', category: 'Chinese', description: 'Wok-tossed with fresh prawns', price: 150, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Squid Noodles', category: 'Chinese', description: 'Squid rings tossed with noodles', price: 0, isMarketPrice: true, isVeg: false, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Veg Noodles', category: 'Chinese', description: 'Mixed vegetables', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.1, isFeatured: false, image: null },
  { name: 'Mushroom Noodles', category: 'Chinese', description: 'Fresh mushrooms', price: 130, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.3, isFeatured: false, image: null },
  { name: 'Paneer Noodles', category: 'Chinese', description: 'Soft paneer cubes', price: 130, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Gobi Noodles', category: 'Chinese', description: 'Cauliflower bits', price: 110, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.2, isFeatured: false, image: null },

  // CHICKEN GRAVY
  { name: 'Chicken Masala', category: 'Gravy', description: 'Rich chicken curry', price: 200, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Chicken Chilli Gravy', category: 'Gravy', description: 'Spicy indo-chinese style', price: 180, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Chicken Manchurian', category: 'Gravy', description: 'Sweet and tangy', price: 180, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.3, isFeatured: false, image: null },
  { name: 'Chicken Kadai Masala (Full)', category: 'Gravy', description: 'Cooked in traditional kadai', price: 200, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Butter Chicken', category: 'Gravy', description: 'Creamy tomato gravy', price: 220, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Chicken Chettinad', category: 'Gravy', description: 'Spicy South Indian style', price: 220, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Chicken Tikka Masala', category: 'Gravy', description: 'Roasted chicken in spiced curry', price: 200, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Chicken Hyderabad', category: 'Gravy', description: 'Rich Nizami style gravy', price: 200, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Chicken Schezwan', category: 'Gravy', description: 'Fiery schezwan gravy', price: 180, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.4, isFeatured: false, image: null },

  // VEG GRAVY
  { name: 'Mushroom Masala', category: 'Gravy', description: 'Spicy mushroom curry', price: 140, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.3, isFeatured: false, image: null },
  { name: 'Paneer Butter Gravy', category: 'Gravy', description: 'Soft paneer in rich tomato gravy', price: 140, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Gobi Manchurian', category: 'Gravy', description: 'Crispy cauliflower in tangy sauce', price: 120, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Chilli Mushroom', category: 'Gravy', description: 'Spicy mushrooms', price: 140, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },

  // CHICKEN DRY
  { name: 'Dragon Chicken', category: 'Starters', description: 'Spicy and sticky chicken', price: 220, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Chicken 65 Full', category: 'Starters', description: 'Classic fried spicy chicken', price: 160, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Boneless Chicken 65', category: 'Starters', description: 'Boneless version', price: 180, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Chicken Lollipop', category: 'Starters', description: 'Crispy chicken wings', price: 200, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Chicken Manchurian Dry', category: 'Starters', description: 'Tossed in manchurian sauce', price: 200, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Chicken 555', category: 'Starters', description: 'Special crispy chicken strips', price: 220, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Chicken 777', category: 'Starters', description: 'Chef special dry chicken', price: 220, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },

  // PAROTTA
  { name: 'Parotta', category: 'Breads', description: 'Flaky layered bread', price: 10, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Coin Parotta', category: 'Breads', description: 'Small sized parottas', price: 6, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Bun Parotta', category: 'Breads', description: 'Soft bun-like parotta', price: 35, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Killi Parotta', category: 'Breads', description: 'Shredded parotta roasted in banana leaf', price: 120, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Kothu Parotta', category: 'Breads', description: 'Minced parotta with spices', price: 100, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Chicken Kothu Parotta', category: 'Breads', description: 'Minced parotta with chicken and spices', price: 130, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: true, image: kothuPath },
  { name: 'Egg Kothu Parotta', category: 'Breads', description: 'Minced parotta with egg', price: 80, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null },

  // CHAPATHI & NAAN
  { name: 'Plain Chapathi', category: 'Breads', description: 'Soft wheat bread', price: 30, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.2, isFeatured: false, image: null },
  { name: 'Butter Chapathi', category: 'Breads', description: 'Chapathi roasted with butter', price: 30, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Plain Naan', category: 'Breads', description: 'Tandoor baked bread', price: 30, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.3, isFeatured: false, image: null },
  { name: 'Butter Naan', category: 'Breads', description: 'Naan topped with butter', price: 40, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Garlic Naan', category: 'Breads', description: 'Naan topped with garlic and butter', price: 40, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Kulcha', category: 'Breads', description: 'Soft leavened bread', price: 25, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },

  // SHAWARMA
  { name: 'Chicken Shawarma Roll', category: 'Shawarma', description: 'Lebanese shawarma wrap with vegetables and sauce', price: 90, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: true, image: shawarmaPath },
  { name: 'Chicken Shawarma Plate', category: 'Shawarma', description: 'Shawarma meat served on a plate with kuboos', price: 110, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Tandoori Shawarma', category: 'Shawarma', description: 'Spicy tandoori flavored shawarma', price: 110, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },

  // EGG ITEMS
  { name: 'Omelette', category: 'Sides', description: 'Classic egg omelette', price: 20, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.2, isFeatured: false, image: null },
  { name: 'Half Boil', category: 'Sides', description: 'Sunny side up', price: 15, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.1, isFeatured: false, image: null },
  { name: 'Kalaki', category: 'Sides', description: 'Soft scrambled egg with gravy', price: 20, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Egg Podi Mass', category: 'Sides', description: 'Scrambled eggs with onions and spices', price: 30, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Mutta Chutney', category: 'Sides', description: 'Spicy egg preparation', price: 50, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null },

  // BEVERAGES - MILKSHAKES
  { name: 'Oreo Milkshake', category: 'Beverages', description: 'Thick oreo shake', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Chocoscotch Holics', category: 'Beverages', description: 'Chocolate and butterscotch blend', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Banana Lovers', category: 'Beverages', description: 'Fresh banana shake', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Mango Strawberry', category: 'Beverages', description: 'Fruity delight', price: 70, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Snickers', category: 'Beverages', description: 'Peanut and caramel chocolate shake', price: 90, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Bournvita', category: 'Beverages', description: 'Malty chocolate drink', price: 100, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Mixed Fruit Punch', category: 'Beverages', description: 'Blend of fresh fruits', price: 60, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Butterscotch', category: 'Beverages', description: 'Classic butterscotch', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'KitKat Magic', category: 'Beverages', description: 'Crunchy KitKat shake', price: 90, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Dry Fruit', category: 'Beverages', description: 'Rich nutty shake', price: 100, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },

  // BEVERAGES - ICE CREAM
  { name: 'Vanilla Ice Cream', category: 'Desserts', description: 'Classic vanilla', price: 50, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.3, isFeatured: false, image: null },
  { name: 'Strawberry Ice Cream', category: 'Desserts', description: 'Sweet strawberry', price: 60, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Chocolate Ice Cream', category: 'Desserts', description: 'Rich chocolate', price: 60, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Mango Ice Cream', category: 'Desserts', description: 'Seasonal mango', price: 70, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Vanilla Choco Chips', category: 'Desserts', description: 'Vanilla with chocolate chips', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Butterscotch Ice Cream', category: 'Desserts', description: 'Crunchy butterscotch', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Black Currant Ice Cream', category: 'Desserts', description: 'Fruity black currant', price: 100, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Dry Fruit Ice Cream', category: 'Desserts', description: 'Loaded with nuts', price: 120, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.8, isFeatured: false, image: null },

  // BEVERAGES - FALOODA
  { name: 'Falooda', category: 'Desserts', description: 'Classic falooda', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Malai Kulfi Falooda', category: 'Desserts', description: 'With rich malai kulfi', price: 90, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Badami Falooda', category: 'Desserts', description: 'Almond flavored', price: 120, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Dry Fruit Falooda', category: 'Desserts', description: 'Loaded with premium nuts', price: 120, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Jungle Special Falooda', category: 'Desserts', description: 'Tall glass of colorful falooda with rose syrup, jelly, ice cream, nuts', price: 150, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.9, isFeatured: true, image: faloodaPath },

  // BEVERAGES - FRESH JUICE
  { name: 'Watermelon Juice', category: 'Beverages', description: 'Fresh watermelon', price: 40, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Pineapple Juice', category: 'Beverages', description: 'Fresh pineapple', price: 50, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Orange Juice', category: 'Beverages', description: 'Freshly squeezed', price: 60, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Pomegranate Juice', category: 'Beverages', description: 'Fresh pomegranate', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Apple Juice', category: 'Beverages', description: 'Fresh apple', price: 70, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Kiwi Juice', category: 'Beverages', description: 'Fresh kiwi', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Lemon Juice', category: 'Beverages', description: 'Fresh lime', price: 30, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.3, isFeatured: false, image: null },
  { name: 'Lemon Soda', category: 'Beverages', description: 'Sparkling lime', price: 30, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Lemon Mint', category: 'Beverages', description: 'Minty lime freshness', price: 30, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },

  // BEVERAGES - MOJITO
  { name: 'Blue Mojito', category: 'Beverages', description: 'Refreshing blue curacao', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Green Apple Mojito', category: 'Beverages', description: 'Crisp green apple flavor', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Black Currant Mojito', category: 'Beverages', description: 'Berry goodness', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Mint Mojito', category: 'Beverages', description: 'Vibrant colorful mocktail with ice, lime, mint leaves', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.8, isFeatured: true, image: mojitosPath },
  { name: 'Lime Mojito', category: 'Beverages', description: 'Classic lime mocktail', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Blueberry Mojito', category: 'Beverages', description: 'Sweet blueberry freshness', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },

  // BEVERAGES - COLD COFFEE
  { name: 'Cold Coffee', category: 'Beverages', description: 'Classic iced coffee', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Hard Rock', category: 'Beverages', description: 'Strong iced coffee', price: 90, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Coffee On Rocks', category: 'Beverages', description: 'Iced black coffee', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Chocolate Coffee', category: 'Beverages', description: 'Mocha delight', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Mud Coffee', category: 'Beverages', description: 'Thick chocolate coffee', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.8, isFeatured: false, image: null },

  // STREET FOOD
  { name: 'Pani Poori', category: 'Snacks', description: 'Crispy pooris with tangy water', price: 30, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Masala Poori', category: 'Snacks', description: 'Crushed pooris with spicy peas gravy', price: 40, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Bhel Poori', category: 'Snacks', description: 'Puffed rice mixed with chutneys', price: 40, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Mushroom Fry', category: 'Snacks', description: 'Spicy mushroom fry', price: 40, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },

  // FROZEN SNACKS
  { name: 'French Fries', category: 'Snacks', description: 'Crispy salted fries', price: 69, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Fish Fingers (4pcs)', category: 'Snacks', description: 'Crispy fried fish sticks', price: 79, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Chicken Wings (6pcs)', category: 'Snacks', description: 'Spicy chicken wings', price: 99, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.7, isFeatured: false, image: null },
  { name: 'Chicken Nuggets (5pcs)', category: 'Snacks', description: 'Crispy chicken bites', price: 99, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Broasted Chicken', category: 'Snacks', description: 'Crispy pressure fried chicken', price: 99, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.8, isFeatured: false, image: null },
  { name: 'Chicken Momos (5pcs)', category: 'Snacks', description: 'Steamed chicken dumplings', price: 99, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Veg Roll (4pcs)', category: 'Snacks', description: 'Crispy vegetable spring rolls', price: 80, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Mushroom Momos (4pcs)', category: 'Snacks', description: 'Steamed mushroom dumplings', price: 70, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.5, isFeatured: false, image: null },

  // SNACKS
  { name: 'Bread Omelette', category: 'Snacks', description: 'Classic street style bread omelette', price: 40, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.6, isFeatured: false, image: null },
  { name: 'Tandoori Sandwich', category: 'Snacks', description: 'Spicy tandoori filling', price: 60, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.5, isFeatured: false, image: null },
  { name: 'Cheese Sandwich', category: 'Snacks', description: 'Grilled cheese sandwich', price: 50, isMarketPrice: false, isVeg: true, isAvailable: true, rating: 4.4, isFeatured: false, image: null },
  { name: 'Egg Sandwich', category: 'Snacks', description: 'Boiled egg filling', price: 50, isMarketPrice: false, isVeg: false, isAvailable: true, rating: 4.3, isFeatured: false, image: null }
];

const initialReviews: Omit<Review, 'id'>[] = [
  { name: "Rahul S.", rating: 5, text: "The BBQ Chicken Mandi is out of this world! The meat falls right off the bone and the rice is so flavorful. The jungle ambiance makes it a great place for family dinners.", date: new Date().toISOString(), status: "approved" },
  { name: "Priya M.", rating: 4, text: "Love the Shawarma here! Very authentic taste. The setting is beautiful and really stands out from other restaurants in the area. Highly recommend trying the Jungle Special Falooda.", date: new Date().toISOString(), status: "approved" },
  { name: "Arun K.", rating: 5, text: "Best Biryani in town! We ordered the Bucket Biryani for our family get-together and it was more than enough. Perfectly spiced and served hot.", date: new Date().toISOString(), status: "approved" },
  { name: "Sarah T.", rating: 5, text: "Amazing atmosphere! It really feels like you've stepped into a tropical jungle resort. The staff is very friendly and the food is premium quality at reasonable prices.", date: new Date().toISOString(), status: "approved" }
];

const initialGallery: Omit<GalleryImage, 'id'>[] = [
  { url: galleryOutdoorPath, caption: "Our beautiful outdoor seating under the canopy" },
  { url: galleryChefPath, caption: "Our master chefs preparing the signature Biryani" },
  { url: galleryFamilyPath, caption: "A perfect place for family gatherings and celebrations" },
  { url: gallerySpreadPath, caption: "A feast of Arabian and Indian delicacies" }
];

export function seedData() {
  if (!localStorage.getItem('jf_menu_items') || JSON.parse(localStorage.getItem('jf_menu_items') || '[]').length === 0) {
    const menuWithIds = initialMenu.map(item => ({ ...item, id: crypto.randomUUID() }));
    localStorage.setItem('jf_menu_items', JSON.stringify(menuWithIds));
  }

  if (!localStorage.getItem('jf_reviews') || JSON.parse(localStorage.getItem('jf_reviews') || '[]').length === 0) {
    const reviewsWithIds = initialReviews.map(item => ({ ...item, id: crypto.randomUUID() }));
    localStorage.setItem('jf_reviews', JSON.stringify(reviewsWithIds));
  }

  if (!localStorage.getItem('jf_gallery') || JSON.parse(localStorage.getItem('jf_gallery') || '[]').length === 0) {
    const galleryWithIds = initialGallery.map(item => ({ ...item, id: crypto.randomUUID() }));
    localStorage.setItem('jf_gallery', JSON.stringify(galleryWithIds));
  }
}
