import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Consulting',
  description: 'Product strategy, Product planning and scoping, Product planning, Requirements elicitation, Tender Management, Vendor Management',
}

export default function Consulting() {
  return (
    <SimpleLayout
      title="Consulting"
      intro="Please contact me if you would like to discuss any potential Consulting needs. I'm based in the Dallas-Fort Worth area in Texas 
      and available on a full or part time basis. I can travel at short notice."
    >
      <div className="space-y-20">
        <ToolsSection title="Vendor deep dives">
          <Tool title="Mitigate risk">
            I have extensive experience researching vendors. This upfront investment paves the path to success. Unfortunately, lack of due diligence
            into potential vendors is where many projects start on the wrong footing. Ensuring that potential vendors are a good fit helps to reduce 
            risk and stress later in the cycle. It also pays dividends. I am 100% independent and impartial, ensuring that vendors are evaluated 
            fairly and equally. A comprehensive report will provide an indepth analysis to help guide decison making.  
          </Tool>
        </ToolsSection>
        <ToolsSection title="Tendering">
          <Tool title="Tender process">
            Tendering can be a long and drawn out activity that too often doesn't result in the tender being awarded to the most appropriate 
            organisation. Unfortunately, quite often the mistake will only become apparent many months later by which point it can feel too late 
            to change. I can help avoid this situation by leveraging my business and technical experience, research, contacts and due diligence. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Product">
          <Tool title="Product management">
            I have over 10 years of Technical Product experience. Initially as a Developer, through to Product owner and as a Product Manager. I am available 
            on a full or part time basis and can be involved to work as a traditional Product Manager or as a mentor helping to guide others in their 
            Product role.    
          </Tool>
        </ToolsSection>
        <ToolsSection title="User experience">
          <Tool title="Design">
            One of my passions is User experience. In my spare time I'm quite often creating designs in Figma or designing new user interfaces 
            directly in HTML, CSS and JavaScript. I will be happy to demo my designs on request.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}