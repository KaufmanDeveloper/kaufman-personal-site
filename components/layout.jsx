import Head from "next/head";
import Image from "next/image";

import Header from "./Header";
import Footer from "./footer";

export const siteTitle = "Michael Kaufman's Blog";

export default function Layout({ children }) {
  return (
    <div className="mb-24">
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

      <div className="m-2">
        <Header />
      </div>

      <Image
        className="-z-10"
        src="/images/at-desk.jpeg"
        alt="Michael Kaufman"
        layout="responsive"
        width={700}
        height={475}
      />

      <main className="mx-5">{children}</main>

      <div className="ml-4">
        <Footer />
      </div>
    </div>
  );
}
