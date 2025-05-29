export const dynamic = 'force-dynamic'
import { getPayload } from 'payload'
import React from 'react'
import ServicesHero from '@/components/servicesPage/ServicesHero'
import ServicesList from '@/components/servicesPage/ServicesList'

import config from '@/payload.config'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'modular-services' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // Render the page layout dynamically
  return (
    <>
      <ServicesHero />
      {page.layout?.map((block, index) => renderBlock(block, index))}
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'modularblock':
      return <ServicesList key={index} block={block} />

    default:
      return null
  }
}
