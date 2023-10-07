const searchEl = document.querySelector('.search-bar-countainer')

const magnfireEl = document.querySelector('.magnifier')


magnfireEl.addEventListener('click', function () {
    searchEl.classList.toggle('active')
})
