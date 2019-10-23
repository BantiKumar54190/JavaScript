'use strict';

window.addEventListener('load', onWindowLoaded);

function onWindowLoaded(event) {
	const commentElement = document.querySelector('#comment');
	const addtextElement = document.querySelector('#text'); 
	const commentMessageElement = document.querySelector('#commentMessage');
	const findTextElement = document.querySelector('#findText');
	let obtainedTextValue = '';
	 
	addtextElement.addEventListener('click', onClick);
	findTextElement.addEventListener('keyup', onPatternEntered);
	
	function onClick(event) {
		obtainedTextValue = commentElement.value;
		commentElement.value = '';
		
		commentMessageElement.style.color = 'blue';
		commentMessageElement.innerHTML = obtainedTextValue;
	}
	
	function onPatternEntered(event) { 
		const word = findTextElement.value;
		if (!word) {
			commentMessageElement.innerHTML = obtainedTextValue;
			return;
		}
		
		const pattern = new RegExp('\\b' + word + '\\b', 'g');
		let match;
		const patternIndices = [];
		
		while ((match = pattern.exec(obtainedTextValue)) !== null) {
			patternIndices.push({ start: match.index, 
								  end: match.index + word.length });
		}
		
	let highlightedString = patternIndices.reduceRight((acc, { start, end }) => {
		return `${acc.substring(0, start)}<mark>${acc.substring(start, end)}</mark>${acc.substring(end)}`;
	}, obtainedTextValue);
		
		commentMessageElement.innerHTML = highlightedString ? highlightedString : obtainedTextValue;
	}
}	