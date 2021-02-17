import Link from "next/link";

import GithubIcon from "./GithubIcon";
import YouTubeIcon from "./YouTubeIcon";
import TwitterIcon from "./TwitterIcon";

export default function Footer() {
  return (
    <div className="relative">
      <div className="fixed w-full bottom-0 my-4">
        <div className="w-32 flex items-center justify-between">
          <Link href="https://github.com/KaufmanDeveloper">
            <a>
              <GithubIcon className="text-primary hover:text-secondary" />
            </a>
          </Link>

          <Link href="https://www.youtube.com/channel/UC8q1rPCdCiU9nzQ07YgCCKQ">
            <a>
              <YouTubeIcon className="text-primary hover:text-secondary" />
            </a>
          </Link>

          <Link href="https://twitter.com/KaufmanDev">
            <a>
              <TwitterIcon className="text-primary hover:text-secondary" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
