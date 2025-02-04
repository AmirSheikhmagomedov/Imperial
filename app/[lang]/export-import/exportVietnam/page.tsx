import { Metadata } from 'next'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import SaveButton from '@/app/[lang]/components/SaveButton'
import ViewButton from '@/app/[lang]/components/ViewButton'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const { navigation } = await getDictionary(params.lang)

  return {
    title: `${navigation.subMenu2.exportVietnam} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: navigation.subMenu2.exportVietnam,
  }
}

export default async function FoodProducts({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { catalog },
    navigation,
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[32px] pt-[64px] max-[500px]:pt-[32px]">
        {navigation.subMenu2.exportVietnam}
      </h1>
      <div className="flex flex-col gap-[20px] text-[24px] ">
        <Link
          href={`/assets/documents/exportVietnam/coffee.pdf`}
          target="_blank"
          className="leading-[160%] font-bold text-center underline hover:text-blue-text underline-offset-[4px]"
        >
          {catalog.commercialOffers.exportVietnam.coffee}
        </Link>
        <Link
          href={`/assets/documents/exportVietnam/spices.pdf`}
          target="_blank"
          className="leading-[160%] font-bold text-center underline hover:text-blue-text underline-offset-[4px]"
        >
          {catalog.commercialOffers.exportVietnam.spices}
        </Link>
        <Link
          href={`/assets/documents/exportVietnam/driedFruits.pdf`}
          target="_blank"
          className="leading-[160%] font-bold text-center underline hover:text-blue-text underline-offset-[4px]"
        >
          {catalog.commercialOffers.exportVietnam.driedFruits}
        </Link>
        <Link
          href={`/assets/documents/exportVietnam/nuts.pdf`}
          target="_blank"
          className="leading-[160%] font-bold text-center underline hover:text-blue-text underline-offset-[4px]"
        >
          {catalog.commercialOffers.exportVietnam.nuts}
        </Link>
        <Link
          href={`/assets/documents/exportVietnam/coconut.pdf`}
          target="_blank"
          className="leading-[160%] font-bold text-center underline hover:text-blue-text underline-offset-[4px]"
        >
          {catalog.commercialOffers.exportVietnam.coconut}
        </Link>
      </div>
    </section>
  )
}
