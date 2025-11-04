"use client"; // This is a client component 👈🏽

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon, FlagIcon } from '@heroicons/react/24/outline';

export default function Header() {
    return (
      <main className="relative" id="home">
        <div className="backd"></div>
        <div className="">
          <div className="flex flex-col justify-center nx-font-mono py-5 sm:py-5 md:py-8 lg:py-10 xl:py-20 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">

          <AnimatePresence >
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.15,
                  duration: 0.95,
                  ease: [0.165, 0.84, 0.44, 1],
                }}

                className="relative md:ml-[-5px] md:mb-[10px] font-extrabold text-[8vw] md:text-[60px] font-inter text-white leading-[0.9] tracking-[-2px] z-[100]"
                >
                The Elites&apos; <br />
                Security 
                <span className="font-inter text-red-600">.</span>
              </motion.h1>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed"
            >
              We are a student-led cybersecurity collective empowering learners across Morocco with
              hands-on labs, expert mentorship, and a welcoming community that thrives on curiosity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-red-500 to-red-400 px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_45px_-15px_rgba(244,63,94,0.8)] transition duration-200 hover:from-red-400 hover:to-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
              >
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  Join the Club
                </span>
                <FlagIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#events"
                className="group inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-white/5 px-7 py-3 text-sm font-semibold text-red-200 transition duration-200 hover:border-red-400 hover:text-white hover:bg-red-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
              >
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  Explore Events
                </span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    )
}