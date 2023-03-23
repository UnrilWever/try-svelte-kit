import * as htmlparser2 from 'htmlparser2'

const str1 = '<a data-sveltekit-reload href="/">Home</a>'
const str2 = '<a href="/about">About</a>'
const str3 = '<a href="/sverdle">Sverdle</a>'

const reg = /<a.*?href="([^"]*)".*?>/g

// str1.replace(reg, ($0, $1) => {
//   console.log(args)
// })

export const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      parser.write(html)
      return html
    }
  }
}
