'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Lahoucine Hamouni",
    role: "Club Leader",
    image: "/team/omar.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Mohsine El Hadaoui",
    role: "Technical Staff",
    image: "/team/jalal.jpg",
    socials: {
      github: "https://github.com/m0hs1ne",
      linkedin: "https://linkedin.com/in/jalalbellamine"
    }
  },
  {
    name: "Hamza Talhaoui",
    role: "Communication Manager",
    image: "/images/team/Hamza.png",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Boubker Ahbibe",
    role: "General Staff",
    image: "/team/mohsine.jpg",
    socials: {
      github: "https://github.com",
      // linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Amine Essadik",
    role: "General Staff",
    image: "/team/jalal.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Abdelilah Benlahbib",
    role: "General Staff",
    image: "/team/omar.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Mouad El Fargoul",
    role: "General Staff",
    image: "/team/jalal.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Marouane Benchieck",
    role: "Advisor",
    image: "/team/mohsine.jpg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },

];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Convert coordinates to -1 to 1 range
    const xPos = (mouseX / width - 0.5) * 2;
    const yPos = (mouseY / height - 0.5) * 2;

    x.set(xPos * 10); // Multiply for stronger effect
    y.set(yPos * 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative group perspective-1000" style={{ zIndex: 20 }}>
      <motion.div
        ref={ref}
        className="relative w-full bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800"
        style={{
          transformStyle: "preserve-3d",
          rotateX: xSpring,
          rotateY: ySpring,
          isolation: "isolate", // Creates a new stacking context
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
      >
        <Spotlight
          className="opacity-0 group-hover:opacity-100"
          size={300}
          springOptions={{ bounce: 0, damping: 15, stiffness: 150 }}
        />
        <div style={{ transform: "translateZ(50px)" }}>
          <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-zinc-800">
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
            <p className="text-red-500 mb-4 font-medium">{member.role}</p>
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
      </motion.div>
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
