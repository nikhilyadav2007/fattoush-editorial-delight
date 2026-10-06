import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, StorySection, GrillSection, ExperienceFeatures, ReservationCTA } from '@/components/restaurant/sections';
import { pageHead } from '@/data/restaurant';
export const Route = createFileRoute('/story')({ head: () => pageHead('Our Story | Fattoush Restaurant & Banquet', 'Middle Eastern warmth, a world of flavours and welcoming hospitality at Fattoush in Chennai.', '/story'), component: Story });
function Story() { return <div className="inner-page"><PageIntro eyebrow="THE FATTOUSH EXPERIENCE" title="A Table. A Story. A Connection." description="Middle Eastern flavours. A world of cuisines. One warm welcome." /><StorySection /><GrillSection /><ExperienceFeatures /><ReservationCTA /></div>; }
