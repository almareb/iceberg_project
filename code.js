
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

// odal

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
btnod.addEventListener('click', openModal);
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
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}