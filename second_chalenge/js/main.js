const showText = (e) =>{
	e.currentTarget.nextSibling.nextSibling.classList.toggle('services__card-text');
	e.currentTarget.nextSibling.nextSibling.classList.toggle('services__card-text--visible');	
}

const showMore = (objectArr) => {
	objectArr.forEach((object) => {
		object.classList.toggle()
	})
}

const blueButtonArr = [];
const redButtonArr = [];

document.querySelector('btn--blue').addEventListener(() => showMore(blueButtonArr));


document.addEventListener('scroll', () => {
	if(window.scrollTop > 50){
		document.querySelector('.navbar').style.backgroundColor = 'transparent';
	}
});

