import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import SaveButton from '@/app/[lang]/components/SaveButton'
import ViewButton from '@/app/[lang]/components/ViewButton'
import coffeeVariants from '@/public/assets/images/coffeeVariants.png'
import coffeeNews from '@/public/assets/images/coffeeVietnamNews.jpg'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    page: { catalog },
  } = await getDictionary(params.lang)

  return {
    title: `${catalog.commercialOffers.coffeeVietnam.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: catalog.commercialOffers.coffeeVietnam.title,
  }
}

export default async function FoodProducts({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { catalog },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center pt-[50px]">
      <Image
        src={coffeeVariants}
        width={350}
        className="mb-[20px]"
        alt="coffee"
      />
      <h1 className="text-black max-w-[750px] text-[48px] font-bold text-center leading-[120%] mb-[32px] max-[480px]:text-[36px]">
        {catalog.commercialOffers.coffeeVietnam.title}
      </h1>
      {/*<div className="flex gap-[24px] mb-[40px]">
        <ViewButton
          dictionary={catalog.watch}
          className="self-start"
          documentName="commercial-offers/coffeeVietnam"
        />
        <SaveButton
          dictionary={catalog.download}
          path="/documents/commercial-offers/coffeeVietnam/document.pdf"
          fileName={`${catalog.commercialOffers.coffeeVietnam.title}.pdf`}
        />
      </div>*/}
      <Image
        src={coffeeNews}
        width={650}
        className="mb-[40px] border-[1px] border-black rounded"
        alt="coffee"
      />
      <p className="text-black text-[16px] max-w-[650px] mb-[20px]">
        {catalog.commercialOffers.coffeeVietnam.textOne}
      </p>
      <p className="text-black text-[16px] max-w-[650px] mb-[40px]">
        {catalog.commercialOffers.coffeeVietnam.textTwo}
      </p>
      <Link
        href={
          '/assets/documents/commercial-offers/coffeeVietnam/offerForRussia.pdf'
        }
        className="font-bold text-[24px] text-center underline leading-[160%] hover:text-blue-text underline-offset-[4px] mb-[20px]"
      >
        {catalog.commercialOffers.coffeeVietnam.offerRussia}
      </Link>
      <Link
        href={
          '/assets/documents/commercial-offers/coffeeVietnam/offerForTurkey.pdf'
        }
        className="font-bold text-[24px] text-center underline leading-[160%] hover:text-blue-text underline-offset-[4px]"
      >
        {catalog.commercialOffers.coffeeVietnam.offerTurkey}
      </Link>
    </section>
  )
}
