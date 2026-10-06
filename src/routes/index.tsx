import { createFileRoute } from '@tanstack/react-router';
import { Hero, StorySection, SignatureDishes, MenuSection, MandiFeature, GrillSection, BanquetSection, Gallery, Reviews, ExperienceFeatures, ReservationCTA, Location } from '@/components/restaurant/sections';
import { pageHead, restaurant } from '@/data/restaurant';

export const Route = createFileRoute('/')({
 head: () => ({
  ...pageHead('Fattoush Restaurant & Banquet | Middle Eastern Restaurant in Chennai', 'Experience flavourful Middle Eastern and multi-cuisine dishes, kebabs, mandi, platters and desserts at Fattoush Restaurant & Banquet in Sholinganallur, Chennai.', '/'),
  scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Restaurant', name: restaurant.name, servesCuisine: ['Middle Eastern', 'Multi-Cuisine'], telephone: '+91 99623 30993', hasMenu: restaurant.menu, address: { '@type': 'PostalAddress', streetAddress: '425/1A, Nookampalayam Link Rd, Alamelu Manga Puram, Sholinganallur', addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', postalCode: '600119', addressCountry: 'IN' } }) }],
 }),
 component: Home,
});
function Home() { return <><Hero /><StorySection /><SignatureDishes /><MenuSection /><MandiFeature /><GrillSection /><BanquetSection /><Gallery /><Reviews /><ExperienceFeatures /><ReservationCTA /><Location /></>; }
