import Image from 'next/image'

import { Section, SectionContent } from '../Content'

import Layout from '../../components/layout'
import PortfolioElement from '../PortfolioElement'

export default function Portfolio() {
  return (
    <Layout>
      <Section className="mb-3">
        <SectionContent>
          Some text describing my portfolio projects
        </SectionContent>
      </Section>

      <PortfolioContent />
    </Layout>
  )
}

function PortfolioContent() {
  return (
    <div className="w-full h-full flex flex-col justify-center align-center">
      <div className="border-b h-full">
        <PortfolioElement externalLink="https://github.com/KaufmanDeveloper/labyrinth-game">
          <div>
            <Image
              className="h-full"
              src="/images/profile.jpg"
              height={44}
              width={44}
              alt="Michael Kaufman"
            />
          </div>
        </PortfolioElement>
      </div>
      <div className="border-b h-full">
        <PortfolioElement externalLink="https://github.com/KaufmanDeveloper/labyrinth-game">
          <div>
            <Image
              className="h-full"
              src="/images/profile.jpg"
              height={44}
              width={44}
              alt="Michael Kaufman"
            />
          </div>
        </PortfolioElement>
      </div>
    </div>
  )
}
