import './main.css'
import 'normalize.css'

import {parseMath, M} from 'jqmath'
const inputElm = document.getElementById('input')
const resultElm = document.getElementById('result')

const testText = 'just write some latex in like \n $$ $ax^2+bx+c=0$ with $a≠0$'
resultElm.innerHTML = testText
inputElm.innerHTML = testText

parseMath(resultElm)

function onInput (event) {
  resultElm.innerHTML = event.target.value
  parseMath(resultElm)
}

inputElm.addEventListener('input', onInput)
