import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { exportImport },
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.description,
  }
}

export default async function ExportImport({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { exportImport },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center pt-[80px]">
      <h1 className="text-black text-[48px] font-bold text-center mb-[32px] leading-[120%]">
        {exportImport.title}
      </h1>
      <div className="flex flex-col items-center gap-[32px] max-w-[600px] max-[360px]:text-[14px] pl-[50px] max-[700px]:pl-[15px] max-[428px]:pl-[5px]">
        <p>
          {exportImport.one[0]} <b>IMPERIAL LiMiTED ŞiRKET</b>
          {exportImport.one[1]}
        </p>
        <p className="mb-[-15px]">{exportImport.two}</p>
        <p className="mb-[-10px]">
          <b>{exportImport.three}</b> <br /> {exportImport.four}
        </p>
        <p className="mb-[-10px]">
          <b>{exportImport.five}</b> <br /> {exportImport.six}
        </p>
        <p className="mb-[-10px]">
          <b>{exportImport.seven}</b> <br /> {exportImport.eight}
        </p>
        <p className="self-start mb-[-10px]">
          <b>{exportImport.nine}</b> <br /> {exportImport.ten}
        </p>
        <p className="self-start mb-[-10px]">
          <b>{exportImport.eleven}</b> <br /> {exportImport.twelve}
        </p>
        <p className="self-start">
          <b>{exportImport.fourteen}</b> <br /> {exportImport.fiveteen}
        </p>
      </div>
    </section>
  )
}
