'use client'

import { motion } from 'framer-motion'
import { Locale } from '@/i18n.config'
import Button from './Button'

export default function HomePage({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-348px)] pt-[100px] max-[500px]:pt-[0px]">
      <motion.h1
        className="mx-[8px] font-bold text-[56px] leading-[140%] max-w-[846px] text-center mb-[24px] mt-[-50px] max-[960px]:text-[48px] max-[800px]:text-[40px] max-[680px]:text-[36px] max-[600px]:text-[28px] max-[540px]:mb-[20px] max-[500px]:mt-[32px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {dictionary.title}
      </motion.h1>
      <motion.p
        className="text-[18px] text-[#888888] leading-[140%] max-w-[520px] text-center mb-[48px] max-[680px]:text-[16px] max-[680px]:max-w-[400px] max-[480px]:text-[14px] max-[480px]:max-w-[350px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {dictionary.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <Button
          pushTo={`/${lang}/export-import/catalog-fmcg`}
          dictionary={dictionary.button}
          className="max-[680px]:text-[16px] max-[480px]:text-[14px]"
        />
      </motion.div>
    </section>
  )
}
