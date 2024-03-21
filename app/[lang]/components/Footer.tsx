import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Footer({ lang }: { lang: Locale }) {
  const { footer } = await getDictionary(lang)

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-text text-white w-[100%] max-[1023px]:w-[100vw] h-[48px] flex items-center justify-center max-[460px]:text-[14px] max-[380px]:text-[12px] leading-[100%]">
      {footer} © 2022 – {currentYear} IMPERIAL LLC
    </footer>
  )
}
