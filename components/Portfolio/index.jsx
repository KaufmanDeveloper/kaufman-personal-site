import { Section, SectionContent } from '../Content'

import Layout from '../../components/layout'
import PortfolioElement from '../PortfolioElement'

import { screenSizes } from '../../helpers/constants'
import useMediaQuery from '../../helpers/useMediaQuery'

export default function Portfolio() {
  const isMobileView = useMediaQuery(screenSizes.md)

  return (
    <Layout>
      <div className={`flex ${isMobileView ? 'flex-col' : ''}`}>
        <div className={`${!isMobileView ? 'w-1/3' : ''}`}>
          <Section className={`${isMobileView ? 'mb-3' : ''}`}>
            <SectionContent>
              Some text describing my portfolio projects
            </SectionContent>
          </Section>
        </div>

        <PortfolioContent />
      </div>
    </Layout>
  )
}

function PortfolioContent() {
  const isMobileView = useMediaQuery(screenSizes.md)
  const portfolioWidth = isMobileView ? 'w-full' : 'w-3/6'

  return (
    <div className={`${portfolioWidth} flex flex-col`}>
      <PortfolioElement
        externalLink="https://github.com/KaufmanDeveloper/labyrinth-game"
        projectName="Sword Runner"
        projectDescription="Example description"
        imageLink="/images/profile.jpg"
      ></PortfolioElement>
      <PortfolioElement
        externalLink="https://github.com/KaufmanDeveloper/labyrinth-game"
        projectName="Sword Runner"
        projectDescription="Example description"
        imageLink="/images/profile.jpg"
      ></PortfolioElement>
    </div>
  )
}
