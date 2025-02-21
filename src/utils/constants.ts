import { isDev } from './isDev'
export const SITE_TITLE = 'OpenGPT - Create ChatGpt Application in seconds'
export const SITE_DESC =
  '立即使用海量的 ChatGPT 应用，或在几秒钟内创建属于自己的应用。'
// 'Access a vast library of pre-built ChatGPT applications or create your own in just seconds, with OpenGPT platform.'

export const RATE_LIMIT_COUNT = 15

export const HOST_URL = isDev
  ? 'http://localhost:3000'
  : `https://${process.env.VERCEL_URL}` // can only be used on the server
console.log('HOST_URL ---------->', HOST_URL)
