import GithubIcon from "./GithubIcon";
import YouTubeIcon from "./YouTubeIcon";
import TwitterIcon from "./TwitterIcon";

export default function Footer() {
  return (
    <div className="relative">
      <div className="fixed w-full bottom-0 my-4 flex items-center">
        <div>
          <GithubIcon />
        </div>

        <div className="ml-4">
          <YouTubeIcon />
        </div>

        <div className="ml-4">
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}
