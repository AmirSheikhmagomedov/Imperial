'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Locale } from '@/i18n.config'
import Button from './Button'
import Container from './Container'
import Logo from './Logo'
import MobileMenuButton from './MobileMenuButton'
import MobileNavBar from './MobileNavBar'
import NavBar from './NavBar'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState<boolean>(false)

  const isMobileOrTablet = useMediaQuery({
    query: '(max-width: 1023px)',
  })

  const isMobile = useMediaQuery({
    query: '(max-width: 604px)',
  })

  useEffect(() => {
    isMobileMenuVisible
      ? disableBodyScroll(document.body)
      : enableBodyScroll(document.body)
  })

  return (
    <>
      <header className="bg-white fixed top-0 left-0 w-[100vw] text-black h-[100px] flex items-center border-b-[1px] border-grey-border-color z-50 ">
        <Container className="flex items-center justify-between  bg-white max-[356px]:pl-[0px] max-[356px]:pr-[12px]">
          <Logo
            className="max-[400px]:scale-75"
            lang={lang}
            onClick={() => {
              if (isMobileMenuVisible) {
                setIsMobileMenuVisible(false)
              }
            }}
          />
          <NavBar lang={lang} dictionary={dictionary} />
          <div className="flex gap-[36px] items-center">
            {!isMobile && (
              <LanguageSwitcher
                lang={lang}
                onOpen={() => {
                  if (isMobileMenuVisible) setIsMobileMenuVisible(false)
                }}
              />
            )}
            <Button
              pushTo={`/${lang}/write-us`}
              className="max-[460px]:text-[12px] max-[460px]:mr-[20px] max-[328px]:mr-[12px] max-[1023px]:mr-[48px]"
              onClick={() => {
                if (isMobileMenuVisible) {
                  setIsMobileMenuVisible(false)
                }
              }}
              dictionary={dictionary.navigation.button}
            />
          </div>
          {isMobileOrTablet && (
            <MobileMenuButton
              isOpen={isMobileMenuVisible}
              onClick={() => {
                setIsMobileMenuVisible((prev: boolean) => !prev)
              }}
            />
          )}
          <MobileNavBar
            isVisible={isMobileMenuVisible}
            dictionary={dictionary}
            onClick={() => {
              setIsMobileMenuVisible(false)
            }}
            lang={lang}
          />
        </Container>
      </header>
    </>
  )
}
