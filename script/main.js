'use strict'

$('.menu_btn').on('click', function (){
    $(this).toggleClass('menu_btn_active')
    $('.header_nav').toggleClass('header_active')
})


// slider

let sliderItem = document.querySelectorAll('.slider_item'),
    btnLeft = document.querySelector('.left_arrows'),
    btnRight = document.querySelector('.right_arrows'),
    itemResult = 0;

btnRight.addEventListener('click', function (){
    itemResult += 310
    slide()
})

btnLeft.addEventListener('click', function (){
    itemResult -= 310
    slide()
})


function slide (){
    for( let sliderResult of sliderItem){
        sliderResult.style.transform = `translateX(${[itemResult]}px)`
    }
}
