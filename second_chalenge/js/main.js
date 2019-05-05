const burgerButton = document.querySelector('.nav__burger');
const navMenu  =document.querySelector('.nav');

burgerButton.addEventListener('click', () =>{
  navMenu.classList.toggle('visible');
});


const showText = (e) =>{
	e.currentTarget.nextSibling.nextSibling.classList.toggle('services__card-text');
	e.currentTarget.nextSibling.nextSibling.classList.toggle('services__card-text--visible');	
}

const showMore = (objectArr) => {
	objectArr.forEach((object) => {
		object.style.display === 'flex' ? object.style.display = 'none' : object.style.display = 'flex';
	});
}

const blueButtonArr = [document.querySelector('.gallery__img--6'), document.querySelector('.gallery__img--7')];
const redButtonArr = [document.querySelector('.blog__card--4'), document.querySelector('.blog__card--5')];

document.querySelector('.btn--blue').addEventListener('click', () => showMore(blueButtonArr));

document.querySelector('.btn--red').addEventListener('click', () => showMore(redButtonArr));


document.addEventListener('scroll', () => {

	if(window.pageYOffset > 50){
		document.querySelector('.navbar').style.backgroundColor = 'white';
	}else{
		document.querySelector('.navbar').style.backgroundColor = 'transparent';
	}

	if(window.pageYOffset < document.getElementById('about').offsetTop){
		document.querySelector('.nav__navbar :nth-child(1)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__navbar :nth-child(2)').style.borderTop = 'solid 3px transparent';
	} else if (window.pageYOffset >= document.getElementById('about').offsetTop && window.pageYOffset < document.getElementById('services').offsetTop) {
		document.querySelector('.nav__navbar :nth-child(2)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__navbar :nth-child(1)').style.borderTop = 'solid 3px transparent';
		document.querySelector('.nav__navbar :nth-child(3)').style.borderTop = 'solid 3px transparent';
	} else if (window.pageYOffset >= document.getElementById('services').offsetTop && window.pageYOffset < document.getElementById('gallery').offsetTop) {
		document.querySelector('.nav__navbar :nth-child(3)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__navbar :nth-child(2)').style.borderTop = 'solid 3px transparent';
		document.querySelector('.nav__navbar :nth-child(4)').style.borderTop = 'solid 3px transparent';
	} else if (window.pageYOffset >= document.getElementById('gallery').offsetTop && window.pageYOffset < document.getElementById('blog').offsetTop) {
		document.querySelector('.nav__navbar :nth-child(4)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__navbar :nth-child(3)').style.borderTop = 'solid 3px transparent';
		document.querySelector('.nav__navbar :nth-child(5)').style.borderTop = 'solid 3px transparent';
	} else if (window.pageYOffset >= document.getElementById('blog').offsetTop  && window.pageYOffset < document.getElementById('contact').offsetTop) {
		document.querySelector('.nav__navbar :nth-child(5)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__navbar :nth-child(4)').style.borderTop = 'solid 3px transparent';
		document.querySelector('.nav__navbar :nth-child(6)').style.borderTop = 'solid 3px transparent';
	} else if (window.pageYOffset >= document.getElementById('contact').offsetTop) {
		document.querySelector('.nav__navbar :nth-child(6)').style.borderTop = 'solid 3px #FF6033';
		document.querySelector('.nav__navbar :nth-child(5)').style.borderTop = 'solid 3px transparent';
	}
});

