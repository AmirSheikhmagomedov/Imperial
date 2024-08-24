import Image from 'next/image'
import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import nutyjoyImage from '../../../../../public/assets/images/nutyjoy.png'
import nutyjoyLongImage from '../../../../../public/assets/images/nutyJoyLong.png'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { exportImport },
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.priceLists.nutyjoy.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.priceLists.nutyjoy.title,
  }
}

export default async function CoffeePage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    seo: { exportImport },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center mt-[80px]">
      <Image
        src={nutyjoyImage}
        width={60}
        height={100}
        alt="Sweets"
        className="mt-[-30px] self-start max-[602px]:self-center"
      />
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[24px]">
        {exportImport.priceLists.nutyjoy.title}
      </h1>
      <p className="block self-start mb-[20px] max-w-[440px]">
        {exportImport.priceLists.nutyjoy.description}
      </p>
      <p className="block self-start font-bold mb-[8px] max-w-[440px]">
        {exportImport.priceLists.nutyjoy.prices.title}:
      </p>
      <p className="self-start max-w-[400px]">
        • {exportImport.priceLists.nutyjoy.prices.one}
      </p>
      <p className="self-start max-w-[400px]">
        • {exportImport.priceLists.nutyjoy.prices.two}
      </p>
      <p className="self-start max-w-[400px]">
        • {exportImport.priceLists.nutyjoy.prices.three}:
      </p>
      <p className="self-start max-w-[400px]">
        • {exportImport.priceLists.nutyjoy.prices.four}
      </p>
      <p className="self-start max-w-[400px] mb-[24px]">
        • {exportImport.priceLists.nutyjoy.prices.five}
      </p>
      <p className="block self-start font-bold mb-[8px] max-w-[440px]">
        {exportImport.priceLists.nutyjoy.extra.title}:
      </p>
      <p className="self-start max-w-[400px]">
        • {exportImport.priceLists.nutyjoy.extra.one}
      </p>
      <p className="self-start max-w-[400px] mb-[58px]">
        • {exportImport.priceLists.nutyjoy.extra.two}
      </p>
      <Image
        src={nutyjoyLongImage}
        width={400}
        height={100}
        alt="Sweets"
        className="mt-[-30px] self-start"
      />
    </section>
  )
}
