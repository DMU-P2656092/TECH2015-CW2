// Sets the slideshow value to 1 to show the first image. \\
var slideIndex = 1;
showSlides(slideIndex);
// Adds one to the slideshow value when forward arrow is pressed. \\
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Displays slide onscreen according to slideshow value. \\
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Uses class name to add funtions to the elements of the slideshow. \\
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  // Process of checking variable value to ensure correct image is shown onscreen based on viewer input. \\
  // If value is less than 1 then certain image will display. //
  // If variable value is greater than 1 the next image will display. //
  if (n > slides.length) {
    slideIndex = 1
  }
  
  if (n < 1) {
    slideIndex = slides.length
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
