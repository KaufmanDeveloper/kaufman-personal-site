import Link from 'next/link'

import GithubIcon from './GithubIcon'
import YouTubeIcon from './YouTubeIcon'
import TwitterIcon from './TwitterIcon'

export default function Footer() {
  return (
    <div className="relative pb-16">
      <div className="w-full absolute bottom-0 h-16 flex justify-center py-4 border-t">
        <div className="w-32 flex items-center justify-between">
          <a
            href="https://github.com/KaufmanDeveloper"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="text-primary hover:text-secondary" />
          </a>

          <a
            href="https://www.youtube.com/@KaufmanDeveloper"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon className="text-primary hover:text-secondary" />
          </a>

          <a
            href="https://twitter.com/KaufmanDev"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="text-primary hover:text-secondary" />
          </a>
        </div>
      </div>
    </div>
  )
}
