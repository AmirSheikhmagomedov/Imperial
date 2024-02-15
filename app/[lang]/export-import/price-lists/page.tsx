import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import coffeeImage from '../../../../public/assets/images/coffee.png'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { exportImport },
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.title}: ${exportImport.priceLists.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.priceLists.description,
  }
}

export default async function PriceLists({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { priceLists },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-black text-[48px]   font-bold text-center leading-[120%] mb-[48px]">
        {priceLists.title}
      </h1>
      <div className="flex gap-[40px] flex-wrap justify-center">
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/coffee`}
        >
          <Image
            src={coffeeImage}
            width={70}
            height={100}
            alt="Sweets"
            className="mt-[-5px]"
          />
          <span className="mt-auto">{priceLists.coffee}</span>
        </Link>
      </div>
    </section>
  )
}
