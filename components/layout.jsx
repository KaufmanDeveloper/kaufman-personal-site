import Head from 'next/head'
import Image from 'next/image'

import { withRouter } from 'next/router'

import { screenSizes } from '../helpers/constants'
import useMediaQuery from '../helpers/useMediaQuery'

import Header from './Header'
import Footer from './footer'

export const siteTitle = "Michael Kaufman's Blog"

function Layout({ router, children }) {
  const isMobileView = useMediaQuery(screenSizes.sm)

  return (
    <div>
      <div className="min-h-90">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="Michael Kaufman's personal blog"
            content="Read posts and learnings by Michael Kaufman"
          />
          <meta property="og:url" content="https://kaufmandeveloper.com" />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="Kaufman Developer" />
          <meta property="og:title" content="Michael Kaufman's personal blog" />
          <meta
            name="twitter:card"
            content="Michael Kaufman's personal blog."
          />
          <meta
            property="og:description"
            content="Read posts and learnings by Michael Kaufman."
          />
          <meta
            property="og:image"
            content="https://kaufmandeveloper.com/images/preview.png"
          />
        </Head>

        {router.pathname === '/' ? (
          <div className="relative pt-half md:pt-most overflow-hidden flex justify-center">
            <Header isHomeVersion />

            <div
              className={`absolute z-50 py-4 top-1/2 md:top-80 text-center left-0 right-0 leading-10 flex justify-center`}
            >
              <div
                className={`text-xl md:text-4xl leading-8 md:leading-12 text-white mx-10 w-10/12 md:w-8/12 text-center`}
                aria-multiline="true"
              >
                Michael Kaufman is a Web Developer based in Nashville, TN
              </div>
            </div>

            <Image
              className="filter brightness-50"
              src={
                isMobileView
                  ? '/images/profile_picture_smaller_screen.jpeg'
                  : '/images/profile_picture_fullscreen.jpg'
              }
              alt="Michael Kaufman"
              layout="fill"
              objectFit="cover"
              priority={true}
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
  )
}

export default withRouter(Layout)
