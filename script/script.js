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


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;	
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300)
}


