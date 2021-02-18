import Head from "next/head";

import Layout from "../components/layout";
import Journal from "../components/Journal";
import Footer from "../components/Footer";

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

      <section className="mt-12 max-w-xl">
        <h2 className="text-4xl text-primary">Nice to meet you!</h2>

        <div className="mt-8 text-secondary">
          My name is Michael Kaufman. I’m a web developer based out of
          Nashville, TN and I have a passion for making awesome things!{" "}
        </div>
      </section>

      <Journal allPostsData={allPostsData} />
    </Layout>
  );
}
