'use strict'

$('.menu_btn').on('click', function () {
    $(this).toggleClass('menu_btn_active')
    $('.header_nav').toggleClass('header_active')
})

// slider

let sliderItem = document.querySelectorAll('.slider_item'),
    btnLeft = document.querySelector('.left_arrows'),
    btnRight = document.querySelector('.right_arrows'),
    itemResult = 0,
    num = 0

btnRight.addEventListener('click', function () {

    window.innerWidth >= 941 ? num = 4 : num = 2

    Math.abs(itemResult / 100) > sliderItem.length - num ? itemResult = 0 : itemResult -= 100

    slide()
})

btnLeft.addEventListener('click', function () {

    window.innerWidth >= 941 ? num = 3 : num = 1

    itemResult === 0 ? itemResult = -((sliderItem.length - num) * 100) : itemResult += 100

    slide()
})


function slide() {
    for (let sliderResult of sliderItem) {
        sliderResult.style.transform = `translateX(${[itemResult]}%)`
    }
}
