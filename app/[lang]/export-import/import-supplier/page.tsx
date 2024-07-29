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
    title: `${exportImport.title}: ${exportImport.importSupplier.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.importSupplier.description,
  }
}

export default async function ImportBuyer({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { importSupplier },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center gap-[32px] pt-[100px] max-w-[600px]">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%]">
        {importSupplier.title}
      </h1>
      <p className="text-[18px] max-w-[400px] text-center ">
        {importSupplier.text}
      </p>
      <div>
        <p className="text-[20px] font-bold">
          {importSupplier.parallelImport.title}
        </p>
        <p className="mb-[20px]">{importSupplier.parallelImport.description}</p>
        <p className="font-bold mb-[12px]">
          {importSupplier.parallelImport.listTitle}:
        </p>
        <div className="mb-[40px]">
          <p>✅ {importSupplier.parallelImport.listOne}</p>
          <p>✅ {importSupplier.parallelImport.listTwo}</p>
          <p>✅ {importSupplier.parallelImport.listThree}</p>
          <p>✅ {importSupplier.parallelImport.listFour}</p>
          <p>✅ {importSupplier.parallelImport.listFive}</p>
          <p>✅ {importSupplier.parallelImport.listSix}</p>
        </div>
        <div>
          <p className="text-[20px] font-bold">
            {importSupplier.customs.title}
          </p>
          <p className="mb-[20px]">{importSupplier.customs.description}</p>
          <Link
            className="leading-[160%] font-bold text-[18px] underline hover:text-blue-text underline-offset-[8px]"
            href={'https://sama-nova.com'}
          >
            <p className="text-center">{importSupplier.customs.text}</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
