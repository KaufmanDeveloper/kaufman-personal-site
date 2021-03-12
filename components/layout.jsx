import Head from "next/head";
import Image from "next/image";

import { withRouter } from "next/router";

import Header from "./Header";
import Footer from "./footer";

import layoutStyles from "./layout.module.css";

export const siteTitle = "Michael Kaufman's Blog";

function Layout({ router, children }) {
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
              className={`absolute text-white z-50 py-4 top-32 md:top-64 text-center left-0 right-0 leading-10 ${layoutStyles.layout} bg-black bg-opacity-30 flex justify-center`}
            >
              <div className="text-xl md:text-4xl mx-10 w-10/12 md:w-8/12 text-center">
                Michael Kaufman is a Web Developer based in Nashville, TN
              </div>
            </div>

            <Image
              className=""
              src="/images/at-desk.jpeg"
              alt="Michael Kaufman"
              layout="fill"
              objectFit="cover"
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
