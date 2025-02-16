"use client"; // This is a client component 👈🏽

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FlagIcon } from '@heroicons/react/24/outline';

export default function Header() {
    return (
      <main className="relative">
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
                Elite<span className="text-red-700">S</span>ec <br />
              </motion.h1>
              <div className="grid gap-1 items-center">
                <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-2 right-1 sm:right-2 md:right-3 lg:right-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.55,
                      duration: 0.55,
                      ease: [0.075, 0.82, 0.965, 1],
                    }}
                    >
                    <div className="flex items-center gap-1">
                      <a
                        className="pointer-events-none lg:pointer-events-auto"
                        href="https://github.com/thelitesecurity"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg 
                          className="h-6 w-6 text-white hover:text-red-700"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        className="pointer-events-none lg:pointer-events-auto"
                        href="https://ctf.elites3c.club"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FlagIcon className="h-6 w-6 text-white hover:text-red-700" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    )
}