var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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

function addNavEventListeners() {

  const nav = document.querySelector('nav');

  const navClickHandler = function() {
    this.classList.toggle('open');
    event.stopPropagation();
  };

  nav.addEventListener('click', navClickHandler);

  const bodyClickHandler = function() {
    nav.classList.remove('open');
  };

  document.body.addEventListener('click', bodyClickHandler);
}

addNavEventListeners();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function addModalEventListeners() {

  const modalTriggerElement = document.querySelector('#modal-trigger');

  const modalTriggerClickHandler = function() {
    document.body.classList.add('modal-open');
  };

  modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

  // Modal can be closed
  const modalCloseButton = document.querySelector('#modal button');

  const modalCloseButtonClickHandler = function() {
    document.body.classList.remove('modal-open');
  };

  modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
}

addModalEventListeners()