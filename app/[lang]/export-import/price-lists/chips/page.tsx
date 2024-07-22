import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
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
    title: `${exportImport.priceLists.chips.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.priceLists.chips.description,
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
    <section className="flex flex-col items-center gap-[24px]">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[px]">
        {exportImport.priceLists.chips.title}
      </h1>
      <p className="block self-start mb-[-20px] max-w-[440px]">
        {exportImport.priceLists.chips.description}
      </p>
      <p className="self-start font-bold mb-[-20px]">
        {exportImport.priceLists.chips.one}
      </p>
      <p className="self-start font-bold mb-[-20px]">
        {exportImport.priceLists.chips.two}
      </p>
      <p className="self-start font-bold mb-[-20px]">
        {exportImport.priceLists.chips.three}
      </p>
      <p className="self-start font-bold mb-[-20px]">
        {exportImport.priceLists.chips.four}
      </p>
      <p className="self-start font-bold mb-[-20px]">
        {exportImport.priceLists.chips.five}
      </p>
      <div className="flex gap-[24px] mt-[32px]">
        <SaveButton
          isBlue={true}
          dictionary={catalog.download}
          path="/documents/price-lists/chips/document.xlsx"
          fileName={`${exportImport.priceLists.chips.title}.xlsx`}
        />
      </div>
    </section>
  )
}
