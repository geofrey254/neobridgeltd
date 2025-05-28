'use client'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'
import { Users, BarChart2, ChevronRight, TrendingUp, Award, Target } from 'lucide-react'

interface AboutUsBlockProps {
  block: {
    heading: string
    description: string
    experience?: number
    clients?: number
    about_photo: { url: string }
  }
}

export default function HeroAboutSection({ block }: AboutUsBlockProps) {
  const heading = block?.heading || 'Data-Driven Excellence'
  const description =
    block?.description ||
    'Transforming complex data landscapes into clear, actionable insights that propel your business forward with confidence and precision.'
  const experience = block.experience || 12
  const clients = block.clients || 20
  const photos = block.about_photo

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      className="relative py-24 bg-gradient-to-br from-white via-[#041740]/5 to-white overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#df0c0c]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#041740]/5 rounded-full blur-3xl"></div>

        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-[#df0c0c]/20 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#041740]/10 rotate-12 rounded-lg"></div>
      </div>

      <div className="relative z-10 xl:container mx-auto px-4 md:px-16 xl:px-4">
        <motion.div
          className="flex flex-col lg:flex-row gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {/* Images Column */}
          <motion.div variants={fadeInLeft} className="lg:w-6/12">
            <div className="relative">
              <motion.div variants={scaleIn}>
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041740]/20 to-transparent z-10"></div>
                  <Image
                    src={photos.url}
                    alt="Team member"
                    width={350}
                    height={450}
                    className="object-cover w-full h-full aspect-[3/4] transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Floating badge */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg border-2 border-[#df0c0c]">
                    <Award className="h-6 w-6 text-[#df0c0c]" />
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                variants={scaleIn}
              >
                <div className="bg-gradient-to-r from-[#df0c0c] to-[#041740] rounded-full p-6 shadow-2xl">
                  <div className="text-center">
                    <span className="text-white font-bold text-3xl block">{experience}+</span>
                    <span className="text-white/90 text-sm font-medium">Years</span>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {/* Experience Badge */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
                  variants={scaleIn}
                >
                  <div className="bg-gradient-to-r from-[#df0c0c] to-[#041740] rounded-full p-6 shadow-2xl">
                    <div className="text-center">
                      <span className="text-white font-bold text-3xl block">{experience}+</span>
                      <span className="text-white/90 text-sm font-medium">Years</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div variants={fadeInRight} className="lg:w-9/12">
            <div className="flex flex-col max-w-2xl">
              {/* Section Label */}
              <motion.div className="inline-flex items-center gap-3 mb-6" variants={scaleIn}>
                <div className="w-12 h-1 bg-[#df0c0c] rounded-full"></div>
                <span className="text-[#df0c0c] font-bold text-sm tracking-wider uppercase">
                  About Neobridge
                </span>
                <div className="w-12 h-1 bg-[#041740] rounded-full"></div>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#041740] mb-8 leading-tight"
                variants={fadeInUp}
              >
                {heading}
              </motion.h2>

              {/* Description */}
              <motion.div
                className="text-[#041740]/70 space-y-6 mb-10 text-lg leading-relaxed"
                variants={fadeInUp}
              >
                <p>{description}</p>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
                variants={staggerContainer}
              >
                <motion.div className="group" variants={scaleIn}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#041740]/10 hover:border-[#041740]/30 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-gradient-to-br from-[#041740] to-[#041740]/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <BarChart2 size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-[#041740] mb-1">{experience}+</h3>
                        <p className="text-[#041740]/60 font-medium">Years Excellence</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div className="group" variants={scaleIn}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#df0c0c]/10 hover:border-[#df0c0c]/30 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-gradient-to-br from-[#df0c0c] to-[#df0c0c]/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Users size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-[#041740] mb-1">{clients}+</h3>
                        <p className="text-[#041740]/60 font-medium">Trusted Clients</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Call to Action */}
              <motion.div variants={fadeInUp}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 bg-gradient-to-r from-[#041740] to-[#041740]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Target size={20} />
                  Discover Our Story
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
