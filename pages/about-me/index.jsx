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
          experience. I love learning and self improvement with any skill!
        </SectionContent>

        <SectionSubHeader>Technology</SectionSubHeader>

        <List className="mt-3">
          <li>React</li>
          <li>Tailwind CSS</li>
        </List>
      </Section>
    </Layout>
  );
}
