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
  const { navigation } = await getDictionary(params.lang)

  return {
    title: `${navigation.subMenu2.spicesVietnam} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: navigation.subMenu2.spicesVietnam,
  }
}

export default async function FoodProducts({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { catalog },
    navigation,
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[48px]">
        {navigation.subMenu2.spicesVietnam}
      </h1>
      <div className="flex gap-[24px]">
        <ViewButton
          dictionary={catalog.watch}
          className="self-start"
          documentName="spicesVietnam-catalog"
        />
        <SaveButton
          dictionary={catalog.download}
          path="/documents/spicesVietnam-catalog/document.pdf"
          fileName={`${navigation.subMenu2.spicesVietnam}.pdf`}
        />
      </div>
    </section>
  )
}
