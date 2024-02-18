const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
document.addEventListener("DOMContentLoaded", function() {
	const arrowLeft = document.getElementById('arrow_left');
	const arrowRight = document.getElementById('arrow_right');
	const dotsContainer = document.querySelector('.dots');
	let activeIndex = 0;
  
	arrowLeft.addEventListener('click', slideLeft);
	arrowRight.addEventListener('click', slideRight);

// Création des dots
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (i === activeIndex) {
	  dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');
  for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener('click', () => {
	  changeSlide(i);
	});
  }
});