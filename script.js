
/* burger bar 
=========================================================================================================================================*/
$(document).ready(function () {
    $(function () {
      $(".hamburger-menu").click(function () {
        $(this).toggleClass("active");
        $('.menu').toggleClass("active");
        $('body').toggleClass("active");
      });
    });
  });

// modal

const modalBtn = document.getElementById('modalBtn');
const modal = document.getElementById('modal');
const btnod = document.getElementById('btnod');
const sidebar = document.getElementById('sidebar');
const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');

// Open modal
const openModal = () => {
    modal.style.display = 'inline-block';
}

// Open navbar
const openNavbar = () => {
    sidebar.style.visibility = 'visible';
}

// Close navbar
const closeNavbar = () => {
    sidebar.style.visibility = 'hidden';
}
// Event listeners
window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
/* back to top button 
==============================================================================================================================*/
var btt = document.getElementById('back_to_top'),
body = document.body,
doc_elem = document.documentElement,
offset = 100,
scroll_pos,
doc_height
is_firefox = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

doc_height = Math.max(body.scrollHeight,
    body.offsetHeight,
    doc_elem.clientHeight,
    doc_elem.scrollHeight,
    doc_elem.offsetHeight,
    );
    if (doc_height != 'undefined'){
        offset = doc_height / 4;
    }

    window.addEventListener('scroll', function(event){
        scroll_pos = body.scrollTop || doc_elem.scrollTop;
        btt.className = (scroll_pos > offset) ? 'visible':'';
    }
    );

btt.addEventListener('click', function(event){
    event.preventDefault();

    if(is_firefox){
        doc_elem.scrollTop = 0;
    } else{
        body.scrollTop = 0;
    }
}
); 



/* slider 
==================================================================================================*/
$(document).ready(function(){
    for (var i=1; i <= $('.slider__slide').length; i++){
      $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
    }
    setTimeout(function(){
      $('.slider__wrap').addClass('slider__wrap--hacked');
    }, 1000);
  })
  
  function goToSlide(number){
    $('.slider__slide').removeClass('slider__slide--active');
    $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
  }
  
  $('.slider__next, .go-to-next').on('click', function(){
    var currentSlide = Number($('.slider__slide--active').data('slide'));
    var totalSlides = $('.slider__slide').length;
    currentSlide++
    if (currentSlide > totalSlides){
      currentSlide = 1;
    }
    goToSlide(currentSlide);
  })
