'use client';

import { motion } from 'framer-motion';

import TeamCard from '@/app/verticals/ig/TeamCard';
import { TeamMember } from "@/data/igTeam";

import {
  coordinator,
  mentors,
  coreTeam,
} from '@/data/igTeam';

function Section({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) {
  return (
    <section className="mb-24">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-agency-fb mb-12 text-center text-5xl text-white"
      >
        {title}
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
  {members.map((member, index) => (
    <div
      key={member.id}
      className="w-full md:w-[340px]"
    >
      <TeamCard
        member={member}
        delay={index * 0.1}
      />
    </div>
  ))}
</div>

    </section>
  );
}

export default function TeamPage() {
  return (
    <div className="relative min-h-screen pt-40 pb-24">

      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="mb-24 text-center"
        >
          <p className="mb-3 uppercase tracking-[0.35em] text-cyan-300">
            Intelligence Group
          </p>

          <h1 className="font-agency-fb text-6xl text-white md:text-7xl">
            Meet Our Team
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Passionate students collaborating to build intelligent systems,
            conduct impactful research, and foster a thriving AI community at
            IIT (BHU).
          </p>

        </motion.div>

        <Section
  title="Secretary"
  members={coordinator}
/>

<Section
  title="Joint Secretaries"
  members={mentors}
/>

<Section
  title="Core Team"
  members={coreTeam}
/>

      </div>

    </div>
  );
}