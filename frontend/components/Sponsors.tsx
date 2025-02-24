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
    name: 'UM6P-1337 School',
    logo: '/images/sponsors/1337.png',
    website: 'https://1337.ma',
    description: 'Programming School where innovation meets excellence',
    tier: 'gold'
  },
  {
    name: 'Hack The Box',
    logo: '/images/sponsors/HTB.png',
    website: 'https://hackthebox.com',
    description: 'The First Cybersecurity Performance Center, a leader in cybersecurity training for individuals and organizations.',
    tier: 'gold'
  },
  // {
  //   name: 'UM6P',
  //   logo: '/images/sponsors/um6p.png',
  //   website: 'https://www.um6p.ma',
  //   description: 'Mohammed VI Polytechnic University',
  //   tier: 'silver'
  // },
  // Add more sponsors as needed
];

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

        <div className="mt-20 flex justify-center gap-8 flex-wrap">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[280px]"
            >
              <a 
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative group rounded-xl border p-3 transition-all duration-300 hover:scale-[1.05] ${
                  sponsor.tier === 'gold' 
                    ? 'border-yellow-500/50 bg-yellow-500/5 hover:bg-yellow-500/10' 
                    : sponsor.tier === 'silver'
                    ? 'border-gray-400/50 bg-gray-400/5 hover:bg-gray-400/10'
                    : 'border-orange-700/50 bg-orange-700/5 hover:bg-orange-700/10'
                }`}
              >
                <div className="relative w-full aspect-[3/2] max-w-[200px] mx-auto">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}