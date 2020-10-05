$(function(){


$('.gallery__slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: 'linear',
  prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
});
  
$('.mmenu__btn').on('click', function(){
  $('.menu__list').slideToggle();
});
});