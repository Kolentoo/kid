$(function(){

    indexSwiper1();
    indexSwiper2();


    mobileMenu();

})

function indexSwiper1(){
    if($('.swiper1').get(0)){
        var mySwiper = new Swiper ('.swiper1', {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination1',
            
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next1',
            prevButton: '.swiper-button-prev1',
            
        })  
    }
}

function indexSwiper2(){
    if($('.swiper2').get(0)){
        var mySwiper = new Swiper ('.swiper2', {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination2',
            
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next2',
            prevButton: '.swiper-button-prev2',
            paginationType: 'fraction'
            
        })  
    }
}

function mobileMenu(){
    $('.switch').find('.icon-menu').on('click',function(){
        $('.icon-menu').addClass('hide');
        $('.icon-close').removeClass('hide');
        $('.nav-body').removeClass('nav-off');
    })
    $('.switch').find('.icon-close').on('click',function(){
        $('.icon-menu').removeClass('hide');
        $('.icon-close').addClass('hide');
        $('.nav-body').addClass('nav-off');
    })
}