import React from 'react'

interface MapProps {
  block: {
    iframe: string
  }
}

export default function MapArea({ block }: MapProps) {
  return (
    <section className="border-t-6 border-[#df0c0c]">
      <div className="iframe-wrapper" dangerouslySetInnerHTML={{ __html: block.iframe }} />
    </section>
  )
}
