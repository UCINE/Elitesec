'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Sponsor {
  name: string;
  logo: string;
  website: string;
  description: string;
  tier: 'gold' | 'silver' | 'bronze';
}

const sponsors: Sponsor[] = [
  {
    name: '1337 School',
    logo: '/images/sponsors/1337.png',
    website: 'https://1337.ma',
    description: 'Programming School where innovation meets excellence',
    tier: 'gold'
  },
  {
    name: 'UM6P',
    logo: '/images/sponsors/um6p.png',
    website: 'https://www.um6p.ma',
    description: 'Mohammed VI Polytechnic University',
    tier: 'silver'
  },
  // Add more sponsors as needed
];

const tierStyles = {
  gold: 'bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border-yellow-500/20',
  silver: 'bg-gradient-to-r from-gray-400/10 to-gray-400/5 border-gray-400/20',
  bronze: 'bg-gradient-to-r from-orange-800/10 to-orange-800/5 border-orange-800/20'
};

export default function Sponsors() {
  return (
    <section className="bg-black py-24" id="sponsors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Our Sponsors
            <span className="text-red-500">.</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Thanks to our amazing sponsors who support our mission in cybersecurity education and community building.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative group rounded-xl border p-8 transition-all duration-300 hover:scale-[1.02] ${tierStyles[sponsor.tier]}`}
              >
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 overflow-hidden rounded-lg bg-zinc-900/50">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-red-500 transition-colors">
                      {sponsor.name}
                    </h3>
                    <p className="mt-2 text-zinc-400">
                      {sponsor.description}
                    </p>
                    <div className="mt-3">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize
                        ${sponsor.tier === 'gold' ? 'bg-yellow-500/10 text-yellow-500' : 
                          sponsor.tier === 'silver' ? 'bg-gray-400/10 text-gray-400' : 
                          'bg-orange-800/10 text-orange-800'}`}>
                        {sponsor.tier} Sponsor
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}