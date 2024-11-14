import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import coffeeImage from '../../../../public/assets/images/coffee.png'
import chipsImage from '../../../../public/assets/images/chips.png'
import nesquikImage from '../../../../public/assets/images/nesquik.png'
import nutellaImage from '../../../../public/assets/images/nutella.png'
import nutyjoyImage from '../../../../public/assets/images/nutyjoy.png'
import kalyonImage from '../../../../public/assets/images/kalyon.png'
import aceImage from '../../../../public/assets/images/ace.png'
import dubaiChocolateImage from '../../../../public/assets/images/dubaiChocolate.png'
import hariboImage from '../../../../public/assets/images/haribo.png'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { exportImport },
  } = await getDictionary(params.lang)

  return {
    title: `${exportImport.title}: ${exportImport.priceLists.title} | ${
      params.lang === 'ru' ? 'Империал' : 'Imperial'
    }`,
    description: exportImport.priceLists.description,
  }
}

export default async function PriceLists({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const {
    page: { priceLists },
  } = await getDictionary(lang)

  return (
    <section className="flex flex-col items-center max-w-[1000px] mt-[100px] max-[520px]:mt-[48px]">
      <h1 className="text-black text-[48px] font-bold text-center leading-[120%] mb-[48px]">
        {priceLists.title}
      </h1>
      <div className="flex gap-[40px] flex-wrap justify-center">
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/coffee`}
        >
          <Image
            src={coffeeImage}
            width={130}
            height={100}
            alt="Sweets"
            className="mt-[-5px]"
          />
          <span className="mt-auto">{priceLists.coffee}</span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/chips`}
        >
          <Image
            src={chipsImage}
            width={100}
            height={100}
            alt="Sweets"
            className="mt-[-10px]"
          />
          <span className="mt-auto">{priceLists.chips}</span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/nesquik`}
        >
          <Image
            src={nesquikImage}
            width={140}
            height={100}
            alt="Sweets"
            className="mt-[-30px]"
          />
          <span className="mt-auto">NESTLE NESQUIK</span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/nutella`}
        >
          <Image
            src={nutellaImage}
            width={140}
            height={100}
            alt="Sweets"
            className="mt-[-25px]"
          />
          <span className="mt-auto whitespace-nowrap">FERRERO NUTELLA</span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/nutyjoy`}
        >
          <Image
            src={nutyjoyImage}
            width={72}
            height={100}
            alt="Sweets"
            className="mt-[-25px]"
          />
          <span className="mt-auto whitespace-nowrap">NutyJoy</span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/dubai-chocolate`}
        >
          <Image
            src={dubaiChocolateImage}
            width={180}
            height={120}
            alt="Sweets"
            className="mt-[-10px]"
          />
          <span className="mt-[10px] text-center leading-[140%]">
            {priceLists.dubaiChocolate}
          </span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/haribo`}
        >
          <Image
            src={hariboImage}
            width={100}
            height={120}
            alt="Sweets"
            className="mt-[-10px]"
          />
          <span className="mt-[10px] text-center leading-[140%]">
            {priceLists.haribo}
          </span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/kalyon`}
        >
          <Image
            src={kalyonImage}
            width={120}
            height={100}
            alt="Sweets"
            className="mt-[-30px]"
          />
          <span className="mt-[10px] text-center leading-[140%]">
            {priceLists.kalyon}
          </span>
        </Link>
        <Link
          className="w-[200px] h-[200px] border-[1px] border-grey-border-color rounded-[4px]  flex flex-col items-center p-[25px]
			 bg-white pt-[40px] hover:bg-blue-100"
          href={`/${lang}/export-import/price-lists/ace`}
        >
          <Image
            src={aceImage}
            width={110}
            height={120}
            alt="Sweets"
            className="mt-[-20px]"
          />
          <span className="mt-[10px] text-center leading-[140%]">
            {priceLists.ace}
          </span>
        </Link>
      </div>
    </section>
  )
}
