import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Date from "../components/date";

import Header from "../components/header";
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

      <section className="mt-12">
        <h2 className="text-4xl text-primary">Nice to meet you!</h2>

        <div className="mt-8 text-secondary">
          My name is Michael Kaufman. I’m a web developer based out of
          Nashville, TN and I have a passion for making awesome things!{" "}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-4xl text-primary">Journal</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className="my-4" key={id}>
              <div className="text-blue-700 hover:text-blue-500">
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
    </Layout>
  );
}
