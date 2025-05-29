'use client'
import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import DataVisual from './DesignObjects/DataVisual'

interface HeroBlockProps {
  block?: {
    heading?: string
    subheading?: string
    hero_image?: { url: string }
  }
}

export default function HeroBlock({ block }: HeroBlockProps) {
  // Default values if props are not provided
  const heading = block?.heading || 'Data-Driven Insights for Strategic Business Decisions'
  const subheading =
    block?.subheading ||
    'Transform your raw data into actionable intelligence with our advanced analytics solutions tailored to your business needs.'
  const heroImage = block?.hero_image?.url || '/api/placeholder/1600/900'

  // State to hold the background image load status
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  // Setup intersection observer for scroll animations
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  // Preload the hero image when the component mounts
  useEffect(() => {
    const image = new window.Image()
    image.src = heroImage
    image.onload = () => {
      setIsImageLoaded(true)
    }
  }, [heroImage])

  return (
    <section
      ref={ref}
      className="relative md:min-h-[85vh] overflow-hidden bg-[#041740] py-12 md:py-0"
    >
      {/* Abstract shapes in background */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        {/* Large circle */}
        <motion.div
          className="absolute top-[-15%] right-[-15%] w-[60%] h-[60%] rounded-full bg-[#041740]/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Small circles */}
        <motion.div
          className="absolute top-[65%] left-[10%] w-[10%] h-[10%] rounded-full bg-[#DF0C0C]/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        <motion.div
          className="absolute top-[25%] left-[5%] w-[5%] h-[5%] rounded-full bg-[#041740]/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M200,200 C300,300 700,200 900,400"
            stroke="#041740"
            strokeWidth="1"
            strokeOpacity="0.1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <motion.path
            d="M300,600 C400,500 600,700 800,500"
            stroke="#DF0C0C"
            strokeWidth="1"
            strokeOpacity="0.1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.4 }}
          />
        </svg>
      </div>

      {/* Main content container */}
      <div className="xl:container mx-auto h-full grid grid-cols-1 lg:grid-cols-12 gap-12 px-4 sm:px-6 lg:px-8 pt-24 md:pt-0 md:py-24 lg:py-32 z-10 relative">
        {/* Content area - spans 6 columns on large screens */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Company name with accent */}
            <motion.div
              className="flex items-center mb-6"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="h-2 w-8 bg-[#DF0C0C] mr-3"></div>
              <span className="text-[#DF0C0C] uppercase tracking-wider font-semibold">
                NeoBridge
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              {heading}
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <p className="text-lg mb-8 text-white/70 max-w-2xl leading-relaxed">{subheading}</p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
              }}
            >
              <Link
                href="/solutions"
                className="bg-[#DF0C0C] hover:bg-[#df0c0c] text-white px-6 py-3 rounded-md shadow-sm flex items-center justify-center group transition-all duration-300 w-full sm:w-auto"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact-us"
                className="border-2 border-[#DF0C0C] text-[#DF0C0C] hover:bg-[#041740]/5 px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side visualization - spans 6 columns on large screens */}
        <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.5, duration: 0.8 },
              },
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Abstract data visualization */}
            <DataVisual />

            {/* Floating accent elements */}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#DF0C0C]/50 z-20" />
    </section>
  )
}
