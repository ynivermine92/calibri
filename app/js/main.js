$(function(){

  $('.menu__mob').on('click', function(e){
    e.preventDefault();
    $('.menu__mob').toggleClass('menu__mob--active')
    if(this.classList.contains('menu__mob--active')){
      $('.menu__mob').css({'background':'#feddff'});
      $('.menu__burgerMob').css({'display':'block'});
      $('.menu-bottom').css({'display':'none'});
    }else{
      $('.menu__mob').css({'background':'none'});
      $('.menu__burgerMob').css({'display':'none'});
      $('.menu-bottom').css({'display':'flex'});
    }
  })
  $('.menu__burgerMob-blockClose').on('click', function(e){
     $('.menu__burgerMob').css({'display':'none'}); 
  })

  window.matchMedia('(max-width: 1100px)').addListener(e=>{
    $('.menu__burgerMob').css({'display':'none'}); 
    $('.menu__mob').css({'background':'none'});
  });


 $('.slider__container').slick({
  arrows: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 872,
      settings: {
        infinite: true,
      }
    }
  ]
}); 
$('.slider__container-mob').slick({
  arrows: false,
  dots:true,
})

})





