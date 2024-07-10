import { Metadata } from 'next'
import Link from 'next/link'
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
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { importBuyer },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center gap-[32px] pt-[20px]">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%]">
        {importBuyer.title}
      </h1>
      <div className="flex flex-col items-center gap-[32px] max-w-[440px] max-[360px]:text-[14px] pl-[48px] max-[540px]:pl-[15px]">
        <p className="text-[18px] self-start mb-[-16px]">
          <Link
            className="leading-[160%] font-bold  text-center underline hover:text-blue-text underline-offset-[4px]"
            href={`https://perevalochny-kompleks.turbo.site/perevalka-gruzov`}
          >
            {importBuyer.textLink}
          </Link>{' '}
          <br /> {importBuyer.text}
        </p>
        <p className="self-start font-bold mb-[-20px]">{importBuyer.one}</p>
        <p className="self-start font-bold mb-[-20px]">{importBuyer.two}</p>
        <p className="self-start font-bold mb-[-20px]">{importBuyer.three}</p>
      </div>
    </section>
  )
}
