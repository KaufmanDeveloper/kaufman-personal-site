import Layout from "../../components/layout";
import {
  Section,
  SectionHeader,
  SectionContent,
} from "../../components/Content";

export default function AboutMe() {
  return (
    <Layout>
      <Section>
        <SectionHeader>About Me</SectionHeader>

        <SectionContent>
          I'm a front end web developer with full stack web development
          experience. I love learning and collaborating with others.
        </SectionContent>
      </Section>
    </Layout>
  );
}
