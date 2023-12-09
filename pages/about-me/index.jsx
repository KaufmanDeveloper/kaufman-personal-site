import Layout from '../../components/layout'
import {
  Section,
  SectionHeader,
  SectionSubHeader,
  SectionContent,
} from '../../components/Content'
import List from '../../components/List'

export default function AboutMe() {
  const sectionalMarginBottom = 'mb-6 lg:mb-10'

  return (
    <Layout>
      <div className="w-full lg:w-9/12">
        <Section>
          <SectionHeader>About Me</SectionHeader>

          <SectionContent>
            I'm a full stack web developer that loves learning and working with
            teams that have a passion for building long lasting solutions.
          </SectionContent>
        </Section>

        <Section>
          <SectionSubHeader>Experience</SectionSubHeader>

          <SectionContent className="mt-6">
            <h3 className="text-lg text-primary">
              Web Developer / Programmer II
            </h3>

            <div className="mt-3 italic text-secondary text-sm">
              Knoxville Utilities Board, Knoxville, TN - Remote / October 2021 -
              Present
            </div>

            <List className="mt-3">
              <List.Item>
                Used EmberJS to implement features for internal Fieldwork
                application
              </List.Item>
              <List.Item>
                Configured an Electron build and deploy process for Fieldwork
                application
              </List.Item>
              <List.Item>
                Implemented full stack logic for recording voice messages using
                EmberJS and RecorderJS in the front-end and Java with Azure blob
                storage in the back-end
              </List.Item>
            </List>
          </SectionContent>

          <SectionContent className="mt-6">
            <h3 className="text-lg text-primary">Senior Software Engineer</h3>

            <div className="mt-3 italic text-secondary text-sm">
              Xpresspark, Charleston, SC - Remote / June 2021 - October 2021
            </div>

            <List className="mt-3">
              <List.Item>Used NestJS to implement back-end services</List.Item>
              <List.Item>Implemented Slack integrated service</List.Item>
              <List.Item>
                Used CQRS practices for Domain Driven Development
              </List.Item>
            </List>
          </SectionContent>

          <SectionContent className="mt-6">
            <h3 className="text-lg text-primary">Software Engineer</h3>

            <div className="mt-3 italic text-secondary text-sm">
              Syngenta Digital, Murray, KY - Remote / June 2019 - June 2021
            </div>

            <List className="mt-3">
              <List.Item>Used Tailwind CSS and React</List.Item>
              <List.Item>
                Implemented responsive design using mobile first breakpoints
              </List.Item>
              <List.Item>
                Learned containerization and Express for back-end development
              </List.Item>
            </List>
          </SectionContent>

          <SectionContent className="mt-10">
            <h3 className="text-lg text-primary">Web Developer / Programmer</h3>

            <div className="mt-3 italic text-secondary text-sm">
              Knoxville Utilities Board, Knoxville, TN / August 2017 - June 2019
            </div>

            <List className="mt-3">
              <List.Item>
                Created a deployment application using Github's API to display
                information dealing with previous releases
              </List.Item>
              <List.Item>
                Updated email templates and a corresponding service that sent
                roughly 100,000 emails to customers a month
              </List.Item>
              <List.Item>
                Maintained and iterated on internal applications and customer
                facing website
              </List.Item>
            </List>
          </SectionContent>
        </Section>

        <SectionSubHeader>Technology</SectionSubHeader>

        <List className="mt-3">
          <List.Item>React</List.Item>
          <List.Item>Electron</List.Item>
          <List.Item>Nest</List.Item>
          <List.Item>Ember</List.Item>
          <List.Item>Java</List.Item>
          <List.Item>Figma</List.Item>
          <List.Item>Express</List.Item>
          <List.Item>Docker</List.Item>
          <List.Item>Tailwind CSS</List.Item>
        </List>

        <SectionSubHeader>Education</SectionSubHeader>

        <SectionContent className={`mt-4 ${sectionalMarginBottom}`}>
          I graduated with a Computer Science degree from Maryville College in
          2016.
        </SectionContent>
      </div>
    </Layout>
  )
}
