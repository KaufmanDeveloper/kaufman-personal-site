import Head from "next/head";
import Image from "next/image";

import Layout from "../components/layout";
import Journal from "../components/Journal";
import ContentLink from "../components/ContentLink";

import { screenSizes } from "../helpers/constants";
import useMediaQuery from "../helpers/useMediaQuery";

import {
  Section,
  SectionHeader,
  SectionContent,
  SectionSubHeader,
} from "../components/Content";

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
  const isMobileView = useMediaQuery(screenSizes.md);

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
          Nashville, TN and I have a passion for making awesome things!
        </SectionContent>
      </Section>

      <div
        className={`${
          !isMobileView ? "flex items-center" : ""
        } w-full bg-gray-100 rounded mt-8`}
      >
        <SectionContent
          className={`${!isMobileView ? "w-1/2 px-12" : "px-6 pt-4"}`}
        >
          I love to work and learn with teams that love creating shippable
          products. I've worked with a government team maintaining legacy
          software as well as an agricultural software development team using
          the latest front end development practices to rapidly develop and
          prototype.
        </SectionContent>

        <SectionContent
          className={`${!isMobileView ? "w-1/2 px-10" : "px-6 pb-4"} my-6`}
        >
          <Image
            className="rounded"
            src="/images/email-template.png"
            width={600}
            height={300}
            alt="Michael Kaufman"
          />
        </SectionContent>
      </div>

      <Section>
        <SectionContent>
          I believe in the principal of{" "}
          <ContentLink href="https://en.wikipedia.org/wiki/Kaizen">
            Kaizen
          </ContentLink>
          , or incremental development.
        </SectionContent>
      </Section>

      <div
        className={`${!isMobileView ? "flex items-center" : ""} w-full mt-12`}
      >
        <Image
          className="rounded"
          src="/images/mak-game.gif"
          width={600}
          height={300}
          alt="Michael Kaufman"
        />

        <SectionContent
          className={`${!isMobileView ? "w-1/2 pl-16" : "px-6 pb-4"} my-6`}
        >
          I love creating in whatever form. To keep up with my coding skills in
          my free time, I work on building video games from the ground up using
          the Godot game engine, which uses a language similar to Python.
        </SectionContent>
      </div>

      <Journal allPostsData={allPostsData} />
    </Layout>
  );
}
