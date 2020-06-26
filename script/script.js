function userProgress(time) {
	let start = 0;
	let timer = Math.round(time * 10);
	let progressElement = document.getElementById('progress');
	let intervalId = setInterval(function () {
		if (start > 80) {
			clearInterval(intervalId);
			// chang();
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


let progress = document.querySelector('.progress');

window.addEventListener('scroll', progressBar);

function progressBar(e) {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let per = windowScroll / windowHeight * 100;
	progress.style.width = per + '%';
	console.log(progress)
}

$(document).ready(function(){
	$(".projects__slide").owlCarousel({
		loop: true,
		center: true,
		items: 3,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 4000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 2,
				margin: 10,
				
				
			},
			800: {
				items: 3,
				margin: 30,
			},
			1025: {
				items: 3,
				margin: 50,
			}
		}
	})
});