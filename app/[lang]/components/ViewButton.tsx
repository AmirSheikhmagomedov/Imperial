'use client'

import { MouseEvent } from 'react'

export default function ViewButton({
  className,
  dictionary,
  documentName,
}: {
  className?: string
  dictionary: any
  documentName: string
}) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    window.open(
      `${window.location.protocol}//${window.location.host}/assets/documents/${documentName}/document.pdf`
    )
  }

  return (
    <button
      className={`bg-main-blue hover:bg-blue-hover text-white px-[12px] py-[16px] rounded-[4px] leading-[100%] font-bold ${className}`}
      onClick={handleClick}
    >
      {dictionary}
    </button>
  )
}
