import { Section, SectionContent } from '../Content'

import Layout from '../../components/layout'
import PortfolioElement from '../PortfolioElement'

import { screenSizes } from '../../helpers/constants'
import useMediaQuery from '../../helpers/useMediaQuery'
import sideProjectDescriptions from '../../helpers/sideProjectDescriptions'

export default function Portfolio() {
  const isMobileView = useMediaQuery(screenSizes.md)

  return (
    <Layout>
      <div className={`flex ${isMobileView ? 'flex-col' : ''}`}>
        <div className={`${!isMobileView ? 'w-1/3' : ''}`}>
          <Section className={`${isMobileView ? 'mb-3' : ''}`}>
            <SectionContent>
              <p>
                While most of my work professionally is in private repositories,
                I do enjoy working on side projects in my free time.
              </p>
              <br />
              <p>Here are some of those fun projects!</p>
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
        projectName="Untitled RPG Godot Game"
        projectDescription={sideProjectDescriptions.rpgGame}
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
