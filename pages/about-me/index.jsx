import Layout from "../../components/layout";
import {
  Section,
  SectionHeader,
  SectionSubHeader,
  SectionContent,
} from "../../components/Content";
import List from "../../components/List";

export default function AboutMe() {
  return (
    <Layout>
      <Section>
        <SectionHeader>About Me</SectionHeader>

        <SectionContent>
          I'm a front end web developer with full stack web development
          experience. I've built custom tools and draw modes for maps using
          Mapbox. Using React and Tailwind CSS I've built a UI library as well
          an application that consumes the library.
        </SectionContent>

        <SectionContent className="mt-4">
          I've helped maintain and develop enterprise applications including
          email services. Using Docker I've built containerized solutions for an
          Express service.
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
            <li>
              Used Tailwind CSS and React to build UI library from the ground up
            </li>
            <li>
              Implemented responsive design using mobile first breakpoints
            </li>
            <li>
              Built Express service with containerized backend for rapid
              development
            </li>
          </List>
        </SectionContent>

        <SectionContent className="mt-10">
          <h3 className="text-lg text-primary">Web Developer / Programmer</h3>

          <div className="mt-3 italic text-secondary text-sm">
            Knoxville Utilities Board, Knoxville, TN / August 2016 - June 2019
          </div>

          <List className="mt-3">
            <li>
              Created a deployment application using Github's API to display
              information dealing with previous releases
            </li>
            <li>
              Updated email templates and a corresponding service that sent
              roughly 100,000 emails to customers a month
            </li>
            <li>
              Maintained and iterated on internal applications and customer
              facing website
            </li>
          </List>
        </SectionContent>
      </Section>

      <SectionSubHeader>Technology</SectionSubHeader>

      <List className="mt-3">
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Mapbox</li>
        <li>Ember</li>
        <li>Figma</li>
        <li>Express</li>
        <li>Docker</li>
        <li>Java</li>
      </List>

      <SectionSubHeader>Education</SectionSubHeader>

      <SectionContent className="mt-4">
        I graduated with a Computer Science degree from Maryville College in
        2016.
      </SectionContent>
    </Layout>
  );
}
