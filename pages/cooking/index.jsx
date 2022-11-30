import Layout from '../../components/layout'

import CookingComponent from '../../components/Cooking'

import { getSortedPostsData } from '../../lib/cooking-posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Cooking({ allPostsData }) {
  return (
    <Layout>
      <CookingComponent allPostsData={allPostsData} />
    </Layout>
  )
}
