const $trigger = document.querySelector('.js-mobile')
const nav = document.querySelector('.js-nav')

$trigger.addEventListener('click', function() {
  nav.classList.toggle('site-header__list--show')
})
