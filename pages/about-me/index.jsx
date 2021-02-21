import Layout from "../../components/layout";
import {
  Section,
  SectionHeader,
  SectionSubHeader,
  SectionContent,
} from "../../components/Content";

export default function AboutMe() {
  return (
    <Layout>
      <Section>
        <SectionHeader>About Me</SectionHeader>

        <SectionContent>
          I'm a front end web developer with full stack web development
          experience. I love learning and self improvement.
        </SectionContent>

        <SectionSubHeader>Technology</SectionSubHeader>

        <SectionContent className="mt-4">
          I've worked with React and Ember for front end development, as well as
          Express and Java for API development.
        </SectionContent>
      </Section>
    </Layout>
  );
}
