const markdownReplacements = {
  underline: text => `_${text}_`,
  italic: text => `_${text}_`,
  bold: text => `**${text}**`,
  strikethrough: text => `~~${text}~~`,
  link: (text, url) => `[${text}](${url})`
}

const htmlReplacements = {
  underline: text => `<u>${text}</u>`,
  italic: text => `<i>${text}</i>`,
  bold: text => `<b>${text}</b>`,
  strikethrough: text => `<s>${text}</s>`,
  link: (text, url) => `<a href="${url}">${text}</a>`
}

module.exports = { markdownReplacements, htmlReplacements }

