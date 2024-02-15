import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import percilImage from '../../../../public/assets/images/percil.png'
import sweetsImage from '../../../../public/assets/images/sweets.png'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { exportImport },
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.title}: ${exportImport.catalogFMCG.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.catalogFMCG.description,
  }
}

export default async function CatalogFMCG({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { catalog },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center pt-[50px]">
      <h1 className="text-black text-[48px]   font-bold text-center leading-[120%] mb-[48px]">
        {catalog.title}
      </h1>
      <div className="flex gap-[40px] flex-wrap justify-center">
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
					 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/catalog-fmcg/food-products`}
        >
          <Image
            src={sweetsImage}
            width={130}
            height={100}
            alt="Sweets"
            className="mt-[-10px]"
          />
          <span className="mt-auto">{catalog['food-products']}</span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
					 bg-white pt-[18px] hover:bg-blue-100 whitespace-nowrap"
          href={`/${lang}/export-import/catalog-fmcg/household-chemicals`}
        >
          <Image
            src={percilImage}
            width={100}
            height={118}
            alt="Household chemicals"
          />
          <span className="mt-auto">{catalog['household-chemicals']}</span>
        </Link>
      </div>
    </section>
  )
}
