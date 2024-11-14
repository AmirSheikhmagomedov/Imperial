import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import coffeeImage from '../../../../public/assets/images/coffee.png'
import coffeeVietnamImage from '../../../../public/assets/images/coffeeVietnam.jpg'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { exportImport },
    navigation,
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.title}: ${navigation.subMenu2.commercialOffer} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: navigation.subMenu2.commercialOffer,
  }
}

export default async function PriceLists({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { priceLists, commercialOffers },
    navigation,
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center max-w-[1000px] mt-[0px] max-[520px]:mt-[48px]">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[48px]">
        {navigation.subMenu2.commercialOffer}
      </h1>
      <div className="flex gap-[40px] flex-wrap justify-center">
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/commercial-offers/coffee-mehmet-efendi`}
        >
          <Image
            src={coffeeImage}
            width={130}
            height={100}
            alt="Sweets"
            className="mt-[-5px]"
          />
          <span className="mt-[15px] text-center leading-[140%]">
            {commercialOffers.coffeeMehmetEfendi}
          </span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/commercial-offers/vietnam-coffee`}
        >
          <Image
            src={coffeeVietnamImage}
            width={150}
            height={100}
            alt="Sweets"
            className="mt-[-10px]"
          />
          <span className="mt-auto">{commercialOffers.coffeeVietnam}</span>
        </Link>
      </div>
    </section>
  )
}
