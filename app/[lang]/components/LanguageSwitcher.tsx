'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import ClickAwayListener from 'react-click-away-listener'
import { Locale } from '@/i18n.config'
import ru from '../../../public/assets/icons/flags/ru.svg'
import en from '../../../public/assets/icons/flags/en.svg'
import tr from '../../../public/assets/icons/flags/tr.svg'

export default function LanguageSwitcher({
  lang,
  onOpen,
}: {
  lang: Locale
  onOpen?: () => void
}) {
  const pathName = usePathname()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const router = useRouter()

  const handleClick = (locale: string) => {
    router.push(redirectedPathName(locale))
  }

  return (
    <button
      className="flex gap-[8px] relative z-[20] max-[604px]:z-[-1]"
      onClick={() => {
        if (onOpen) onOpen()
        setIsMenuOpen((prev: boolean) => !prev)
      }}
    >
      {lang === 'ru' && (
        <>
          <Image src={ru} width={24} height={16} alt="Russia flag" crossOrigin='anonymous' />
          RU
        </>
      )}
      {lang === 'en' && (
        <>
          <Image
            src={en}
            width={24}
            height={16}
            alt="USA flag"
            className="mt-[2px]"
          />
          EN
        </>
      )}
      {lang === 'tr' && (
        <>
          <Image src={tr} width={24} height={16} alt="Turkey flag" />
          TR
        </>
      )}
      <AnimatePresence>
        {isMenuOpen && (
          <ClickAwayListener
            onClickAway={() => {
              setIsMenuOpen(false)
            }}
          >
            <motion.div
              className="bg-white absolute top-[40px] left-[-16px] shadow-md rounded-[4px] min-w-[88px] flex flex-col "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {lang === 'ru' && (
                <>
                  <button
                    className="hover:bg-[#E6E6E6] py-[12px] px-[16px] flex items-center justify-center gap-[8px]"
                    onClick={() => {
                      handleClick('en')
                    }}
                  >
                    <Image src={en} width={24} height={16} alt="USA flag" />
                    EN
                  </button>
                  <div
                    className="hover:bg-[#E6E6E6] py-[12px] px-[16px] flex items-center justify-center gap-[8px]"
                    onClick={() => {
                      handleClick('tr')
                    }}
                  >
                    <Image src={tr} width={24} height={16} alt="Turkey flag" />
                    TR
                  </div>
                </>
              )}
              {lang === 'en' && (
                <>
                  <div
                    className="hover:bg-[#E6E6E6] py-[12px] px-[16px] flex items-center justify-center gap-[8px]"
                    onClick={() => {
                      handleClick('ru')
                    }}
                  >
                    <Image src={ru} width={24} height={16} alt="Russia flag" />
                    RU
                  </div>
                  <div
                    className="hover:bg-[#E6E6E6] py-[12px] px-[16px] flex items-center justify-center gap-[8px]"
                    onClick={() => {
                      handleClick('tr')
                    }}
                  >
                    <Image src={tr} width={24} height={16} alt="Turkey flag" />
                    TR
                  </div>
                </>
              )}
              {lang === 'tr' && (
                <>
                  <div
                    className="hover:bg-[#E6E6E6] py-[12px] px-[16px] flex items-center justify-center gap-[8px]"
                    onClick={() => {
                      handleClick('ru')
                    }}
                  >
                    <Image src={ru} width={24} height={16} alt="Russia flag" />
                    RU
                  </div>
                  <div
                    className="hover:bg-[#E6E6E6] py-[12px] px-[16px] flex items-center justify-center gap-[8px]"
                    onClick={() => {
                      handleClick('en')
                    }}
                  >
                    <Image src={en} width={24} height={16} alt="USA flag" />
                    EN
                  </div>
                </>
              )}
            </motion.div>
          </ClickAwayListener>
        )}
      </AnimatePresence>
    </button>
  )
}
