import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Form from '../components/Form'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { writeUs },
  } = await getDictionary(params.lang)

  return {
    title: `${writeUs.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: writeUs.description,
  }
}

export default async function WriteUs({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { writeUs },
  } = await getDictionary(lang)

  return (
    <section className="font-bold text-2xl text-black text-center pt-[80px]">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[16px]">
        {writeUs.title}
      </h1>
      <p className="font-normal text-[#888888] leading-[100%]] text-[16px] mb-[56px]">
        {writeUs.description}
      </p>
      <Form dictionary={writeUs.form} />
    </section>
  )
}
