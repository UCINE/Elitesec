'use client';

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from 'next/image';
import { useInView } from 'framer-motion';

interface TimelineEntry {
  title: string;
  date: string;
  description: string;
  content?: React.ReactNode;
  images?: {
    src: string;
    alt: string;
  }[];
}

const TimelineContent = ({ 
  date, 
  description, 
  link,
  images 
}: { 
  date: string; 
  description: string;
  link?: string;
  images?: {
    src: string;
    alt: string;
  }[];
}) => (
  <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-red-500/50 transition-colors duration-300">
    <span className="text-red-500 font-mono">{date}</span>
    <p className="text-zinc-400 mt-4">{description}</p>
    
    {images && images.length > 0 && (
      <div className="grid grid-cols-2 gap-4 mt-6">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxODE4MWIiLz48L3N2Zz4="
            />
          </div>
        ))}
      </div>
    )}

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
    title: "Cyber Week",
    date: "November 2023",
    description: "Hosted a week-long event featuring cybersecurity workshops, CTF competitions, and guest talks from industry professionals.",
    content: <TimelineContent 
      date="November 2023"
      description="Hosted a week-long event featuring cybersecurity workshops, CTF competitions, and guest talks from industry professionals."
      images={[
        {
          src: "/images/events/Cyber_week-1.jpg", // Update with your image path
          alt: "Cyber Week Event Photo 1"
        },
        {
          src: "/images/events/Cyber_week-2.jpg", // Update with your image path
          alt: "Cyber Week Event Photo 2"
        }
      ]}
    />
  },
  {
    title: "HTB Meetup for Universities",
    date: "8-9th June 2024",
    description: "First ever Hack The Box meetup for universities in Morocco, featuring workshops, CTF competitions, and networking opportunities.",
    content: <TimelineContent 
      date="8-9th June 2024"
      description="First ever Hack The Box meetup for universities in Morocco, featuring workshops, CTF competitions, and networking opportunities."
      images={[
        {
          src: "/images/events/Meetup-1.jpeg", // Update with your image path
          alt: "Meetup Event Photo 1"
        },
        {
          src: "/images/events/Meetup-2.jpeg", // Update with your image path
          alt: "Meetup Event Photo 2"
        }
      ]}
    />
  },

  {
    title: "Cybersecurity event for UM6P-CS Students",
    date: "October 2024",
    description: "Introduction to cybersecurity for UM6P Computer Science students,Day one included a talks Cybersecurity 101 giving them a solid foundation in the field. On the second day, they took part in a guided CTF competition to practice their skills.",
    content: <TimelineContent 
      date="October 2024"
      description="Introduction to cybersecurity for UM6P Computer Science students,Day one included a talk Cybersecurity 101 giving them a solid foundation in the field. On the second day, they took part in a guided CTF competition to practice their skills."
      images={[
        {
          src: "/images/events/CS-1.jpg", // Update with your image path
          alt: "CS Event Photo 1"
        },
        {
          src: "/images/events/CS-2.jpg", // Update with your image path
          alt: "CS Event Photo 2"
        }
      ]}
    />
  },

  {
    title: "Cybersecurity event for Euro-Med University",
    date: "December 2024",
    description: "In this unforgettable two-day event, we partnered with SparkSec Club from UEMF University in Fes to bring together experts and enthusiasts. On the first day, we hosted a series of insightful conferences and talks covering the latest trends in cybersecurity. The second day featured an engaging Capture the Flag (CTF) competition organized by our club, offering participants a hands-on challenge to test their skills and ingenuity.",
    content: <TimelineContent 
      date="December 2024"
      description="In this two-day event, we partnered with SpekSec Club from UEMF University in Fes to bring together experts and enthusiasts. On the first day, we hosted a series of insightful conferences and talks covering the latest trends in cybersecurity. The second day featured an engaging Capture the Flag (CTF) competition organized by our club, offering participants a hands-on challenge to test their skills and ingenuity."
      images={[
        {
          src: "/images/events/sparksec-1.jpeg", // Update with your image path
          alt: "Sparksec Event Photo 1"
        },
        {
          src: "/images/events/sparksec-2.jpg", // Update with your image path
          alt: "Sparksec Event Photo 2"
        }
      ]}
    />
  },

  {
    title: "Cybersecurity Hackathon in Tata",
    date: "December 2024",
    description: "From December 19 to 21, EliteSec partnered with TataConnect to host a three-day cybersecurity hackathon in Tata. During the first two days, we conducted a series of talks and workshops for TataConnect students, covering essential cybersecurity skills and tools. On the final day, participants put their knowledge to the test in a thrilling Capture the Flag (CTF) competition. This event fostered a dynamic learning environment and helped build a vibrant cybersecurity community in the region.",
    content: <TimelineContent 
      date="December 2024"
      description="From December 19 to 21, EliteSec partnered with TataConnect to host a three-day cybersecurity hackathon in Tata. During the first two days, we conducted workshops for TataConnect students, covering essential cybersecurity skills and tools. On the final day, participants put their knowledge to the test in a thrilling Capture the Flag (CTF) competition. This event fostered a dynamic learning environment and helped build a vibrant cybersecurity community in the region."
      images={[
        {
          src: "/images/events/tata-1.jpeg", // Update with your image path
          alt: "Tata Event Photo 1"
        },
        {
          src: "/images/events/tata-2.jpeg", // Update with your image path
          alt: "Tata Event Photo 2"
        }
      ]}
    />
  },

  {
    title: "HTB Meetup for ENSA Agadir",
    date: "February 2025",
    description: "Hosted a cybersecurity workshop for ENSA Agadir students, where we introduced students to the fundamentals of cybersecurity and ethical hacking. The workshop included hands-on exercises and a Capture the Flag (CTF) competition to help students apply their newfound knowledge using Hack The Box dedecated labs.",
    content: <TimelineContent 
      date="February 2025"
      description="Hosted a cybersecurity workshop for ENSA Agadir students, where we introduced students to the fundamentals of cybersecurity and ethical hacking. The workshop included hands-on exercises and a Capture the Flag (CTF) competition to help students apply their newfound knowledge using Hack The Box dedecated labs."
      images={[
        {
          src: "/images/events/Ensa-1.jpg", // Update with your image path
          alt: "Ensa Event Photo 1"
        },
        {
          src: "/images/events/Ensa-2.jpg", // Update with your image path
          alt: "Ensa Event Photo 2"
        }
      ]}
    />
  },

];

const TimelineEntry = ({ 
  item, 
  index, 
  activeIndex, 
  onInView 
}: { 
  item: TimelineEntry;
  index: number;
  activeIndex: number | null;
  onInView: (index: number) => void;
}) => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView(index);
    }
  }, [isInView, index, onInView]);

  return (
    <div
      key={index}
      className="flex justify-start pt-6 sm:pt-10 md:pt-40 md:gap-10"
      ref={titleRef}
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-8 sm:h-10 absolute left-3 md:left-3 w-8 sm:w-10 rounded-full bg-zinc-900 flex items-center justify-center">
          <div className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full ${
            activeIndex === index 
              ? 'bg-red-500 border-2 border-red-500' 
              : 'bg-red-500/50 border-2 border-red-500'
          }`} />
        </div>
        <h3 className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-colors duration-300 ${
          activeIndex === index ? 'text-red-500' : 'text-zinc-700'
        }`}>
          {item.title}
        </h3>
      </div>

      <div className="relative pl-16 sm:pl-20 pr-4 md:pl-4 w-full">
        <h3 className={`md:hidden block text-xl sm:text-2xl mb-3 sm:mb-4 text-left font-bold transition-colors duration-300 ${
          activeIndex === index ? 'text-red-500' : 'text-zinc-700'
        }`}>
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
  );
};

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const handleInView = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="w-full bg-black pb-10 sm:pb-0" ref={containerRef} id="events">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.h2 
          className="text-4xl font-bold text-white sm:text-5xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Most Impactful Events Across Morocco.
          <span className="text-red-500">.</span>
        </motion.h2>
        <motion.p 
          className="text-zinc-400 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Discover the exciting events and milestones in our cybersecurity journey in Morocco.
        </motion.p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 sm:pb-20">
        {timelineData.map((item, index) => (
          <TimelineEntry
            key={item.title}
            item={item}
            index={index}
            activeIndex={activeIndex}
            onInView={handleInView}
          />
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