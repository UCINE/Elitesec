"use client"

import React, { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { 
  HeartHandshake, 
  Users, 
  Calendar, 
  Mail, 
  Shield, 
  BookOpen, 
  ChevronUp,
  Menu,
  X
} from "lucide-react"
import { debounce } from "lodash" // Add lodash to your dependencies if not already installed

interface NavItem {
  name: string
  url: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  {
    name: "About",
    url: "#about",
    icon: Shield
  },
  {
    name: "Timeline",
    url: "#events",
    icon: Calendar
  },
  {
    name: "Blog",
    url: "#blog",
    icon: BookOpen
  },
  {
    name: "Sponsors",
    url: "#sponsors",
    icon: HeartHandshake
  },
  {
    name: "Team",
    url: "#team",
    icon: Users
  },
  {
    name: "Contact",
    url: "#contact",
    icon: Mail
  }
]

export function NavBar() {
  const [activeTab, setActiveTab] = useState("About")
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false) // New state to control navbar visibility
  
  // Fix for ESLint warning - use inline function and proper dependencies
  const handleScroll = useCallback(() => {
    const debouncedHandler = debounce(() => {
      // Set scrolled state for visual effects
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)
      
      // Check if we've scrolled to or past the About section
      const aboutSection = document.querySelector("#about") as HTMLElement
      if (aboutSection) {
        const aboutPosition = aboutSection.getBoundingClientRect().top + window.scrollY
        // Show navbar when we've reached the about section
        setShowNavbar(currentScrollY >= aboutPosition - window.innerHeight/2)
      }
      
      // Update active tab based on visible sections
      const sections = navItems
        .map(item => ({
          name: item.name,
          element: document.querySelector(item.url) as HTMLElement
        }))
        .filter(section => section.element)

      // Find the most visible section
      let maxVisibleSection = sections[0]
      let maxVisibleHeight = 0

      sections.forEach(section => {
        const rect = section.element.getBoundingClientRect()
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
        
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight
          maxVisibleSection = section
        }
      })

      if (maxVisibleSection) {
        setActiveTab(maxVisibleSection.name)
      }
    }, 100)
    
    return debouncedHandler
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    
    handleResize()
    const scrollHandler = handleScroll()
    scrollHandler() // Initial check
    
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", scrollHandler, { passive: true })
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", scrollHandler)
      scrollHandler.cancel() // Cancel any pending debounce
    }
  }, [handleScroll])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault()
    setActiveTab(item.name)
    setMobileMenuOpen(false)
    
    const element = document.querySelector(item.url)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Desktop & Tablet Nav - Only shown after About section is reached */}
      <AnimatePresence>
        {showNavbar && (
          <motion.nav 
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] hidden md:block pointer-events-none"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="navigation"
            aria-label="Main navigation"
          >
            <div 
              className={cn(
                "flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto",
                // Fix for TypeScript error - use ternary instead of logical AND
                scrolled ? "bg-zinc-900/70 border-zinc-800/70" : ""
              )}
            >
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={(e) => handleClick(e, item)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                      "text-zinc-400 hover:text-red-500",
                      isActive ? "text-red-500" : ""
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} strokeWidth={2.5} />
                      <span>{item.name}</span>
                    </span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="desktop-lamp"
                        className="absolute inset-0 w-full bg-red-500/10 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Nav - Only shown after About section is reached */}
      <AnimatePresence>
        {showNavbar && (
          <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] pointer-events-none">
            <motion.div 
              className="flex flex-col items-center mb-4 mx-4 pointer-events-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full shadow-lg z-20"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileMenuOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                  </motion.div>
                </AnimatePresence>
              </button>

              {/* Current Section Label */}
              <AnimatePresence>
                {!mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-zinc-900/80 backdrop-blur-md px-4 py-1 rounded-full text-sm text-red-500 font-medium shadow-lg mt-2"
                  >
                    {activeTab}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    id="mobile-menu"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-zinc-900/95 backdrop-blur-lg border border-zinc-800 rounded-2xl p-4 shadow-xl w-full max-w-xs mb-4"
                  >
                    <div className="grid grid-cols-3 gap-2">
                      {navItems.map((item) => {
                        const Icon = item.icon
                        const isActive = activeTab === item.name

                        return (
                          <Link
                            key={item.name}
                            href={item.url}
                            onClick={(e) => handleClick(e, item)}
                            className={cn(
                              "flex flex-col items-center justify-center p-3 rounded-xl transition-all",
                              isActive ? "bg-red-500/10 text-red-500" : "text-zinc-400 hover:bg-zinc-800"
                            )}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <Icon size={24} strokeWidth={2} />
                            <span className="text-xs mt-1">{item.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Back to top button - shows when scrolled (modified to work better on mobile) */}
      <AnimatePresence>
        {scrolled && showNavbar && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-[200] bg-red-500 hover:bg-red-600 text-white p-3 md:p-2 rounded-full shadow-lg"
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            onTouchStart={(e) => e.currentTarget.click()} // Force click on touch start for better mobile response
          >
            <ChevronUp size={24} className="md:w-5 md:h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}