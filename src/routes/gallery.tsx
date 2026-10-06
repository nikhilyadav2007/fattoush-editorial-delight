import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, Gallery, ReservationCTA } from '@/components/restaurant/sections';
import { pageHead } from '@/data/restaurant';
export const Route = createFileRoute('/gallery')({ head: () => pageHead('Gallery | Fattoush Restaurant & Banquet', 'An illustrative taste of Middle Eastern food, warm dining and memorable celebrations at Fattoush.', '/gallery'), component: GalleryPage });
function GalleryPage() { return <div className="inner-page"><PageIntro eyebrow="THE GALLERY" title="A Feast for the Eyes." /><Gallery /><ReservationCTA /></div>; }
