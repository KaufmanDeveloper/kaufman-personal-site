import Link from 'next/link'

export default function PortfolioElement({ children, externalLink }) {
  return (
    <Link href={externalLink} passHref>
      <div className="h-24 p-3 hover:bg-gray-100 cursor-pointer w-full flex items-center justify-center">
        <div>{children}</div>
      </div>
    </Link>
  )
}
