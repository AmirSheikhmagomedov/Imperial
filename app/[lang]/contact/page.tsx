import { Metadata } from 'next'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Button from '../components/Button'
import SaveButton from '../components/SaveButton'
import ViewButton from '../components/ViewButton'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { contact },
  } = await getDictionary(params.lang)

  return {
    title: `${contact.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: contact.description,
  }
}

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    downloadButton,
    watchButton,
    page: { contact },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center gap-[32px] pt-[80px]">
      <h1 className="text-black text-[48px] font-bold text-center self-center leading-[120%]">
        {contact.title}
      </h1>
      <div className="flex flex-col items-center gap-[32px] max-w-[340px] max-[360px]:text-[14px] max-[480px]:text-center">
        <p className="self-start font-bold text-center">
          <div className="text-center inline-block text-[18px] mb-[4px] max-[480px]:mb-[8px]">
            IMPERIAL LTD. ŞTI.
          </div>
          <br />
          <span className="text-[14px] font-normal text-center">
            EMLAK İNŞAAT TURİZM TİCARET İTHALAT VE İHRACAT LİMİTED ŞİRKETİ
          </span>
        </p>
        <p className=" max-[480px]:self-auto text-center">
          {contact.one} <br />{' '}
          <div className="font-bold mt-[4px]">{contact.two}</div>
        </p>
        <p className=" max-[480px]:self-auto text-center">
          {contact.three} <br />{' '}
          <div className="font-bold mt-[4px] text-center">
            +90 (531) 987 85 47
          </div>
        </p>
        <p className=" max-[480px]:self-auto text-center">
          {contact.four} <br />{' '}
          <div className="font-bold mt-[4px] text-center">
            info@imperial-company.com
          </div>
        </p>
        <Link
          className="leading-[160%] font-bold  text-center underline hover:text-blue-text underline-offset-[4px]"
          href={'https://t.me/imperialturkey'}
          target="_blank"
        >
          {contact.five}
        </Link>
        <div className="self-center flex gap-[24px]">
          <SocialIcon
            url="https://wa.me/905319878547"
            network="whatsapp"
            title="WhatsApp"
            target="_blank"
          />
          <SocialIcon
            url="https://t.me/+905319878547"
            network="telegram"
            title="Telegram"
            target="_blank"
          />
          <SocialIcon
            url="https://www.instagram.com/imperial_export"
            network="instagram"
            title="Instagram"
            target="_blank"
          />
        </div>
        <div className="flex gap-[16px] max-[460px]:flex-col self-center whitespace-nowrap max-[480px]:self-auto">
          <ViewButton
            dictionary={watchButton}
            className="self-start"
            documentName="company-details"
          />
          <SaveButton
            dictionary={downloadButton}
            path="/documents/company-details/document.pdf"
            fileName={contact.fileName}
          />
        </div>
      </div>
    </section>
  )
}
