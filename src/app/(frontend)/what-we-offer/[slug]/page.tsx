export const dynamic = 'force-dynamic'

import React from 'react'
import config from '@/payload.config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import NewsletterBox from '@/components/solutionpage/NewsletterBox'
import { fetchAllCases } from '@/lib/serviceUtil'

export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'ourservices',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  })

  const post = docs[0]
  if (!post) {
    notFound()
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="w-full bg-[#041740] relative overflow-hidden pt-24 flex justify-center items-center border-b-4 border-[#df0c0c] min-h-60 md:min-h-80">
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
                {post.title}
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
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="container mx-auto px-4 py-12 relative">
        {/* Floating background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#041740]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-tr from-[#df0c0c]/5 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 relative z-10">
          {/* Left Sidebar - Enhanced Design */}
          <aside className="lg:w-1/3 xl:w-1/4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-8 space-y-6">
              {/* Newsletter Box with enhanced styling */}
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#041740] to-[#041740]/90 rounded-2xl p-6 shadow-xl border border-[#041740]/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#df0c0c]/20 to-transparent rounded-full -translate-y-6 translate-x-6"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full -translate-x-8 translate-y-8"></div>
                  <div className="relative z-10">
                    <NewsletterBox />
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#041740] to-[#df0c0c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#041740] mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get in touch with our experts for personalized assistance.
                  </p>
                  <button className="w-full bg-gradient-to-r from-[#041740] to-[#041740]/90 text-white py-2 px-4 rounded-xl hover:from-[#041740]/90 hover:to-[#041740] transition-all duration-300 font-medium">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Enhanced Design */}
          <main className="lg:w-2/3 xl:w-3/4 order-1 lg:order-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden hover:shadow-3xl transition-all duration-500">
              {/* Content Header */}
              <div className="bg-gradient-to-r from-[#041740]/5 via-transparent to-[#df0c0c]/5 p-6 md:p-8 border-b border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#df0c0c] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#041740] rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Service Details</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 lg:p-12">
                <article className="prose prose-lg max-w-none prose-headings:text-[#041740] prose-headings:font-bold prose-a:text-[#041740] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl text-justify">
                  {/* Content wrapper with enhanced styling */}
                  <div className="relative">
                    {/* Decorative quote mark */}
                    <div className="absolute -top-4 -left-4 text-6xl text-[#df0c0c]/10 font-serif leading-none">
                      &quot;{' '}
                    </div>

                    <div className="relative z-10">
                      <RichText
                        data={post.description}
                        className="richtext text-justify text-lg leading-relaxed"
                      />
                    </div>
                  </div>
                </article>

                {/* Bottom action section */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#041740] to-[#df0c0c] rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      <span className="text-sm text-gray-600">Interested in this service?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  try {
    const allPosts = await fetchAllCases(1, 100)
    return allPosts.posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
