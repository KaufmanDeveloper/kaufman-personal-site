import Link from "next/link";

export default function ContentLink({ href, children }) {
  return (
    <div className="inline text-blue-500 hover:text-blue-400">
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </div>
  );
}
