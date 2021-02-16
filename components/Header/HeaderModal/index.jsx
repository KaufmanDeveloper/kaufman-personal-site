import Link from "next/link";

import Modal from "react-awesome-modal";

export default function HeaderModal({ modalIsOpen, toggleModal }) {
  return (
    <Modal
      visible={modalIsOpen}
      width="100%"
      height="50%"
      effect="fadeInUp"
      onClickAway={toggleModal}
    >
      <Link href="/about-me">
        <a className="h-1/2 border-b border-gray-300 flex items-center justify-center text-primary text-3xl">
          About Me
        </a>
      </Link>

      <Link href="/journal">
        <a className="h-1/2 flex items-center justify-center text-primary text-3xl">
          Journal
        </a>
      </Link>
    </Modal>
  );
}
