import Head from "next/head";

import Layout from "../components/layout";
import Journal from "../components/Journal";

import { Section, SectionHeader, SectionContent } from "../components/Content";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Michael Kaufman's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <SectionHeader>Nice to meet you!</SectionHeader>

        <SectionContent>
          My name is Michael Kaufman. I’m a web developer based out of
          Nashville, TN and I have a passion for making awesome things!{" "}
        </SectionContent>
      </Section>

      <Journal allPostsData={allPostsData} />
    </Layout>
  );
}
