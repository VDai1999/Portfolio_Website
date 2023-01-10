window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
}

function reveal() {
	var reveals = document.querySelectorAll(".reveal");
  
	for (var i = 0; i < reveals.length; i++) {
	  var windowHeight = window.innerHeight;
	  var elementTop = reveals[i].getBoundingClientRect().top;
	  var elementVisible = 150;
  
	  if (elementTop < windowHeight - elementVisible) {
		reveals[i].classList.add("active");
	  } else {
		reveals[i].classList.remove("active");
	  }
	}
  }
  
window.addEventListener("scroll", reveal);