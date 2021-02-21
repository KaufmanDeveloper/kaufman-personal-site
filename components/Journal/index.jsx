import Link from "next/link";
import Date from "../date";

import { Section, SectionHeader } from "../Content";

export default function Journal({ allPostsData }) {
  return (
    <Section className="mt-12 max-w-xl">
      <SectionHeader className="text-4xl text-primary">Journal</SectionHeader>

      <ul className="mt-8">
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
    </Section>
  );
}
