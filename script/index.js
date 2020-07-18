'use strict'

let header = document.getElementById('header')
let navbar = document.getElementById('gnb')

header.addEventListener('mouseover', () => {
  header.classList.add('on')
})
header.addEventListener('focus', () => {
  header.classList.add('on')
})
header.addEventListener('mouseout', () => {
  header.classList.remove('on')
})

let last_known_scroll_position = 0
let ticking = false

function doSomething(scroll_pos) {
  scroll_pos !== 0 ? header.classList.add('on') : header.classList.remove('on')
}

window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(last_known_scroll_position)
      ticking = false
    })

    ticking = true
  }
})

navbar.addEventListener('mouseover', () => {
  navbar.classList.add('open')
  header.classList.add('open')
})
navbar.addEventListener('mouseout', () => {
  navbar.classList.remove('open')
  header.classList.remove('open')
})
