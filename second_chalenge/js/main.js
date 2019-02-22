const showText = (e) =>{
	e.currentTarget.nextSibling.nextSibling.classList.toggle('services__card-text');
	e.currentTarget.nextSibling.nextSibling.classList.toggle('services__card-text--visible');	
}

document.addEventListener('scroll, '() => {
	if(window.scrollTop > 50){
		document.querySelector('.navbar').style.backgroundColor = 'white';
	}
});