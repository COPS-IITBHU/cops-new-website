'use client';

import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
            Our Vision
          </p>

          <h2 className="font-agency-fb mb-10 text-5xl font-bold text-white md:text-6xl">
            Building the Future of AI
          </h2>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-xl md:p-14">

            <p className="text-xl leading-10 text-gray-200">
              We believe that learning Artificial Intelligence is most effective
              through collaboration, curiosity, and continuous exploration.
              Our vision is to cultivate a strong research culture where
              students not only understand cutting-edge technologies but also
              contribute to advancing them.
            </p>

            <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            <p className="text-lg leading-9 text-gray-300">
              Through mentorship, collaborative projects, workshops, and
              research discussions, we empower every member—from beginners to
              experienced developers—to build intelligent systems that solve
              real-world problems and push the boundaries of innovation.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}