import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import ViewButton from '@/app/[lang]/components/ViewButton'
import SaveButton from '@/app/[lang]/components/SaveButton'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { exportImport },
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.priceLists.haribo.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.priceLists.haribo.title,
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

  const { downloadButton } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[48px]">
        {exportImport.priceLists.haribo.title}
      </h1>
      <div className="flex gap-[24px]">
        <ViewButton
          dictionary={exportImport.priceLists.ace.buttonText}
          className="self-start"
          documentName="price-lists/haribo"
        />
        <SaveButton
          dictionary={downloadButton}
          fileName={`${exportImport.priceLists.haribo.title}.pdf`}
          path="/documents/price-lists/haribo/document.pdf"
        />
      </div>
    </section>
  )
}
