import Link from 'next/link'
import Image from 'next/image'

import { screenSizes } from '../../helpers/constants'
import useMediaQuery from '../../helpers/useMediaQuery'

export default function PortfolioElement({
  externalLink,
  imageLink,
  projectName,
  projectDescription,
}) {
  const isMobileView = useMediaQuery(screenSizes.md)

  return (
    <div className={isMobileView ? 'w-full' : 'w-1/2'}>
      <div className={`${!isMobileView ? 'mx-2' : ''} my-2`}>
        <Link href={externalLink} passHref>
          <a className="w-full h-full">
            <div className="rounded-md hover:bg-gray-100 p-2">
              <div className="grid grid-cols-8">
                <div className="col-span-2">
                  <Image
                    className=""
                    src={imageLink}
                    height={88}
                    width={88}
                    alt="Michael Kaufman"
                  />
                </div>

                <div className="ml-4 col-span-6">
                  <div className="font-semibold text-primary mb-4">
                    {projectName}
                  </div>
                  <div className="text-primary">{projectDescription}</div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
