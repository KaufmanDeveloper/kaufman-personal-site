import Link from "next/link";
import Date from "../date";

export default function Journal({ allPostsData }) {
  return (
    <section className="mt-12 max-w-xl">
      <h2 className="text-4xl text-primary">Journal</h2>

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
    </section>
  );
}
