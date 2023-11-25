import { Metadata } from 'next'
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
    title: `${directions.title}: ${directions.production.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: directions.production.description,
  }
}

export default async function Production({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { production },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center gap-[32px]">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%]">
        {production.title}
      </h1>
      <div className="flex flex-col items-center gap-[32px] max-w-[400px] max-[360px]:text-[14px] pl-[30px] pr-[10px]">
        <p>{production.one}</p>
        <p>{production.two}</p>
      </div>
    </section>
  )
}
