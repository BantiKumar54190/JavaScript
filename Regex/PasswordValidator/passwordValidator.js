window.addEventListener('load', onWindowLoaded)

function onWindowLoaded(event) {
	const passwordElement = document.querySelector('#passwd');
	const messageElement = document.querySelector('#messageSpan');
	const patternRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()])[A-Za-z0-9!@#$%^&*()]{4,}$/g;
	
	passwordElement.addEventListener('keyup', onKeypress);
	passwordElement.addEventListener('keydown', onKeypress);
		
	function onKeypress(event) {
		const partialPassword = passwordElement.value;
		const isMatching = patternRegex.test(partialPassword);
		debugger;
		if(!isMatching && partialPassword) {
			setMessage('Invalid password', 'red');
		} 
		else if (isMatching && partialPassword){
		    setMessage('Password valid', 'green');
		} else if (partialPassword === '') {
			setMessage('', ''); 
		}
	}
	
	function setMessage(message, color) {
		messageElement.innerHTML = message;
		messageElement.style.color = color;
	}		
}
	
	