import Link from 'next/link'

import HeaderImage from '../HeaderImage'

export default function PortfolioElement({
  children,
  externalLink,
  projectName,
  imageLink,
}) {
  return (
    <div className="w-1/2">
      <Link href={externalLink} passHref>
        <a className="hover:opacity-90">
          <div className="relative pt-half md:pt-half overflow-hidden flex justify-center">
            <div
              className={`absolute z-50 py-4 top-1/3 md:top-80 text-center left-0 right-0 leading-10 flex justify-center`}
            >
              <div
                className={`text-xl md:text-4xl leading-8 md:leading-12 text-white mx-10 w-10/12 md:w-8/12 text-center`}
                aria-multiline="true"
              >
                {projectName}
              </div>
            </div>
            <HeaderImage imageLink={imageLink} />
          </div>
        </a>
      </Link>
    </div>
  )
}
