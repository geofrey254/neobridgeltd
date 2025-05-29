'use client'
import React from 'react'
import { Target, ArrowUpRight } from 'lucide-react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

interface ServicesBlockProps {
  block: {
    heading?: string
    services: {
      id: number
      title: string
      description: string
    }[]
  }
}

export default function HomeServicesSection({ block }: ServicesBlockProps) {
  const heading = block?.heading || 'Helping organizations make smarter decisions'
  const solutions = block?.services || []

  return (
    <section className="py-20 bg-[#041740] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-white"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {heading}
          </h2>
          <div className="w-24 h-1 bg-[#df0c0c] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.slice(0, 3).map((solution, index) => (
            <div
              key={solution.id}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-[#df0c0c] overflow-hidden"
            >
              {/* Card hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#041740]/5 to-[#df0c0c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-[#041740] rounded-xl flex items-center justify-center group-hover:bg-[#df0c0c] transition-colors duration-300 shadow-lg">
                  <Target className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                {/* Decorative circle */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#df0c0c] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-[#041740] mb-4 group-hover:text-[#df0c0c] transition-colors duration-300">
                  {solution.title}
                </h3>

                <div className="text-gray-600 leading-relaxed mb-6 md:min-h-[120px]">
                  <RichText
                    data={
                      typeof solution.description === 'string'
                        ? JSON.parse(solution.description)
                        : solution.description
                    }
                    className="line-clamp-3 text-sm md:text-base"
                  />
                </div>

                {/* Learn More Button */}
                <div className="flex items-center justify-between">
                  <button className="group/btn inline-flex items-center gap-2 text-[#041740] font-semibold hover:text-[#df0c0c] transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>

                  {/* Service number indicator */}
                  <div className="w-8 h-8 rounded-full bg-[#041740]/10 flex items-center justify-center text-sm font-bold text-[#041740] group-hover:bg-[#df0c0c]/10 group-hover:text-[#df0c0c] transition-all duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Animated border effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#041740] to-[#df0c0c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <p className="text-white/80 text-lg mb-6">
            Ready to transform your organization{"'"}s decision-making process?
          </p>
          <Link
            href="/what-we-offer"
            className="bg-[#df0c0c] hover:bg-[#df0c0c]/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
          >
            View More <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
