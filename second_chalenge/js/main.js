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
});

