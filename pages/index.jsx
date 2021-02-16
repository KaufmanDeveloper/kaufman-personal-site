import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";

import Header from "../components/header";
import Footer from "../components/Footer";
import Layout from "../components/layout";
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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mt-12 max-w-xl">
        <h2 className="text-4xl text-primary">Nice to meet you!</h2>

        <div className="mt-8 text-secondary">
          My name is Michael Kaufman. I’m a web developer based out of
          Nashville, TN and I have a passion for making awesome things!{" "}
        </div>
      </section>

      <section className="mt-12 max-w-xl">
        <h2 className="text-4xl text-primary">Journal</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="my-4" key={id}>
              <div className="text-blue-500 hover:text-blue-400">
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </div>
              <div className="text-sm text-gray-700">
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </Layout>
  );
}
