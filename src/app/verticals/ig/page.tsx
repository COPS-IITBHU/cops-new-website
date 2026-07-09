import HeroSubsection from '@/components/layout/HeroSubsection';
// import AchievementsSubsection from '@/components/layout/AchievementsSubsection';
// import ProjectsSubsection from '@/components/layout/ProjectsSubsection';
import AboutSection from '@/app/verticals/ig/AboutSection'
import WhatWeDo from '@/app/verticals/ig/WhatWeDo'
import VisionSection from './VisionSection';
import CTASection from './CTASection';
export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSubsection name='IG' />
      {/* <AchievementsSubsection /> */}
      {/* <ProjectsSubsection /> */}
      <AboutSection />
      <WhatWeDo />
      <VisionSection />
      <CTASection />
    </div>
  );
}
