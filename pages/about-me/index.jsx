import Layout from "../../components/layout";
import {
  Section,
  SectionHeader,
  SectionSubHeader,
  SectionContent,
} from "../../components/Content";
import List from "../../components/List";

export default function AboutMe() {
  const sectionalMarginBottom = "mb-6 lg:mb-10";

  return (
    <Layout>
      <div className="w-full lg:w-9/12">
        <Section>
          <SectionHeader>About Me</SectionHeader>

          <SectionContent>
            I'm a front end web developer with full stack web development
            experience. I love learning and working with teams that have a
            passion for building long lasting solutions.
          </SectionContent>

          <SectionContent className="mt-4">
            I'm a front end web developer with full stack web development
            experience. Using React and Tailwind CSS I've built a UI library as
            well an application that consumes the library. I've helped maintain
            and develop enterprise applications including email services. I've
            also built custom tools and draw modes for maps using Mapbox.
          </SectionContent>
        </Section>

        <Section>
          <SectionSubHeader>Experience</SectionSubHeader>

          <SectionContent className="mt-6">
            <h3 className="text-lg text-primary">Software Engineer</h3>

            <div className="mt-3 italic text-secondary text-sm">
              Syngenta Digital, Murray, KY - Remote / June 2019 - Present
            </div>

            <List className="mt-3">
              <List.Item>Used Tailwind CSS and React</List.Item>
              <List.Item>
                Implemented responsive design using mobile first breakpoints
              </List.Item>
              <List.Item>Learned containerization and Express</List.Item>
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
          <List.Item>Tailwind CSS</List.Item>
          <List.Item>Mapbox</List.Item>
          <List.Item>Ember</List.Item>
          <List.Item>Figma</List.Item>
          <List.Item>Express</List.Item>
          <List.Item>Docker</List.Item>
          <List.Item>Java</List.Item>
        </List>

        <SectionSubHeader>Education</SectionSubHeader>

        <SectionContent className={`mt-4 ${sectionalMarginBottom}`}>
          I graduated with a Computer Science degree from Maryville College in
          2016.
        </SectionContent>
      </div>
    </Layout>
  );
}
