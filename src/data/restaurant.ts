import hero from '@/assets/hero-dining.webp';
import feast from '@/assets/feast.webp';
import grills from '@/assets/grills.webp';
import kunafa from '@/assets/kunafa.webp';
import banquet from '@/assets/banquet.webp';
import mandi from '@/assets/mandi.webp';

export const images = { hero, feast, grills, kunafa, banquet, mandi };
export const restaurant = {
  name: 'Fattoush Restaurant & Banquet',
  phone: '099623 30993', telephone: 'tel:+919962330993',
  address: '425/1A, Nookampalayam Link Rd, Alamelu Manga Puram, Sholinganallur, Chennai, Tamil Nadu 600119',
  website: 'https://fattoush.in',
  menu: 'https://www.zomato.com/chennai/fattoush-sholinganallur/menu',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=Fattoush+Restaurant+%26+Banquet+425%2F1A+Nookampalayam+Link+Rd+Chennai',
};
export const navigation = [
  { name: 'Home', to: '/' }, { name: 'Our Story', to: '/story' },
  { name: 'Menu', to: '/menu' }, { name: 'Gallery', to: '/gallery' },
  { name: 'Reviews', to: '/reviews' }, { name: 'Banquets', to: '/banquets' }, { name: 'Contact', to: '/contact' },
] as const;
export const categories = ['Starters', 'Kebabs', 'Arabian', 'Mandi', 'Indian', 'Chinese', 'Seafood', 'Vegetarian', 'Breads', 'Desserts', 'Beverages'] as const;
export type Category = typeof categories[number];
export type Dish = { name: string; category: Category; description: string; popular?: boolean; vegetarian?: boolean; image?: string };
export const dishes: Dish[] = [
  { name: 'Tandoori Veg Platter', category: 'Vegetarian', description: 'A vegetable platter from the tandoor.', popular: true, vegetarian: true },
  { name: 'Peri Peri BBQ Chicken', category: 'Kebabs', description: 'Barbecue chicken with peri peri character.', popular: true, image: grills },
  { name: 'Special Tawa Platters Mix', category: 'Indian', description: 'A mixed platter made for sharing.', popular: true },
  { name: 'Sizzling Brownie', category: 'Desserts', description: 'A warm, indulgent brownie experience.', popular: true },
  { name: 'Plain Kunafa', category: 'Desserts', description: 'A classic Middle Eastern sweet finish.', popular: true, image: kunafa },
  { name: 'Crab Lollipop', category: 'Seafood', description: 'A bite-sized seafood starter.', popular: true },
  { name: 'Nool Parotta', category: 'Breads', description: 'Delicate layers, a delicious accompaniment.', popular: true },
  { name: 'Shahi Tukda', category: 'Desserts', description: 'A rich traditional dessert.', popular: true },
  { name: 'Dynamite Chicken', category: 'Starters', description: 'A bold start to your meal.' },
  { name: 'Fruit Falooda Cream', category: 'Beverages', description: 'A fruity, creamy falooda treat.' },
  { name: 'Drums of Heaven', category: 'Chinese', description: 'Chicken drumettes with plenty of character.' },
  { name: 'Prawns Dynamite', category: 'Seafood', description: 'A flavourful prawn starter.' },
  { name: 'Fattoush Special Chicken Half', category: 'Arabian', description: 'Our special chicken, half portion.' },
  { name: 'Butterfly Crumb Fried Prawns', category: 'Seafood', description: 'Butterfly prawns with a crisp crumb finish.' },
  { name: 'Chicken Mandi Half', category: 'Mandi', description: 'Fragrant rice and chicken, a feast to remember.', image: mandi },
  { name: 'Chicken Kofta with Grilled Veg', category: 'Kebabs', description: 'Chicken kofta paired with grilled vegetables.', image: grills },
  { name: 'Kerala Parotta', category: 'Breads', description: 'A layered classic for your table.', vegetarian: true },
  { name: 'Hariyali Paneer Tikka', category: 'Vegetarian', description: 'A green-spiced paneer favourite.', vegetarian: true },
  { name: 'BBQ Chicken 4 in 1 Combo', category: 'Kebabs', description: 'Four barbecue flavours, one generous combo.' },
];
export const gallery = [
  { src: feast, title: 'A table full of flavour' }, { src: grills, title: 'From the flame' },
  { src: banquet, title: 'An evening of celebration' }, { src: kunafa, title: 'A sweet finale' },
  { src: mandi, title: 'The art of Mandi' },
];
export const reviews = [
  'Loved the juicy kebabs, fresh fattoush salad, and creamy hummus.',
  'Food and service place are good.',
];
export function pageHead(title: string, description: string, path: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: path }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: path }] };
}