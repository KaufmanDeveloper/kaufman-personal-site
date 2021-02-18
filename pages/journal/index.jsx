import Layout from "../../components/layout";

import JournalComponent from "../../components/Journal";

import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Journal({ allPostsData }) {
  return (
    <Layout>
      <JournalComponent allPostsData={allPostsData} />
    </Layout>
  );
}
