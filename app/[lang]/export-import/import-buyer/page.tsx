import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { exportImport },
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.title}: ${exportImport.importBuyer.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.importBuyer.description,
  }
}

export default async function ImportBuyer({
  params,
}: {
  params: { lang: Locale }
}) {
  const { inDev } = await getDictionary(params.lang)

  return (
    <section>
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[16px] max-[398px]:text-[37px]">
        {inDev}
      </h1>
    </section>
  )
}
