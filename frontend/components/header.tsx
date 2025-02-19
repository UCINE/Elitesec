"use client"; // This is a client component 👈🏽

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FlagIcon } from '@heroicons/react/24/outline';

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
          </div>
        </div>
      </main>
    )
}