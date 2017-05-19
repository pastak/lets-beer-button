(function () {
  window.__updateLetsBeerButton__ = function () {
    const twitterIntentUrl = 'https://twitter.com/intent/tweet'
    const defaultText = '飲みに行くぞ!!!🍺'
    const defaultButtonText = '@${username}を飲みに誘う🍺'

    const buttonElms = document.querySelectorAll('.lets-drink-beer-button')
    Array.prototype.slice.apply(buttonElms)
      .filter(function (buttonElm) {return !buttonElm.classList.contains('lets-drink-beer-button-loaded')})
      .forEach(function (buttonElm) {
        const text = buttonElm.dataset['text'] || defaultText
        const userName = buttonElm.dataset['userName'] || 'pastak'
        const buttonText = buttonElm.dataset['buttonText'] || defaultButtonText

        const fullText = `@${userName} ${text}`
        const url = `${twitterIntentUrl}?text=${encodeURIComponent(fullText)}`
        buttonElm.textContent = buttonText.replace(/\$\{username\}/g, userName)
        buttonElm.classList.add('lets-drink-beer-button-loaded')
        buttonElm.addEventListener('click', function () {
          window.open(url)
        })
      })
  }
  __updateLetsBeerButton__()
})()
