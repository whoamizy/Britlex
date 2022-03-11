"use strict";


const burgerButton = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

if(burgerButton){
	burgerButton.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		burgerButton.classList.toggle('open');
		burgerMenu.classList.toggle('open');
	})
};

const menuLinks = document.querySelectorAll('.header-top__link[data-goto]');

if (menuLinks.length > 0){
	menuLinks.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e){
		const menuLink = e.target;

		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}

	}
};

const menuLinksBurger = document.querySelectorAll('.burger-menu__link[data-goto]');

if (menuLinksBurger.length > 0){
	menuLinksBurger.forEach(menuLink =>{
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e){
		const menuLink = e.target;

		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			if(burgerButton.classList.contains('open')){
				document.body.classList.remove('lock');
				burgerButton.classList.remove('open');
				burgerMenu.classList.remove('open');
			}


			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}

	}
};


