import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import SaveButton from '@/app/[lang]/components/SaveButton'
import ViewButton from '@/app/[lang]/components/ViewButton'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    page: { catalog },
  } = await getDictionary(params.lang)

  return {
    title: `${catalog.commercialOffer} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: catalog.commercialOffer,
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
    <section className="flex flex-col items-center">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[32px] max-[480px]:text-[36px]">
        {catalog.commercialOffer}
      </h1>
      <div className="flex gap-[24px]">
        <ViewButton
          dictionary={catalog.watch}
          className="self-start"
          documentName="commercial-offer"
        />
        <SaveButton
          dictionary={catalog.download}
          path="/documents/commercial-offer/document.pdf"
          fileName={`${catalog.commercialOffer}.pdf`}
        />
      </div>
    </section>
  )
}
