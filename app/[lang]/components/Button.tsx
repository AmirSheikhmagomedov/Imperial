'use client'

import Link from 'next/link'

export default function Button({
  className,
  pushTo,
  dictionary,
  onClick,
}: {
  className?: string
  pushTo?: string
  dictionary: any
  onClick?: () => void
}) {
  return (
    <Link
      className={`bg-main-blue hover:bg-blue-hover text-white px-[12px] py-[16px] rounded-[4px] leading-[100%] font-bold ${className}`}
      href={pushTo!}
      onClick={onClick}
    >
      {dictionary}
    </Link>
  )
}
