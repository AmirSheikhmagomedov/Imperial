import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
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
    title: `${exportImport.priceLists.kalyon.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.priceLists.kalyon.title,
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
    <section className="flex flex-col items-center">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[48px]">
        {exportImport.priceLists.kalyon.title}
      </h1>
      <div className="flex gap-[24px]">
        <ViewButton
          dictionary={exportImport.priceLists.kalyon.buttonText}
          className="self-start"
          documentName="kalyon-catalog"
        />
        <ViewButton
          dictionary={exportImport.priceLists.kalyon.secondButtonText}
          className="self-start"
          documentName="price-lists/kalyon"
        />
      </div>
    </section>
  )
}
