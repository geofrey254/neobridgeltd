import React from 'react'
import Image from 'next/image'

interface AboutProps {
  block: {
    heading: string
    description: string
    photo: { url: string }
  }
}

export default function AboutSection({ block }: AboutProps) {
  const heading = block?.heading || 'About Vivid Analytics'
  const description =
    block?.description ||
    'We are a leading data analytics company dedicated to transforming complex data into actionable insights that drive business success.'
  const photoUrl = block?.photo?.url

  return (
    <section className="w-full py-8 md:py-24 bg-white overflow-hidden">
      <div className="xl:container mx-auto px-4 md:px-8 xl:px-4 2xl:px-0">
        <div className="flex flex-col lg:flex-row 2xl:justify-between items-center gap-16">
          {/* Left Column - Image and Stats */}
          <div className="lg:w-1/2 2xl:w-1/3 order-2 lg:order-1">
            <div className="relative">
              {/* Image container with decorative elements */}
              <div className="relative z-10">
                {photoUrl ? (
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={photoUrl}
                      alt="About Vivid Analytics"
                      width={600}
                      height={500}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                ) : (
                  <div className="rounded-xl overflow-hidden shadow-xl bg-gray-200 aspect-[4/3]"></div>
                )}

                {/* Decorator dot pattern */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
                <div className="absolute top-1/2 -left-8 w-16 h-16 bg-[#df0c0c]/20 rounded-full z-0"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 2xl:w-auto order-1 lg:order-2">
            <div className="max-w-xl 2xl:max-w-3xl">
              <div className="inline-block px-4 py-1 bg-[#041740]/10 rounded-full mb-4">
                <span className="text-[#041740] font-medium text-sm">About Us</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#041740] mb-6">{heading}</h1>
              <div className="h-1 w-16 bg-[#df0c0c] mb-8"></div>

              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed text-justify">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
