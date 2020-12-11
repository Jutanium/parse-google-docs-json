const markdownReplacements = {
  underline: text => `_${text}_`,
  italic: text => `_${text}_`,
  bold: text => `**${text}**`,
  strikethrough: text => `~~${text}~~`,
  link: (text, url) => `[${text}](${url})`
}

module.exports = { markdownReplacements }

