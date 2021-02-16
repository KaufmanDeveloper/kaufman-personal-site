import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import MenuIcon from "@material-ui/icons/Menu";

export default function Header() {
  return (
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
            <span className="text-primary text-xl font-semibold">Kaufman</span>
          </div>
        </div>

        <MenuIcon className="text-primary" style={{ fontSize: 44 }} />
      </div>
    </header>
  );
}
