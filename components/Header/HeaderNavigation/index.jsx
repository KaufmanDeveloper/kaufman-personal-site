import { withRouter } from "next/router";
import Link from "next/link";

function HeaderNavigation({ router }) {
  const linkStyling = "text-gray-400";

  return (
    <div className="flex mr-3 w-48 xl:w-64 justify-between">
      {router.pathname === "/" ? (
        <span className="text-primary">Home</span>
      ) : (
        <Link href="/">
          <a className={linkStyling}>Home</a>
        </Link>
      )}

      {router.pathname === "/about-me" ? (
        <span className="text-primary">About Me</span>
      ) : (
        <Link href="/about-me">
          <a className={linkStyling}>About Me</a>
        </Link>
      )}

      {router.pathname === "/journal" ? (
        <span className="text-primary">Journal</span>
      ) : (
        <Link href="/journal">
          <a className={linkStyling}>Journal</a>
        </Link>
      )}
    </div>
  );
}

export default withRouter(HeaderNavigation);
