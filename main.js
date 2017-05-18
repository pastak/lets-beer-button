(function () {
  const userNameInput = document.getElementById('userNameInput')
  const textInput = document.getElementById('textInput')
  const buttonTextInput = document.getElementById('buttonTextInput')

  const previewArea = document.getElementById('previewArea')
  const pasteHtml = document.getElementById('pasteHtml')

  const generateButtonTag = function () {
    const buttonTag = document.createElement('button')
    buttonTag.className = 'lets-drink-beer-button'
    buttonTag.dataset['userName'] = userNameInput.value
    buttonTag.dataset['text'] = textInput.value
    buttonTag.dataset['buttonText'] = buttonTextInput.value

    return buttonTag.outerHTML
  }

  const generateScriptTag = function () {
    const scriptTag = document.createElement('script')
    scriptTag.src = `//${location.hostname}/lets-beer-button/embed.js`
    return scriptTag.outerHTML
  }

  const onChange = function () {
    previewArea.innerHTML = generateButtonTag()
    pasteHtml.textContent = generateButtonTag() + '\n' + generateScriptTag()
    __updateLetsBeerButton__()
  }

  ;[userNameInput, textInput, buttonTextInput].forEach(function (elm) {
    elm.addEventListener('keyup', onChange)
  })

  document.getElementById('copyButton').addEventListener('click', function () {
    const range = document.createRange()
    range.selectNode(pasteHtml)
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
  })

})()
