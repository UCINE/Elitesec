"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";



export default function Header() {
    return (
      <main className="relative">
        <div className="backd"></div>
        <div className="">
          <div className="flex flex-col justify-center nx-font-mono py-20 sm:py-20 md:py-32 lg:py-40 xl:py-80 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">

          <AnimatePresence >
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.15,
                  duration: 0.95,
                  ease: [0.165, 0.84, 0.44, 1],
                }}

                className="relative md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[130px] font-inter text-white leading-[0.9] tracking-[-2px] z-[100]"
                >
                The Elites&apos; <br />
                Security 
                <span className="font-inter text-red-600">.</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.15,
                  duration: 0.95,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                className="flex flex-row justify-center sm:mb-2 z-20 mx-0 mb-2 mt-8 md:mt-0 md:mb-[35px] lg:mb-[30px] max-w-2xl md:space-x-8"
                >
                <div className="w-1/2">
                  <h2 className="flex items-center font-semibold text-[1em] text-white">
                    Platform
                  </h2>
                  <p className="text-[14px] leading-[20px] text-white font-normal">
                    Full access to our platform, including all questions and
                    solutions.
                  </p>
                </div>
                <div className="w-1/2">
                  <h2 className="flex items-center font-semibold text-[1em] text-white">
                    Community
                  </h2>
                  <p className="text-[14px] leading-[20px] text-white font-normal">
                    Join a community of like-minded individuals, and learn from each
                    other.
                  </p>
                </div>
              </motion.div>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 items-center ...">                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                  delay: 0.65,
                    duration: 0.55,
                    ease: [0.075, 0.82, 0.965, 1],
                  }}
                  >
                  <Link
                    href="http://localhost:3000/auth/42"
                    className="content-center group rounded-md px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A]"
                    style={{
                    boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                    }}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="28" height="28" aria-hidden="true" viewBox="50 -200 960 960"><path d="M32 412.6h330.1V578h164.7V279.1H197.3L526.8-51.1H362.1L32 279.1zM597.9 114.2L762.7-51.1H597.9zM762.7 114.2L597.9 279.1v164.8h164.8V279.1L928 114.2V-51.1H762.7z"></path><path d="M928 279.1L762.7 443.9H928z"></path></svg>
                    <p>Continue With Intra</p>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                  delay: 0.65,
                    duration: 0.55,
                    ease: [0.075, 0.82, 0.965, 1],
                  }}
                  >
                  <Link
                    href="http://localhost:3000/auth/google"
                    className="content-center group rounded-md px-2 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A]"
                    style={{
                    boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
                    }}
                    >
                    <svg
                      width="28" height="28"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                      >
                      <path
                        fillRule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>Continue With Google</p>
                  </Link>
                </motion.div>
                <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 lg:bottom-3 right-2 sm:right-4 md:right-8 lg:right-16">                  <motion.div

                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                    delay: 0.55,
                      duration: 0.55,
                      ease: [0.075, 0.82, 0.965, 1],
                    }}
                    >
                    <a
                      className="pointer-events-none flex place-items-baseline gap-2 p-2 lg:pointer-events-auto lg:p-0"
                      href="https://github.com/thelitesecurity"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      {" "}
                      <Image
                        src="/svg/github-logo.svg"
                        alt="Github Logo"
                        className="invert"
                        width={100}
                        height={40}
                        priority={true}
                      />
                    </a>
                  </motion.div>

                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    )
}