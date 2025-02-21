'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  username: string;
  socials: {
    github?: string;
    linkedin?: string;
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Lahoucine Hamouni",
    username: "UCINE",
    role: "Club Leader",
    image: "/images/team/Lahoucine.jpg",
    socials: {
      github: "https://github.com/UCINE",
      linkedin: "https://www.linkedin.com/in/ucine/"
    }
  },
  {
    name: "Mohsine El Hadaoui",
    username: "m0hs1ne",
    role: "Technical Staff",
    image: "/images/team/Mohsine.jpeg",
    socials: {
      github: "https://github.com/m0hs1ne",
      linkedin: "https://linkedin.com/in/mohsine-el-hadaoui"
    }
  },
  {
    name: "Hamza Talhaoui",
    username: "Hamza",
    role: "Communication Manager",
    image: "/images/team/Hamza.png",
    socials: {
      github: "https://github.com/hatalhao",
      linkedin: "www.linkedin.com/in/hamza-talhaoui-408959158"
    }
  },
  {
    name: "Boubker Ahbibe",
    username: "Bob",
    role: "General Staff",
    image: "/images/team/Bob.jpg",
    socials: {
      // github: "https://github.com",
      // linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Amine Essadiki",
    username: "Czar",
    role: "General Staff",
    image: "/images/team/Amine.jpg",
    socials: {
      // github: "https://github.com",
      // linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Marouane Benchiekh",
    username: "Mabenchi",
    role: "Advisor",
    image: "/images/team/Marouane.jpg",
    socials: {
      github: "https://github.com/Mabenchi",
      linkedin: "https://www.linkedin.com/in/marouane-benchiekh"
    }
  },

];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="relative group">
      <div className="relative w-full h-[400px] bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-semibold text-white mb-2">
              {member.name.split(' ').map((part, index, array) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span>{part}</span>
                  {index === 0 && "'"}
                </React.Fragment>
              ))}
              <span className="text-red-500">.</span>
            </div>
            <span className="text-zinc-400 text-sm mb-1 font-mono tracking-wider bg-zinc-800/50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {member.username}
            </span>
            <span className="text-red-500 mb-3 font-medium">
              {member.role}
            </span>
            <div className="flex justify-center gap-4">
              {member.socials.github && (
                <a 
                  href={member.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-red-500 transition-colors"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              )}
              {member.socials.linkedin && (
                <a 
                  href={member.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-red-500 transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <section className="bg-black py-24" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-4xl font-bold text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Team
            <span className="text-red-500">.</span>
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A dedicated team of cybersecurity enthusiasts working to make the digital world safer.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
