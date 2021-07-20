var slideIndex = 1;

function more(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    slides[slideIndex - 1].style.display = "block";
  }
  setTimeout(showSlides, 2000);
}

showSlides(slideIndex);
