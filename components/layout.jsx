import Head from "next/head";
import Link from "next/link";

import Header from "./Header";

const name = "Michael Kaufman";
export const siteTitle = "Michael Kaufman's Blog";

export default function Layout({ children, home }) {
  return (
    <div className="m-2">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Michael Kaufman's personal blog"
          content="Read posts and learnings by Michael Kaufman"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <main className="mx-5">{children}</main>

      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
