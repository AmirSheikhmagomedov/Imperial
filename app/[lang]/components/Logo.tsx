import Link from 'next/link'
import Image from 'next/image'
import { Locale } from '@/i18n.config'
import logo from '../../../public/assets/icons/logo.svg'

export default function Logo({
  className,
  onClick,
  lang,
}: {
  className?: string
  onClick?: () => void
  lang: Locale
}) {
  return (
    <Link
      href={`/${lang}`}
      className={`inline-block max-[1023px]:mr-auto ${className}`}
      title="IMPERIAL LLC"
      onClick={onClick}
    >
      <Image
        src={logo}
        alt="Imperial logo"
        width={140}
        height={68}
        priority={true}
      />
    </Link>
  )
}
