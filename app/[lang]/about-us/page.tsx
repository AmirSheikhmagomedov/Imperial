import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { aboutUs, home },
  } = await getDictionary(params.lang)

  return {
    title: `${aboutUs.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: home.description,
  }
}

export default async function AboutUs({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { aboutUs },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center gap-[32px] pt-[100px]">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%]">
        {aboutUs.title}
      </h1>
      <div className="flex flex-col items-center gap-[32px] max-w-[500px] max-[360px]:text-[14px] pl-[10px]">
        <p>
          <b>IMPERIAL LiMiTED ŞiRKETi</b>
          {aboutUs.one}
        </p>
        <p>{aboutUs.two}</p>
        <p>{aboutUs.three}</p>
        <p>{aboutUs.four}</p>
        <p>{aboutUs.five}</p>
        <p>{aboutUs.six}</p>
      </div>
    </section>
  )
}
