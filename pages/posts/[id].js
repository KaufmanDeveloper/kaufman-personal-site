import Head from 'next/head'

import {
  Section,
  SectionContent,
  SectionHeader,
} from '../../components/Content'
import Layout from '../../components/layout'
import Date from '../../components/date'

import { getAllPostIds, getPostData } from '../../lib/posts'

import postStyles from '../../styles/posts.module.css'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article className={postStyles.posts}>
        <Section>
          <SectionHeader>{postData.title}</SectionHeader>

          <div className="mt-4 text-gray-500">
            <Date dateString={postData.date} />
          </div>

          <SectionContent className="posts w-full lg:w-8/12">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </SectionContent>
        </Section>
      </article>
    </Layout>
  )
}
