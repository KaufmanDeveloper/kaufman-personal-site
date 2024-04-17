import { withRouter } from 'next/router'
import Link from 'next/link'

function HeaderNavigation({ router, isHomeVersion }) {
  const linkStyling = isHomeVersion
    ? 'text-white hover:text-gray-200'
    : 'text-gray-400 hover:text-gray-500'
  const isCurrentRouteStyling = isHomeVersion ? 'text-gray-300' : 'text-primary'

  return (
    <div className="flex mr-3 w-72 justify-between">
      {router.pathname === '/' ? (
        <span className={isCurrentRouteStyling}>Home</span>
      ) : (
        <Link href="/">
          <a className={linkStyling}>Home</a>
        </Link>
      )}

      {router.pathname === '/about-me' ? (
        <span className={isCurrentRouteStyling}>About Me</span>
      ) : (
        <Link href="/about-me">
          <a className={linkStyling}>About Me</a>
        </Link>
      )}

      {router.pathname === '/journal' ? (
        <span className={isCurrentRouteStyling}>Journal</span>
      ) : (
        <Link href="/journal">
          <a className={linkStyling}>Journal</a>
        </Link>
      )}

      {router.pathname === '/portfolio' ? (
        <span className={isCurrentRouteStyling}>Portfolio</span>
      ) : (
        <Link href="/portfolio">
          <a className={linkStyling}>Portfolio</a>
        </Link>
      )}
    </div>
  )
}

export default withRouter(HeaderNavigation)
