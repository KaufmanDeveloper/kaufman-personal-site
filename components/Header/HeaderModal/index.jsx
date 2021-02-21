import { withRouter } from "next/router";
import Link from "next/link";

import Modal from "react-awesome-modal";

function HeaderModal({ router, modalIsOpen, toggleModal }) {
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
          <a className="h-1/2 border-b border-gray-300 flex items-center justify-center text-primary text-3xl">
            Home
          </a>
        </Link>
      )}

      {router.pathname !== "/about-me" && (
        <Link href="/about-me">
          <a className="h-1/2 border-b border-gray-300 flex items-center justify-center text-primary text-3xl">
            About Me
          </a>
        </Link>
      )}

      {router.pathname !== "/journal" && (
        <Link href="/journal">
          <a className="h-1/2 flex items-center justify-center text-primary text-3xl">
            Journal
          </a>
        </Link>
      )}
    </Modal>
  );
}

export default withRouter(HeaderModal);
