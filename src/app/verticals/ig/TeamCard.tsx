'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TeamMember } from '@/data/igTeam';

interface Props {
  member: TeamMember;
  delay?: number;
}

export default function TeamCard({ member, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">

        <div className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-2xl border-2 border-cyan-400/30">

          <Image
            src={member.image}
            alt={member.name}
            width={176}
            height={176}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

        <h3 className="text-3xl font-bold text-white">
          {member.name}
        </h3>

        <p className="mt-2 text-cyan-300">
          {member.role}
        </p>

        <p className="mt-3 text-sm text-gray-400">
          {member.email}
        </p>

      </div>
    </motion.div>
  );
}