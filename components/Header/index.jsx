import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";

import { screenSizes } from "../../helpers/constants";
import useMediaQuery from "../../helpers/useMediaQuery";

import HeaderModal from "./HeaderModal";
import HeaderNavigation from "./HeaderNavigation";

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
          <Link href="/">
            <a className="flex items-center">
              <Image
                className="rounded-full"
                src="/images/profile.jpg"
                height={44}
                width={44}
                alt="Michael Kaufman"
              />
              <div className="flex flex-col ml-2">
                <span className="text-secondary text-sm">Michael</span>
                <span className="text-primary font-semibold">Kaufman</span>
              </div>
            </a>
          </Link>

          {isMobileView ? (
            <button onClick={toggleModal}>
              <MenuIcon className="text-primary" style={{ fontSize: 28 }} />
            </button>
          ) : (
            <HeaderNavigation />
          )}
        </div>
      </header>
    </>
  );
}
