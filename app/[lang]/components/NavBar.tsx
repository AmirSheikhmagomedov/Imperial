'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Locale } from '@/i18n.config'

export default function NavBar({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  const [isSubmenuOneVisible, setIsSubmenuOneVisible] = useState<boolean>(false)
  const [isSubmenuTwoVisible, setIsSubmenuTwoVisible] = useState<boolean>(false)

  const currentRoute = usePathname()

  return (
    <nav className="max-[1023px]:hidden pl-[50px]">
      <ul className="flex gap-[28px]">
        <li>
          <Link
            className={`hover:text-blue-text ${
              currentRoute === `/${lang}/about-us` ? 'text-blue-text' : ''
            }`}
            href={`/${lang}/about-us`}
          >
            {dictionary.navigation.links.one}
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => {
            setIsSubmenuOneVisible(true)
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
                  className="absolute top-[16px] h-[134px] bg-transparent pt-[15px]"
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
                        onClick={() => {
                          setIsSubmenuOneVisible(false)
                        }}
                      >
                        {dictionary.navigation.subMenu1.one}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:text-blue-text ${
                          currentRoute === `/${lang}/directions/production`
                            ? 'text-blue-text'
                            : ''
                        }`}
                        href={`/${lang}/directions/production`}
                        onClick={() => {
                          setIsSubmenuOneVisible(false)
                        }}
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
                        onClick={() => {
                          setIsSubmenuOneVisible(false)
                        }}
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
          className="relative h-[20px]"
          onMouseEnter={() => {
            setIsSubmenuTwoVisible(true)
          }}
          onMouseLeave={() => {
            setIsSubmenuTwoVisible(false)
          }}
        >
          <Link
            className={`hover:text-blue-text ${
              currentRoute.includes('/export-import') ? 'text-blue-text' : ''
            }`}
            href={`/${lang}/export-import`}
          >
            {dictionary.navigation.links.four}
          </Link>
          {
            <AnimatePresence>
              {isSubmenuTwoVisible && (
                <motion.div
                  className="absolute top-[16px] h-[134px] bg-transparent pt-[15px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <ul
                    className="flex flex-col gap-[16px]  bg-white rounded-[4px] whitespace-nowrap text-[14px] shadow-md px-[16px] py-[20px]
				leading-[100%] border-[1px]"
                  >
                    <li>
                      <Link
                        className={`hover:text-blue-text ${
                          currentRoute === `/${lang}/export-import/catalog-fmcg`
                            ? 'text-blue-text'
                            : ''
                        }`}
                        href={`/${lang}/export-import/catalog-fmcg`}
                        onClick={() => {
                          setIsSubmenuTwoVisible(false)
                        }}
                      >
                        {dictionary.navigation.subMenu2.one}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:text-blue-text ${
                          currentRoute ===
                          `/${lang}/export-import/exportVietnam`
                            ? 'text-blue-text'
                            : ''
                        }`}
                        href={`/${lang}/export-import/exportVietnam`}
                        onClick={() => {
                          setIsSubmenuTwoVisible(false)
                        }}
                      >
                        {dictionary.navigation.subMenu2.exportVietnam}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:text-blue-text ${
                          currentRoute === `/${lang}/export-import/price-lists`
                            ? 'text-blue-text'
                            : ''
                        }`}
                        href={`/${lang}/export-import/price-lists`}
                        onClick={() => {
                          setIsSubmenuTwoVisible(false)
                        }}
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
                        onClick={() => {
                          setIsSubmenuTwoVisible(false)
                        }}
                      >
                        {dictionary.navigation.subMenu2.commercialOffer}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:text-blue-text ${
                          currentRoute === `/${lang}/export-import/import-buyer`
                            ? 'text-blue-text'
                            : ''
                        }`}
                        href={`/${lang}/export-import/import-buyer`}
                        onClick={() => {
                          setIsSubmenuTwoVisible(false)
                        }}
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
                        onClick={() => {
                          setIsSubmenuTwoVisible(false)
                        }}
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
          >
            {dictionary.navigation.links.five}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
