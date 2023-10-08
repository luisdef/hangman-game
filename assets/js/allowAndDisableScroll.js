function disableScroll() {
  // Get the current page scroll position in the vertical direction
  scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Get the current page scroll position in the horizontal direction

  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop)
  }
}

function enableScroll() {
  window.onscroll = function () {}
}
