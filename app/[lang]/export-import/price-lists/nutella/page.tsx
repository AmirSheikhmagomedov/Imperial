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
    seo: { exportImport },
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.priceLists.nutella.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.priceLists.nutella.title,
  }
}

export default async function CoffeePage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    seo: { exportImport },
    page: { catalog },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[48px]">
        {exportImport.priceLists.nutella.title}
      </h1>
      <div className="flex gap-[24px]">
        <ViewButton
          dictionary={catalog.watch}
          className="self-start"
          documentName="price-lists/nutella"
        />
        <SaveButton
          dictionary={catalog.download}
          path="/documents/price-lists/nutella/document.pdf"
          fileName={`${exportImport.priceLists.nutella.title}.pdf`}
        />
      </div>
    </section>
  )
}
