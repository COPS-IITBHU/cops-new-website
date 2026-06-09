'use client';

import { GiBrain } from 'react-icons/gi';
import { TiCodeOutline } from 'react-icons/ti';
import { PiGraphFill } from 'react-icons/pi';
import { SiCyberdefenders } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Vertical {
  short: string;
  name: string;
  description: string;
  href: string;
  Icon: IconType;
  accent: string;
}

export default function ResourcesPage() {
  const verticals: Vertical[] = [
    {
      short: 'SDG',
      name: 'Software Development Group',
      description:
        'Building full-stack applications, scalable systems, open-source projects, modern web technologies, and software engineering solutions.',
      href: '/verticals/sdg',
      Icon: TiCodeOutline,
      accent: 'text-blue-400',
    },
    {
      short: 'IG',
      name: 'Intelligence Group',
      description:
        'Exploring Artificial Intelligence, Machine Learning, Deep Learning, LLMs, Computer Vision, and cutting-edge research.',
      href: '/verticals/ig',
      Icon: GiBrain,
      accent: 'text-grey-400',
    },
    {
      short: 'CPG',
      name: 'Competitive Programming Group',
      description:
        'Mastering algorithms, data structures, competitive programming, ICPC preparation, and advanced problem-solving.',
      href: '/verticals/cpg',
      Icon: PiGraphFill,
      accent: 'text-yellow-400',
    },
    {
      short: 'INFOSEC',
      name: 'IIT(BHU)CyberSec',
      description:
        'Diving into cybersecurity, ethical hacking, reverse engineering, digital forensics, vulnerability research, and security engineering.',
      href: '/verticals/infosec',
      Icon: SiCyberdefenders,
      accent: 'text-red-400',
    },
  ];

  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      <div className='relative z-20 flex flex-col items-center pt-32 pb-20'>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mb-16 text-center'>
            <h1 className='mb-6'>
              <span className='font-agency-fb bg-linear-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-6xl font-bold text-transparent md:text-7xl'>
                Our Verticals
              </span>
            </h1>

            <p className='mx-auto max-w-3xl text-lg text-gray-300 md:text-xl'>
              Explore the four technical verticals of COPS and discover
              communities focused on development, intelligence, competitive
              programming, and cybersecurity.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {verticals.map((vertical) => {
              const Icon = vertical.Icon;

              return (
                <div
                  key={vertical.short}
                  className='group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]'
                >
                  <div className='absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                  <div className='relative z-10 flex h-full flex-col'>
                    <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5'>
                      <Icon className={`h-10 w-10 ${vertical.accent}`} />
                    </div>

                    <h2 className='font-agency-fb mb-2 text-5xl font-bold text-white'>
                      {vertical.short}
                    </h2>

                    <h3 className='mb-5 text-xl font-semibold text-cyan-300'>
                      {vertical.name}
                    </h3>

                    <p className='mb-8 grow leading-relaxed text-gray-300'>
                      {vertical.description}
                    </p>

                    <a
                      href={vertical.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20'
                    >
                      Visit Website
                      <span className='transition-transform duration-300 group-hover:translate-x-1'>
                        →
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
