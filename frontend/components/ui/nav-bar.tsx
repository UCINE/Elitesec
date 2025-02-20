"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, Users, Calendar, Image, Mail } from "lucide-react"

interface NavItem {
  name: string
  url: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  {
    name: "About",
    url: "#about",
    icon: Users
  },
  {
    name: "Timeline",
    url: "#events",
    icon: Calendar
  },
  // {
  //   name: "Gallery",
  //   url: "#gallery",
  //   icon: Image
  // },
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
  const [activeTab, setActiveTab] = useState("About") // Changed from navItems[0].name
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      const sections = navItems
        .map(item => ({
          name: item.name,
          element: document.querySelector(item.url) as HTMLElement
        }))
        .filter(section => section.element)

      const viewportHeight = window.innerHeight
      const scrollTop = window.scrollY

      // Find the section that takes up most of the viewport
      let maxVisibleSection = sections[0]
      let maxVisibleHeight = 0

      sections.forEach(section => {
        const rect = section.element.getBoundingClientRect()
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight
          maxVisibleSection = section
        }
      })

      if (maxVisibleSection) {
        setActiveTab(maxVisibleSection.name)
      }
    }

    handleResize()
    handleScroll() // Initial check
    
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault()
    setActiveTab(item.name)
    
    const element = document.querySelector(item.url)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[100] mb-6 sm:pt-6 pointer-events-none">
      <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
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
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-red-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-500 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-red-500/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-red-500/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-red-500/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}