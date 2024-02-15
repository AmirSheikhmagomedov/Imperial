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
    title: `${directions.title}: ${directions.consulting.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: directions.consulting.description,
  }
}

export default async function Consulting({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { consulting },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center gap-[32px] pt-[80px]">
      <h1 className="text-black text-[48px]   font-bold text-center leading-[120%]">
        {consulting.title}
      </h1>
      <div className="flex flex-col items-center gap-[32px] max-w-[490px] max-[360px]:text-[14px] pl-[20px] max-[540px]:pl-[15px]">
        <p className="">{consulting.one}</p>
        <p className="self-start mb-[-20px]">{consulting.two}</p>
        <p className="self-start font-bold mb-[-20px]">{consulting.three}</p>
        <p className="self-start font-bold mb-[-20px]">{consulting.four}</p>
        <p className="self-start font-bold mb-[-20px]">{consulting.five}</p>
        <p className="self-start font-bold">{consulting.six}</p>
        <p>{consulting.seven}</p>
        <Link
          className="leading-[160%] font-bold  text-center underline hover:text-blue-text underline-offset-[4px]"
          href={`/${lang}/write-us`}
        >
          {consulting.eight} <br /> {consulting.nine}
        </Link>
      </div>
    </section>
  )
}
