import { Section, SectionContent } from '../Content'

import Layout from '../../components/layout'
import PortfolioElement from './PortfolioElement'

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
        projectName="RPG Godot Game"
        projectDescription={sideProjectDescriptions.rpgGame}
        imageLink="/portfolio_images/rpg_game.png"
      />
      <PortfolioElement
        externalLink="https://www.youtube.com/@kaufdropgames134"
        projectName="Kaufdrop Games"
        projectDescription={sideProjectDescriptions.kaufdropGames}
        imageLink="/portfolio_images/kaufdrop_games.png"
      />
      <PortfolioElement
        externalLink="https://github.com/knoxville-utilities-board/ember-nrg-ui/commit/5f1888551a10e2f739eb9884356002f80bb0b79a"
        projectName="Freestyle in ember-nrg-ui"
        projectDescription={sideProjectDescriptions.nrgFreestyle}
        imageLink="/portfolio_images/freestyle_ember-nrg-ui.png"
      />
      <PortfolioElement
        externalLink="https://github.com/KaufmanDeveloper/gravity-flyer"
        projectName="Wo Dude"
        projectDescription={sideProjectDescriptions.woDude}
        imageLink="/portfolio_images/wo-dude.png"
      />
      <PortfolioElement
        externalLink="https://github.com/KaufmanDeveloper/react-cross-browser-audio-recorder"
        projectName="Cross Browser Audio Recorder"
        projectDescription={
          sideProjectDescriptions.reactCrossBrowserAudioRecorder
        }
        imageLink="/portfolio_images/cross-browser-audio-recorder.png"
      />
    </div>
  )
}
