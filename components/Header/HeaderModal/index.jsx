import { withRouter } from "next/router";
import Link from "next/link";

import Modal from "react-awesome-modal";

function HeaderModal({ router, modalIsOpen, toggleModal }) {
  const isNotMainRoute =
    router.pathname !== "/" &&
    router.pathname !== "/about-me" &&
    router.pathname !== "/journal";

  const heightClass = isNotMainRoute ? "h-1/3" : "h-1/2";

  return (
    <Modal
      visible={modalIsOpen}
      width="100%"
      height="50%"
      effect="fadeInUp"
      onClickAway={toggleModal}
    >
      {router.pathname !== "/" && (
        <Link href="/">
          <a
            className={`${heightClass} border-b border-gray-300 flex items-center justify-center text-primary text-3xl`}
          >
            Home
          </a>
        </Link>
      )}

      {router.pathname !== "/about-me" && (
        <Link href="/about-me">
          <a
            className={`${heightClass} border-b border-gray-300 flex items-center justify-center text-primary text-3xl`}
          >
            About Me
          </a>
        </Link>
      )}

      {router.pathname !== "/journal" && (
        <Link href="/journal">
          <a
            className={`${heightClass} flex items-center justify-center text-primary text-3xl`}
          >
            Journal
          </a>
        </Link>
      )}
    </Modal>
  );
}

export default withRouter(HeaderModal);
