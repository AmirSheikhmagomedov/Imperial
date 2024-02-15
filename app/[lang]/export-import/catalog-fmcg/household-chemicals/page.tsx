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
    title: `${exportImport.catalogFMCG['household-chemicals'].title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.catalogFMCG['household-chemicals'].description,
  }
}

export default async function HouseholdChemicals({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { catalog },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[48px]">
        {catalog['household-chemicals-title']}
      </h1>
      <div className="flex gap-[24px]">
        <ViewButton
          dictionary={catalog.watch}
          className="self-start"
          documentName="household-chemicals-catalog"
        />
        <SaveButton
          dictionary={catalog.download}
          path="/documents/household-chemicals-catalog/document.pdf"
          fileName={`${catalog['household-chemicals-title']}.pdf`}
        />
      </div>
    </section>
  )
}
