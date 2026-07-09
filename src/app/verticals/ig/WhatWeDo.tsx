'use client';

import { motion } from 'framer-motion';
import {
  BrainCircuit,
  LaptopMinimal,
  Presentation,
  BookOpen,
} from 'lucide-react';

const activities = [
  {
    title: 'Research',
    description:
      'Explore cutting-edge Machine Learning, Artificial Intelligence, and Deep Learning through guided research and innovative ideas.',
    icon: BrainCircuit,
  },
  {
    title: 'Projects',
    description:
      'Collaborate on real-world AI applications across domains like Computer Vision, NLP, Generative AI, and LLMs.',
    icon: LaptopMinimal,
  },
  {
    title: 'Workshops & Talks',
    description:
      'Learn modern tools, frameworks, and techniques through hands-on workshops and technical sessions conducted by mentors.',
    icon: Presentation,
  },
  {
    title: 'Paper Reading',
    description:
      'Discuss influential research papers together and understand state-of-the-art developments in Artificial Intelligence.',
    icon: BookOpen,
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative py-28">

      {/* Background Glow */}

      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
            What We Do
          </p>

          <h2 className="font-agency-fb text-5xl font-bold text-white md:text-6xl">
            Learn. Build. Research.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Intelligence Group provides an environment where students learn
            together, build impactful projects, and contribute to meaningful
            research in Artificial Intelligence.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {activities.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">

                    <Icon className="h-10 w-10 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />

                  </div>

                  <h3 className="font-agency-fb mb-4 text-4xl text-white">
                    {activity.title}
                  </h3>

                  <p className="leading-8 text-gray-300">
                    {activity.description}
                  </p>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}