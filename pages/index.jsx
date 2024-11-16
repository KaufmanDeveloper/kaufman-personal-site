import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import Journal from '../components/Journal'
import ContentLink from '../components/ContentLink'

import { screenSizes } from '../helpers/constants'
import useMediaQuery from '../helpers/useMediaQuery'

import { Section, SectionHeader, SectionContent } from '../components/Content'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  const isMobileView = useMediaQuery(screenSizes.md)
  const sectionalMargin = 'mt-10 lg:mt-20'
  const sectionalMarginBottom = 'mb-6 lg:mb-10'

  const recentPosts = allPostsData.slice(0, 3)

  return (
    <Layout home>
      <Head>
        <title>Michael Kaufman's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section
        className={`flex flex-col items-center justify-center ${sectionalMargin} w-full`}
      >
        <SectionHeader>Nice to meet you!</SectionHeader>

        <SectionContent className="w-11/12 md:w-1/2 text-center text-secondary mt-10">
          My name is Michael Kaufman. I am a software engineer with a passion
          for making awesome things and working with teams that are excited
          about building ambitious solutions.
        </SectionContent>
      </Section>

      <div
        className={`${
          !isMobileView ? 'flex items-center' : ''
        } w-full rounded ${sectionalMargin}`}
      >
        <SectionContent
          className={`${
            !isMobileView ? 'w-1/2 px-12 mt-0' : 'px-6 pt-4'
          } text-center text-secondary`}
        >
          I love to create shippable products. I've worked with a government
          team maintaining legacy software as well as companies using the latest
          front end development practices to rapidly develop and prototype.
        </SectionContent>

        <SectionContent
          className={`${!isMobileView ? 'w-1/2 px-10' : 'px-6 pb-4'} my-6`}
        >
          <Image
            className="rounded"
            src="/images/email-template.png"
            width={isMobileView ? 600 : 1200}
            height={isMobileView ? 300 : 600}
            alt="Michael Kaufman"
          />
        </SectionContent>
      </div>

      <Section className={`${sectionalMargin} w-full`}>
        <SectionContent className="w-full md:w-1/2 ml-12 text-secondary text-center m-auto ml-auto">
          I believe in the principal of{' '}
          <ContentLink href="https://en.wikipedia.org/wiki/Kaizen">
            Kaizen
          </ContentLink>
          , or incremental development. Small improvements every day make a big
          difference in your skill over time.
        </SectionContent>
      </Section>

      <div
        className={`${
          !isMobileView ? 'flex items-center' : ''
        } w-full ${sectionalMargin}`}
      >
        <Image
          className="rounded"
          src="/images/labyrinth-video-2.gif"
          width={600}
          height={300}
          alt="Michael Kaufman"
        />

        <SectionContent
          className={`${
            !isMobileView ? 'w-1/2 pl-16' : 'px-6 pb-4'
          } my-6 text-center text-secondary`}
        >
          ABC, or "Always Be Coding" is a practice I try to subscribe to. To
          keep up with my coding skills in my free time, I work on building
          video games from the ground up using the Godot game engine, which uses
          a language similar to Python.
        </SectionContent>
      </div>

      <div className={`${sectionalMargin} ${sectionalMarginBottom}`}>
        <Journal pageTitle="Recent Posts" allPostsData={recentPosts} />
      </div>
    </Layout>
  )
}
