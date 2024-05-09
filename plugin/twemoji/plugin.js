const RevealTwemoji = () => ({
  id: 'revealTwemoji',
  init (reveal) {
    reveal.on('ready', () => {
      twemoji.parse(reveal.getRevealElement(), {
        folder: 'svg',
        ext: '.svg'
      })
    })
  }
})

export default RevealTwemoji