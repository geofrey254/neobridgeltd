'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Users } from 'lucide-react'

interface WhyBlockProps {
  block: {
    heading: string
    description: string
    why_us_photo: { url: string }
  }
}

export default function WhyBlock({ block }: WhyBlockProps) {
  const name = block?.heading || 'Why Choose Vivid Analytics'
  const description =
    block?.description ||
    'We combine technical expertise with business acumen to deliver data solutions that drive growth.'
  const photoUrl = block?.why_us_photo

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="px-4 md:px-8 py-12 md:py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full border-2 border-[#041740]"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 rounded-full border border-[#df0c0c]"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full border border-[#041740]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {/* Text Content - Left Side */}
          <motion.div variants={fadeInLeft} className="lg:w-1/2 lg:pr-8">
            {/* Section Label */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#df0c0c]/10 px-4 py-2 rounded-full mb-6"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-[#df0c0c] rounded-full"></div>
              <span className="text-[#df0c0c] font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#041740] mb-6 leading-tight"
              variants={fadeInUp}
            >
              {name}
            </motion.h2>

            {/* Decorative line */}
            <motion.div className="flex items-center gap-4 mb-8" variants={fadeInUp}>
              <div className="h-1 w-16 bg-[#df0c0c] rounded-full"></div>
              <div className="h-1 w-8 bg-[#041740] rounded-full"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-4 md:mb-10 md:text-justify"
              variants={fadeInUp}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            variants={fadeInRight}
            className="lg:w-1/2 lg:pl-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              {photoUrl ? (
                <div className="relative group">
                  {/* Background decorative shapes */}

                  <div className="absolute -bottom-8 -left-8 w-full h-full bg-[#df0c0c]/10 rounded-3xl transform -rotate-3 transition-transform duration-500 group-hover:-rotate-6"></div>

                  {/* Main image container */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white p-4">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={photoUrl.url}
                        alt="Why choose us"
                        width={600}
                        height={500}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#041740]/20 via-transparent to-[#df0c0c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Corner accent */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-[#df0c0c] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border-l-4 border-[#df0c0c]"
                    animate={{ y: isHovered ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  <motion.div
                    className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border-l-4 border-[#041740]"
                    animate={{ y: isHovered ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              ) : (
                <div className="relative group">
                  {/* Background decorative shapes */}
                  <div className="absolute -top-8 -right-8 w-full h-full bg-[#041740]/10 rounded-3xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
                  <div className="absolute -bottom-8 -left-8 w-full h-full bg-[#df0c0c]/10 rounded-3xl transform -rotate-3 transition-transform duration-500 group-hover:-rotate-6"></div>

                  {/* Placeholder */}
                  <div className="relative h-96 bg-gradient-to-br from-[#041740]/20 to-[#df0c0c]/20 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-16 h-16 text-[#041740] mx-auto mb-4" />
                      <p className="text-[#041740] font-semibold">Your Image Here</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
