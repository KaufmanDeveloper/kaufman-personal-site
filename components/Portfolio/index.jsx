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
    <div className="w-full flex flex-wrap">
      <PortfolioElement
        externalLink="https://github.com/KaufmanDeveloper/labyrinth-game"
        projectName="Sword Runner"
        imageLink="/images/profile.jpg"
      ></PortfolioElement>
      <PortfolioElement
        externalLink="https://github.com/KaufmanDeveloper/labyrinth-game"
        projectName="Sword Runner"
        imageLink="/images/profile.jpg"
      ></PortfolioElement>
    </div>
  )
}
