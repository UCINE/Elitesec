'use client';

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  date: string;
  description: string;
  content?: React.ReactNode;
}

const TimelineContent = ({ date, description, link }: { 
  date: string; 
  description: string;
  link?: string;
}) => (
  <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-red-500/50 transition-colors duration-300">
    <span className="text-red-500 font-mono">{date}</span>
    <p className="text-zinc-400 mt-4">{description}</p>
    {link && (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-red-500 hover:text-red-400 transition-colors duration-300"
      >
        Learn more →
      </a>
    )}
  </div>
);

const timelineData: TimelineEntry[] = [
  {
    title: "CTF Competition",
    date: "December 2023",
    description: "Organized a Capture The Flag competition focusing on web security, cryptography, and reverse engineering. Over 100 participants from different universities joined the competition.",
    content: <TimelineContent 
      date="December 2023"
      description="Organized a Capture The Flag competition focusing on web security, cryptography, and reverse engineering. Over 100 participants from different universities joined the competition."
      link="https://ctf.elites3c.club"
    />
  },
  {
    title: "Workshop Series",
    date: "January 2024",
    description: "Launched a series of hands-on workshops covering essential cybersecurity topics and practical defense techniques.",
    content: <TimelineContent 
      date="January 2024"
      description="Launched a series of hands-on workshops covering essential cybersecurity topics and practical defense techniques."
    />
  },
  // Add more events here
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="w-full bg-black" ref={containerRef} id="events">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.h2 
          className="text-4xl font-bold text-white sm:text-5xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>
        <motion.p 
          className="text-zinc-400 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Discover the exciting events and milestones in our cybersecurity journey.
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-zinc-900 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-red-500/50 border-2 border-red-500" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-zinc-700">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-zinc-700">
                {item.title}
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {item.content}
              </motion.div>
            </div>
          </div>
        ))}
        
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-zinc-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-500 via-red-500/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}