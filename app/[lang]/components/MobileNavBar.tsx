'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Locale } from '@/i18n.config'
import LanguageSwitcher from './LanguageSwitcher'

export default function MobileNavBar({
  isVisible,
  onClick,
  dictionary,
  lang,
}: {
  isVisible: boolean
  onClick: () => void
  dictionary: any
  lang: Locale
}) {
  const [isSubmenuOneVisible, setIsSubmenuOneVisible] = useState(false)
  const [isSubmenuTwoVisible, setIsSubmenuTwoVisible] = useState(false)

  const currentRoute = usePathname()

  const isMobile = useMediaQuery({
    query: '(max-width: 604px)',
  })

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="hidden absolute top-[100px] left-0 max-[1023px]:flex border-b-[1px] border-grey-border-color w-[100vw] h-[64px] items-center justify-center bg-white max-[604px]:min-h-[240px] z-[1] max-[604px]:flex-col max-[604px]:gap-[32px] max-[604px]:py-[160px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <ul className="inline-flex gap-[32px] flex-wrap max-[604px]:gap-[20px] max-[604px]:flex-col items-center">
              <li>
                <Link
                  className={`hover:text-blue-text ${
                    currentRoute === `/${lang}/about-us` ? 'text-blue-text' : ''
                  }`}
                  href={`/${lang}/about-us`}
                  onClick={onClick}
                >
                  {dictionary.navigation.links.one}
                </Link>
              </li>
              <li
                className="relative"
                onClick={() => {
                  setIsSubmenuOneVisible((prev: boolean) => !prev)
                }}
                onMouseLeave={() => {
                  setIsSubmenuOneVisible(false)
                }}
              >
                <button
                  className={`hover:text-blue-text ${
                    currentRoute.includes('/directions') ? 'text-blue-text' : ''
                  }`}
                >
                  {dictionary.navigation.links.two}
                </button>
                {
                  <AnimatePresence>
                    {isSubmenuOneVisible && (
                      <motion.div
                        className="absolute top-[16px] h-[134px] bg-transparent pt-[15px] bg-white z-[15]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                      >
                        <ul
                          className="flex flex-col gap-[16px]  bg-white rounded-[4px] text-[14px] shadow-md px-[16px] py-[20px]
			leading-[100%] border-[1px]"
                        >
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute === `/${lang}/directions/trading`
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/directions/trading`}
                              onClick={onClick}
                            >
                              {dictionary.navigation.subMenu1.one}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute ===
                                `/${lang}/directions/production`
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/directions/production`}
                              onClick={onClick}
                            >
                              {dictionary.navigation.subMenu1.two}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute === '/directions/consulting'
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/directions/consulting`}
                              onClick={onClick}
                            >
                              {dictionary.navigation.subMenu1.three}
                            </Link>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                }
              </li>
              <li
                className="relative"
                onClick={() => {
                  setIsSubmenuTwoVisible((prev: boolean) => !prev)
                }}
                onMouseLeave={() => {
                  setIsSubmenuTwoVisible(false)
                }}
              >
                <button
                  className={`hover:text-blue-text ${
                    currentRoute.includes('/export-import')
                      ? 'text-blue-text'
                      : ''
                  }`}
                >
                  {dictionary.navigation.links.four}
                </button>
                {
                  <AnimatePresence>
                    {isSubmenuTwoVisible && (
                      <motion.div
                        className="absolute top-[16px] max-[604px]:left-1/2 max-[604px]:-translate-x-1/2 h-[134px] bg-transparent pt-[15px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                      >
                        <ul
                          className="flex flex-col gap-[16px] max-[420px]:items-center  bg-white rounded-[4px] whitespace-nowrap text-[14px] shadow-md px-[16px] py-[20px]
			leading-[100%] border-[1px]"
                        >
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute === `/${lang}/export-import`
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/export-import`}
                              onClick={onClick}
                            >
                              {dictionary.info}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute ===
                                `/${lang}/export-import/catalog-fmcg`
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/export-import/catalog-fmcg`}
                              onClick={onClick}
                            >
                              {dictionary.navigation.subMenu2.one}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute ===
                                `/${lang}/export-import/catalog-spicesVietnam`
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/export-import/catalog-spicesVietnam`}
                              onClick={onClick}
                            >
                              {dictionary.navigation.subMenu2.spicesVietnam}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute ===
                                `/${lang}/export-import/price-lists`
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/export-import/price-lists`}
                              onClick={onClick}
                            >
                              {dictionary.navigation.subMenu2.four}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute ===
                                `/${lang}/export-import/commercial-offers`
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/export-import/commercial-offers`}
                              onClick={onClick}
                            >
                              {dictionary.navigation.subMenu2.commercialOffer}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute ===
                                `/${lang}/export-import/import-buyer`
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/export-import/import-buyer`}
                              onClick={onClick}
                            >
                              {dictionary.navigation.subMenu2.two}
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={`hover:text-blue-text ${
                                currentRoute ===
                                `/${lang}/export-import/import-supplier`
                                  ? 'text-blue-text'
                                  : ''
                              }`}
                              href={`/${lang}/export-import/import-supplier`}
                              onClick={onClick}
                            >
                              {dictionary.navigation.subMenu2.three}
                            </Link>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                }
              </li>
              <li>
                <Link
                  className={`hover:text-blue-text ${
                    currentRoute === `/${lang}/contact` ? 'text-blue-text' : ''
                  }`}
                  href={`/${lang}/contact`}
                  onClick={onClick}
                >
                  {dictionary.navigation.links.five}
                </Link>
              </li>
            </ul>
            {isMobile && <LanguageSwitcher lang={lang} />}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
