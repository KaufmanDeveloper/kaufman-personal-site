import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import Modal from "react-awesome-modal";

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen((previousModalState) => {
      return !previousModalState;
    });
  };

  return (
    <>
      <Modal
        visible={modalIsOpen}
        width="100%"
        height="50%"
        effect="fadeInUp"
        onClickAway={toggleModal}
      />

      <header>
        <div className="mx-3 my-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              className="rounded-full"
              src="/images/profile.jpg"
              height={60}
              width={60}
              alt="Michael Kaufman"
            />
            <div className="flex flex-col ml-2">
              <span className="text-secondary text-lg">Michael</span>
              <span className="text-primary text-xl font-semibold">
                Kaufman
              </span>
            </div>
          </div>

          <button onClick={toggleModal}>
            <MenuIcon className="text-primary" style={{ fontSize: 44 }} />
          </button>
        </div>
      </header>
    </>
  );
}
