


$(function(){
  $('.header__form-search').on('click', function(e){
    e.preventDefault();
  })




  document.querySelectorAll('.counter').forEach((counter) => {
    const btnMinus = counter.querySelector('.minus');
    const value = counter.querySelector('.counter__value');
    const btnPlus = counter.querySelector('.plus');
  
    btnMinus.addEventListener('click', () => {
      if (parseInt(value.innerText) > 1) {
        value.innerText = --value.innerText;
        disabled();
      } 
    });
  
    btnPlus.addEventListener('click', () => {
      value.innerText = ++value.innerText;
      disabled();
    });
    
    function disabled() {
      if (parseInt(value.innerText) == 1) {
        btnMinus.classList.add('disabled');
      } else {
        btnMinus.classList.remove('disabled');
      }
    }
  });
  
$('.popiral-category__select-arrow').on('click', function(e){

  const arrow = document.querySelector('.popiral-category__select-arrow');

  arrow.addEventListener('click', ()=> {
    
  })
})



  $(document).ready(function(){
    $('.popiral-category__input').inputmask({"mask": "+380-99-999-9999"}); 
  });

  $('.menu__mob').on('click', function(e){
    e.preventDefault();
    debugger;
    $('.menu__mob').toggleClass('menu__mob--active')
    $('body').toggleClass('anchor')
    $('.header__opacity').toggleClass('is-active')
    if(this.classList.contains('menu__mob--active')){
      $('.menu__mob').css({'background':'#feddff'});
      $('.menu__burgerMob').css({'display':'block'});
      $('.menu-bottom').css({'display':'none'});
      $('.top').css({'display':'none'});
      $('.top__images').css({'display':'none'});
    }else{
      $('.menu__mob').css({'background':'none'});
      $('.menu__burgerMob').css({'display':'none'});
      $('.menu-bottom').css({'display':'flex'});
      $('.top__images').css({'display':'block'});
      $('.top').css({'display':'block'});
    }
  })
  $('.menu__burgerMob-blockClose').on('click', function(e){
    $('.top').css({'display':'block'});
    $('.header__opacity').toggleClass('is-active')
     $('.menu__burgerMob').css({'display':'none'}); 
     $('.menu__mob').css({'background':'none'});
     $('.menu__burgerMob').css({'display':'none'});
     $('.menu-bottom').css({'display':'flex'});
     $('body').toggleClass('anchor')
     $('.top__images').css({'display':'block'});
     $('.menu__mob').toggleClass('menu__mob--active')
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





