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
            <span className="text-gray-700 text-lg">Michael</span>
            <span className="text-gray-800 text-xl font-semibold">Kaufman</span>
          </div>
        </div>

        <MenuIcon style={{ color: 374151, fontSize: 44 }} />
      </div>
    </header>
  );
}
