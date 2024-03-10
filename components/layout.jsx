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

  const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

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
            content="https://kaufmandeveloper.com/images/compressed_preview.jpg"
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
                  ? '/images/landscape_sitting.jpg'
                  : '/images/landscape_sitting.jpg'
              }
              alt="Michael Kaufman"
              layout="fill"
              objectFit="cover"
              priority={true}
              placeholder="blur"
              blurDataURL={rgbDataURL(183, 183, 183)}
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
