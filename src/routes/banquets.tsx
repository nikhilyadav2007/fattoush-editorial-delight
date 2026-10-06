import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, BanquetSection, ExperienceFeatures, ReservationCTA } from '@/components/restaurant/sections';
import { pageHead } from '@/data/restaurant';
export const Route = createFileRoute('/banquets')({ head: () => pageHead('Banquets & Celebrations | Fattoush Chennai', 'Enquire about family gatherings, birthdays, corporate events and private celebrations at Fattoush Restaurant & Banquet.', '/banquets'), component: BanquetsPage });
function BanquetsPage() { return <div className="inner-page"><PageIntro eyebrow="CELEBRATE AT FATTOUSH" title="Together Is a Beautiful Place." description="Your occasion deserves a table filled with flavour and the people you love." /><BanquetSection /><ExperienceFeatures /><ReservationCTA /></div>; }
