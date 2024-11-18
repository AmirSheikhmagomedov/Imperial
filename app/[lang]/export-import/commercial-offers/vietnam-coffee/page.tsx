import Image from 'next/image'
import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import SaveButton from '@/app/[lang]/components/SaveButton'
import ViewButton from '@/app/[lang]/components/ViewButton'
import coffeeVariants from '@/public/assets/images/coffeeVariants.png'

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
      <div className="flex gap-[24px]">
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
      </div>
    </section>
  )
}
