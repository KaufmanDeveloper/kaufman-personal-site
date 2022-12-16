import Head from 'next/head'
import Image from 'next/image'

import { withRouter } from 'next/router'

import { screenSizes } from '../helpers/constants'
import useMediaQuery from '../helpers/useMediaQuery'

import Header from './Header'
import Footer from './footer'

export const siteTitle = "Michael Kaufman's Blog"

function Layout({ router, children }) {
  // Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
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
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
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
              placeholder="blur"
              blurDataURL={rgbDataURL(53, 53, 53)}
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
