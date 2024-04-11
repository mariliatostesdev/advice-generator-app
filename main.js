let adviceIdSection = document.querySelectorAll('.advice-name-number')[0];
let adviceDice = document.querySelectorAll('.advice-dice')[ 0 ];
let adviceSection = document.querySelectorAll('.advice')[ 0 ];

generateAdvice();

adviceDice.addEventListener('click', generateAdvice);

async function generateAdvice() {
	let newAdvice = await fetch('https://api.adviceslip.com/advice');
	let currentAdvice = await newAdvice.json();
	JSON.parse(JSON.stringify(currentAdvice));
	let adviceId = currentAdvice.slip.id;
	currentAdvice = currentAdvice.slip.advice;
	adviceSection.innerHTML = '"' + currentAdvice + '"';
	adviceIdSection.innerHTML = "ADVICE " + adviceId;
}

