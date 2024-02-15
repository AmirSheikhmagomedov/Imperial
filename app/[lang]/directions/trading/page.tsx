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
    seo: { directions },
  } = await getDictionary(params.lang)

  return {
    title: `${directions.title}: ${directions.trading.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: directions.trading.description,
  }
}

export default async function Trading({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { trading },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col gap-[32px] items-center">
      <h1 className="text-black text-[48px]   font-bold text-center leading-[120%]">
        {trading.title}
      </h1>
      <div className="flex flex-col items-center gap-[32px] max-w-[400px] max-[360px]:text-[14px] pl-[10px]">
        <p>{trading.one}</p>
        <p>{trading.two}</p>
        <Link
          className="leading-[160%] font-bold  text-center underline hover:text-blue-text underline-offset-[4px]"
          href={`/${lang}/export-import`}
        >
          {trading.three}
        </Link>
      </div>
    </section>
  )
}
