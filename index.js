
function getFirstSelector(selector) {
  var selected = document.querySelector(`${selector}`)
  return selected
}

//- Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
//(`#` is used for IDs in selectors — but you knew that because you
//[read the docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors),
//right? :) ). (Note that in `index.html` `#nested` and `.target` just _happen_ to be `
//div`s. This method should work with arbitrary elements.)

function nestedTarget() {
  var selected = document.querySelector('div#nested div.target')
  return selected
}

function increaseRankBy(n) {
  var selected = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < selected.length; i++) {
     selected[i].innerHTML = parseInt(selected[i].innerHTML) + n
  }
}

function deepestChild() {
  var selected = document.querySelector('div#grand-node div div div div')
  return selected
}
