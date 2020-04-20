import messages from './messages'
import * as format from 'string-template'

const key = 'locale'

const defaultLang = (window.navigator.language || '').startsWith('zh')
  ? 'zh'
  : 'en'

let nowLocale = window.localStorage.getItem(key) || defaultLang

function setLocale(locale = 'zh') {
  nowLocale = locale
  window.localStorage.setItem(key, locale)
}

export function toggleLocale() {
  setLocale(nowLocale === 'zh' ? 'en' : 'zh')
  window.location.reload()
}

export function getLocale() {
  return nowLocale
}

export default function $t(key, args) {
  const locale = nowLocale
  const reversedLocale = locale === 'en' ? 'zh' : 'en'

  const value = messages[key]
  if (!value) {
    return ''
  }

  const reversedValue = value[reversedLocale]
  const message = value[locale]

  const msg = message ? message : reversedValue ? reversedValue : ''
  return format(msg, args)
}
