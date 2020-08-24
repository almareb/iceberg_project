
/* burger bar 
=========================================================================================================================================*/
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


/* back to top button 
==============================================================================================================================*/
var btn = document.getElementById('back_to_top'),
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
        btn.className = (scroll_pos > offset) ? 'visible':'';
    }
    );

btn.addEventListener('click', function(event){
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