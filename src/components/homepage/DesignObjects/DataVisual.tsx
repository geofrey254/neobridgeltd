import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function AfricaDataVisual() {
  return (
    <div className="relative w-full aspect-square max-w-xl">
      {/* Main Africa visual */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#041740] via-[#041740]/95 to-[#041740]/20"></div>

        {/* Africa map and data content */}
        <div className="absolute inset-0 p-6 flex flex-col space-y-4">
          {/* Africa Map Section */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex-grow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="h-full relative flex items-center justify-center">
              <Image src="/africa.svg" width={800} height={800} alt="map" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating African elements */}
      <motion.div
        className="absolute -bottom-6 -right-6 w-16 h-16 rounded-2xl bg-[#DF0C0C]/15 backdrop-blur-sm border border-[#DF0C0C]/20 z-10 flex items-center justify-center"
        animate={{
          y: [0, -8, 0],
          rotateZ: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative">
          {/* Abstract African pattern */}
          <div className="w-6 h-6 border-2 border-[#DF0C0C] rounded-lg"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-[#DF0C0C]/30 to-transparent rounded-sm"></div>
          <div className="absolute top-1 left-1 w-1 h-1 bg-[#DF0C0C] rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#041740]/15 backdrop-blur-sm border border-[#041740]/20 z-10 flex items-center justify-center"
        animate={{
          y: [0, 8, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <div className="relative">
          <div className="w-4 h-4 bg-[#041740] rounded-full opacity-60"></div>
          <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-8 -right-2 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 z-10 flex items-center justify-center"
        animate={{
          rotateY: [0, 180, 360],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        {/* Simple African sun symbol */}
        <div className="relative">
          <div className="w-3 h-3 bg-[#DF0C0C] rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
