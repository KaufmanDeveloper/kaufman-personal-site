import Head from "next/head";
import Image from "next/image";

import { withRouter } from "next/router";

import Header from "./Header";
import Footer from "./footer";

import layoutStyles from "./layout.module.css";

export const siteTitle = "Michael Kaufman's Blog";

function Layout({ router, children }) {
  const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <div>
      <div className="min-h-90">
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

        {router.pathname === "/" ? (
          <div className="relative pt-half md:pt-most overflow-hidden flex justify-center">
            <Header isHomeVersion />

            <div
              className={`absolute z-50 py-4 top-1/2 md:top-80 text-center left-0 right-0 leading-10 ${layoutStyles.layout} flex justify-center`}
            >
              <div
                className={`text-xl md:text-4xl leading-8 md:leading-12 text-white mx-10 w-10/12 md:w-8/12 text-center ${layoutStyles.text}`}
                aria-multiline="true"
              >
                Michael Kaufman is a Web Developer based in Nashville, TN
              </div>
            </div>

            <Image
              className={layoutStyles.image}
              src="/images/at-desk.jpeg"
              alt="Michael Kaufman"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </div>
        ) : (
          <div className="m-2">
            <Header />
          </div>
        )}

        <main className="mx-5">{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(Layout);
