const showText = (e) =>{
	if(e.currentTarget.nextSibling.nextSibling.style.display === 'none'){
		e.currentTarget.nextSibling.nextSibling.style.display = 'block';
	}else{
		e.currentTarget.nextSibling.nextSibling.style.display = 'none';
	}
	
}