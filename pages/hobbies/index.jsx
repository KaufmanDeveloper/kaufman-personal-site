import Layout from '../../components/layout'

import HobbiesComponent from '../../components/Hobbies'

import { getSortedPostsData } from '../../lib/hobbies-posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Hobbies({ allPostsData }) {
  return (
    <Layout>
      <HobbiesComponent allPostsData={allPostsData} />
    </Layout>
  )
}
