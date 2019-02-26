const showText = (e) =>{
	e.currentTarget.nextSibling.nextSibling.classList.toggle('services__card-text');
	e.currentTarget.nextSibling.nextSibling.classList.toggle('services__card-text--visible');	
}

const showMore = (objectArr) => {
	objectArr.forEach((object) => {
		//object.classList.toggle()
		console.log(object);
		object.style.visibility = 'visible';
		if(object.style.visibility == 'hidden'){
			console.log('shit happens');
			object.style.visibility = 'visible';
		}
	})
}

const blueButtonArr = [document.querySelector('.gallery__img--6'), document.querySelector('.gallery__img--7')];
const redButtonArr = [];

document.querySelector('.btn--blue').addEventListener('click', () => showMore(blueButtonArr));


document.addEventListener('scroll', () => {
	if(window.scrollTop > 50){
		document.querySelector('.navbar').style.backgroundColor = 'transparent';
	}
});

