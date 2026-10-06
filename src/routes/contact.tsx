import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, Location, ReservationCTA } from '@/components/restaurant/sections';
import { pageHead } from '@/data/restaurant';
export const Route = createFileRoute('/contact')({ head: () => pageHead('Contact & Reservations | Fattoush Chennai', 'Call 099623 30993 to reserve a table at Fattoush Restaurant & Banquet, Nookampalayam Link Road, Sholinganallur, Chennai.', '/contact'), component: ContactPage });
function ContactPage() { return <div className="inner-page"><PageIntro eyebrow="LET’S CONNECT" title="We’ll Save You a Seat." description="Call us to reserve a table, plan a celebration or confirm today’s opening hours." /><Location /><ReservationCTA /></div>; }
