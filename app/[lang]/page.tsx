import { Metadata } from 'next'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import HomePage from './components/Home'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { home },
  } = await getDictionary(params.lang)

  return {
    title: `${params.lang === 'ru' ? 'Империал' : 'Imperial'} | ${home.title}`,
    description: home.description,
  }
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return <HomePage dictionary={page.main} lang={lang} />
}
