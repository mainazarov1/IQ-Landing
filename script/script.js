function userProgress(time) {
	let start = 0;
	let timer = Math.round(time * 10);
	let progressElement = document.getElementById('progress');
	let intervalId = setInterval(function () {
		if (start > 80) {
			clearInterval(intervalId);
			chang();
		}
		else {
			progressElement.value = start;
		}
		start++;
	}, timer);
} 
userProgress(1.6);

function chang() {
	document.querySelector('#percent').innerHTML = start + "%";
}


function userProgress2(time) {
	let start = 0;
	let timer = Math.round(time * 10);
	let progressElement = document.getElementById('progress2');
	let intervalId = setInterval(function () {
		if (start > 90) {
			clearInterval(intervalId);
		}
		else {
			progressElement.value = start;
		}
		start++;
	}, timer);
} 
userProgress2(1.3);

function userProgress3(time) {
	let start = 0;
	let timer = Math.round(time * 10);
	let progressElement = document.getElementById('progress3');
	let intervalId = setInterval(function () {
		if (start > 95) {
			clearInterval(intervalId);
		}
		else {
			progressElement.value = start;
		}
		start++;
	}, timer);
} 
userProgress3(1.1);

function userProgress4(time) {
	let start = 0;
	let timer = Math.round(time * 10);
	let progressElement = document.getElementById('progress4');
	let intervalId = setInterval(function () {
		if (start > 98) {
			clearInterval(intervalId);
		}
		else {
			progressElement.value = start;
		}
		start++;
	}, timer);
} 
userProgress4(1);