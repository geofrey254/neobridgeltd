import React from 'react'
import { ArrowDown, Target, Users, TrendingUp } from 'lucide-react'

export default function SolutionHero() {
  return (
    <section className="w-full bg-[#041740] relative overflow-hidden pt-24 flex justify-center items-center border-b-4 border-[#df0c0c] min-h-60 md:min-h-80">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Primary geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-[#df0c0c]/30 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/10 rounded-full"></div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-[#df0c0c]/10 via-transparent to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full translate-x-1/2 translate-y-1/2"></div>

        {/* Floating particles */}
        <div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#df0c0c] rounded-full animate-bounce"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-[#df0c0c]/70 rounded-full animate-bounce"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
          {/* Main heading with animation */}
          <div className="relative mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              What We
              <span className="text-[#df0c0c] inline-block hover:scale-105 transition-transform duration-300">
                Offer
              </span>
            </h1>

            {/* Decorative elements */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-12 bg-[#df0c0c] rounded-full"></div>
              <div className="w-3 h-3 border-2 border-[#df0c0c] rounded-full"></div>
              <div className="h-1 w-12 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,112L1200,117.3L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  )
}
