import Image from "next/image";

import { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";

import { screenSizes } from "../../helpers/constants";
import useMediaQuery from "../../helpers/useMediaQuery";
import HeaderModal from "./HeaderModal";

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen((previousModalState) => {
      return !previousModalState;
    });
  };
  const isMobileView = useMediaQuery(screenSizes.md);

  return (
    <>
      {isMobileView ? (
        <HeaderModal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
      ) : null}

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

          {isMobileView ? (
            <button onClick={toggleModal}>
              <MenuIcon className="text-primary" style={{ fontSize: 44 }} />
            </button>
          ) : null}
        </div>
      </header>
    </>
  );
}
