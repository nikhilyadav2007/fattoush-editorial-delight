import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, Reviews, ExperienceFeatures, ReservationCTA } from '@/components/restaurant/sections';
import { pageHead } from '@/data/restaurant';
export const Route = createFileRoute('/reviews')({ head: () => pageHead('Guest Reviews | Fattoush Restaurant & Banquet', 'Read guest feedback about Fattoush’s kebabs, fattoush salad, hummus and warm service in Chennai.', '/reviews'), component: ReviewsPage });
function ReviewsPage() { return <div className="inner-page"><PageIntro eyebrow="WORDS FROM OUR TABLE" title="The Best Stories Are Yours." /><Reviews /><ExperienceFeatures /><ReservationCTA /></div>; }
