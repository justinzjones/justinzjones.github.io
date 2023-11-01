import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ExperienceSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  // event,
  cta,
  href,
}: {
  title: string
  description: string
  // event: string
  cta: string
  href?: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {/* <Card.Eyebrow decorate>{event}</Card.Eyebrow> */}
      <Card.Description>{description}</Card.Description>
      {/* <Card.Cta>{cta}</Card.Cta> */}
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Product Mgt, Systems analysis, Payments, Ecommerce, Tender Mgt, Vendor Mgt.',
}

export default function Experience() {
  return (
    <SimpleLayout
      title="Product Mgt, Systems analysis, Payments, Ecommerce, Tender Mgt, Vendor Mgt."
      intro=""
    >
      <div className="space-y-20">

      <ExperienceSection title="Product Management">
          <Appearance
            // href="#"
            title="Technical Product Manager"
            description="I have 8+ years of Technical Product Management experience. This role has been a great fit for me as it's enabled me
            to stay in touch with my development roots, whilst also honing my skills as a Product leader."
            cta="Listen to podcast"
          />
        </ExperienceSection>

        <ExperienceSection title="Business Analysis">
          <Appearance
            // href="#"
            title="Business Analyst"
            description="I have 10+ years experience as a software Business analyst and also as a Business Systems Analyst. These roles have leveraged 
            my training as a Software developer and experience as an analyst."
            cta="Listen to podcast"
          />
        </ExperienceSection>

        <ExperienceSection title="Tender Management">
          <Appearance
            // href="#"
            title="Managed multiple tenders for a Middle Eastern airline's online channel"
            description="Working for a flag carrier in the Middle East has been one of my career highlights. Employed as the Ancillary Products 
            Manager, one of my responsibilities was to source 3rd party vendors. Every partner contracted was the result of an exhaustive, fair and transparent tender process, 
            overseen by Procurement. The result was a solid record of contracting with good companies and successful long term partnerships."
            // event=""
            cta="no cta"
          />
        </ExperienceSection>

        <ExperienceSection title="Vendor Management">
          <Appearance
            // href="#"
            title="Working with Vendors to ensure mutual success"
            description="I have often been responsble for not only tendering but also for managing vendors who have been awarded the tenders. In such cases
            it's been a continuation of the relationship that has been forged over previous months. Ensuring the services contracted are the services 
            received is important for success. To provide a runway for long term success I believe it's important to ensure there is a respectful 
            and equitable partnership with vendors."
            cta="Listen to podcast"
          />
        </ExperienceSection>
        
        <ExperienceSection title="Digital Payments">
          <Appearance
            // href="#"
            title="Product Manager - online payments"
            description="I managed a community payment solution from inception through to go live and ongoing iterative agile development. 
            A decade ago, an online store offering Card payments with 3d secure would have covered the vast majority of use cases. 
            However, in recent times payment solutions have become much more comprehensive and sophisticated with more security considerations.
            It's been an interesting domain to have worked in."
            cta="Listen to podcast"
          />
        </ExperienceSection>
        <ExperienceSection title="Ecommerce">
          <Appearance
            // href="#"
            title="Airline - distribution"
            description="As a Project Manager, and as a Product owner I've worked on 3 bespoke airline booking engines and 1
            community booking platform. I tend to keep a watchful eye on airline and online travel agent developments in this area."
            cta="Listen to podcast"
          />
        </ExperienceSection>
      </div>
    </SimpleLayout>
  )
}
