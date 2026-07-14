'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24">

      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-white/5 p-12 text-center backdrop-blur-xl"
        >

          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
            Join Our Community
          </p>

          <h2 className="font-agency-fb text-5xl font-bold text-white">
            Meet the Minds Behind IG
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Behind every project, workshop, and research discussion is a team
            of passionate students working together to shape the future of
            Artificial Intelligence at IIT (BHU).
          </p>

          <Link
            href="/verticals/ig/team"
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-8 py-4 text-lg text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20"
          >
            Meet Our Team

            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}