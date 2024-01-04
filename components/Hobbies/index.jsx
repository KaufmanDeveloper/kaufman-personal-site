import Link from 'next/link'
import Date from '../date'

import { Section, SectionContent, SectionHeader } from '../Content'

export default function Hobbies({ allPostsData, pageTitle }) {
  const sectionHeader = pageTitle ? pageTitle : 'Hobbies'

  return (
    <Section className="mt-12 max-w-xl">
      <SectionHeader className="text-4xl text-primary">
        {sectionHeader}
      </SectionHeader>

      <SectionContent className="mt-4 lg:mt-6">
        <ul className="mt-8">
          {allPostsData.map(({ id, date, title }) => (
            <li className="my-4" key={id}>
              <div className="text-blue-500 hover:text-blue-400 inline-block">
                <Link href={`/hobbies-posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </div>
              <div className="text-sm text-gray-500">
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </SectionContent>
    </Section>
  )
}
