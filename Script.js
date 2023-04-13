// Taking Verialbles

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;


			// Adding Evetnts

			// Start Event 
startBtn.addEventListener('click', function () {
	timer = true;

	// Calling Function of Stopwatch 
	stopWatch();
});


// Stop Event 

stopBtn.addEventListener('click', function () {
	timer = false;
});


			// Reset Event  
resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('Hr').innerHTML = "00";
	document.getElementById('Min').innerHTML = "00";
	document.getElementById('Sec').innerHTML = "00";
	document.getElementById('Count').innerHTML = "00";
});

			//  Function Stopwatch 
function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}
						// Changing Numbers Here
		document.getElementById('Hr').innerHTML = hrString;
		document.getElementById('Min').innerHTML = minString;
		document.getElementById('Sec').innerHTML = secString;
		document.getElementById('Count').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}
