export const i18n = {
  locales: ['ru', 'en', 'tr'],
  defaultLocale: 'ru',
} as const

export type Locale = (typeof i18n)['locales'][number]
