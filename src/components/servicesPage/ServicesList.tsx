import { Target } from 'lucide-react'
import React from 'react'

interface ServicesBlockProps {
  block: {
    modularservices: {
      slug: string
      id: number
      title: string
      description: string
    }[]
  }
}

export default function ServicesList({ block }: ServicesBlockProps) {
  const solutions = block?.modularservices || []

  return (
    <section className="py-8 md:py-20 bg-gray-50">
      <div className="xl:container mx-auto px-4 md:px-12 xl:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-[#df0c0c] overflow-hidden"
            >
              {/* Card hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#041740]/5 to-[#df0c0c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon container */}
              <div className="relative mb-6">
                {/* Decorative circle */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#df0c0c] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              <div className="relative">
                <h3 className="text-2xl xl:text-3xl font-bold text-[#041740] mb-4 group-hover:text-[#df0c0c] transition-colors duration-300">
                  {solution.title}
                </h3>

                <div className="text-gray-600 leading-relaxed mb-6 md:min-h-[120px]">
                  <p className="text-justify">{solution.description}</p>
                </div>
              </div>

              {/* Animated border effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#041740] to-[#df0c0c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
