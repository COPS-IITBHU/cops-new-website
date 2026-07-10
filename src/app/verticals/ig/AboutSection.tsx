'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative py-24">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* ---------------- Welcome ---------------- */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
            Welcome
          </p>

          <h2 className="font-agency-fb text-5xl font-bold text-white md:text-6xl">
            Welcome to the
            <br />
            COPS Intelligence Group
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Exploring Artificial Intelligence, Machine Learning,
            Deep Learning, Computer Vision, Large Language Models,
            and building the next generation of intelligent systems.
          </p>
        </motion.div>

        {/* ---------------- Who We Are ---------------- */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-10 md:p-14 shadow-2xl backdrop-blur-xl"
        >
          {/* Hover Glow */}

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10">

            <div className="mb-10 flex items-center gap-4">

              <div className="h-px flex-1 bg-cyan-400/30" />

              <span className="font-agency-fb text-3xl text-cyan-300">
                WHO WE ARE
              </span>

              <div className="h-px flex-1 bg-cyan-400/30" />

            </div>

            <div className="space-y-8 text-lg leading-9 text-gray-300">

              <p>
                We are the{' '}
                <span className="font-semibold text-cyan-300">
                  Intelligence Group (IG)
                </span>{' '}
                of the <span className="text-white">Club of Programmers</span>,
                IIT (BHU) Varanasi. We aim to foster a vibrant culture of
                Artificial Intelligence and Machine Learning by encouraging
                students to explore challenging ideas, solve real-world
                problems, and contribute to impactful research.
              </p>

              <p>
                Our members actively work on projects spanning Computer Vision,
                Natural Language Processing, Reinforcement Learning, Generative
                AI, and Large Language Models. Over the years, members of the
                group have also contributed to several research publications,
                demonstrating the club's commitment to both innovation and
                academic excellence.
              </p>

              <p>
                More than just a technical community, IG is a collaborative
                learning environment where freshers and experienced mentors work
                together, exchange ideas, and grow through projects, workshops,
                technical talks, and research discussions.
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}