import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { Locale, i18n } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Header from './components/Header'
import Footer from './components/Footer'
import bg from '../../public/assets/images/bg.png'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const {
    seo: { home, keywords },
  } = await getDictionary(params.lang)

  return {
    title: home.title,
    description: home.description,
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
      userScalable: false,
    },
    openGraph: {
      images: [
        {
          url: 'https://imperial-company.com/assets/opengraph-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
    keywords: keywords,
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body
        className={`${inter.className} bg-[length:30%] max-[1200px]:bg-[length:50%] max-[800px]:bg-[length:60%] max-[600px]:bg-[length:80%] max-[400px]:bg-[length:100%] `}
        style={{ backgroundImage: `url(${bg.src})` }}
        suppressHydrationWarning
      >
        <div className="min-h-[100%] flex flex-col">
          <Header lang={params.lang} dictionary={dictionary} />
          <main className="pb-[100px] pt-[100px] px-[24px] flex-auto flex items-center justify-center max-[480px]:pb-[50px] max-[480px]:pt-[100px] ">
            {children}
          </main>
          <Footer lang={params.lang} />
        </div>
        <ToastContainer />
      </body>
    </html>
  )
}
