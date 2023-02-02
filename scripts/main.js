/* global constants */

// html objects of the 'quagroom's in the header
const quagroom1Header = document.getElementById("quagroom-1-header");
const quagroom2Header = document.getElementById("quagroom-2-header");
const quagroom3Header = document.getElementById("quagroom-3-header");
const quagroom4Header = document.getElementById("quagroom-4-header");
const quagroom5Header = document.getElementById("quagroom-5-header");
const quagroom6Header = document.getElementById("quagroom-6-header");
const quagroom7Header = document.getElementById("quagroom-7-header");
const quagroom8Header = document.getElementById("quagroom-8-header");
const quagroom9Header = document.getElementById("quagroom-9-header");
const quagroom10Header = document.getElementById("quagroom-10-header");
const quagroom11Header = document.getElementById("quagroom-11-header");
const quagroom12Header = document.getElementById("quagroom-12-header");
const quagroom13Header = document.getElementById("quagroom-13-header");
const quagroom14Header = document.getElementById("quagroom-14-header");
const quagroom15Header = document.getElementById("quagroom-15-header");
const quagroom16Header = document.getElementById("quagroom-16-header");
const quagroom17Header = document.getElementById("quagroom-17-header");
const quagroom18Header = document.getElementById("quagroom-18-header");
const quagroom19Header = document.getElementById("quagroom-19-header");
const quagroom20Header = document.getElementById("quagroom-20-header");
const quagroom21Header = document.getElementById("quagroom-21-header");
const quagroom22Header = document.getElementById("quagroom-22-header");
const quagroom23Header = document.getElementById("quagroom-23-header");
const quagroom24Header = document.getElementById("quagroom-24-header");
const quagroom25Header = document.getElementById("quagroom-25-header");
const quagroom26Header = document.getElementById("quagroom-26-header");

// html objects of the 'quagroom's in the footer
const quagroom1Footer = document.getElementById("quagroom-1-footer");
const quagroom2Footer = document.getElementById("quagroom-2-footer");
const quagroom3Footer = document.getElementById("quagroom-3-footer");
const quagroom4Footer = document.getElementById("quagroom-4-footer");
const quagroom5Footer = document.getElementById("quagroom-5-footer");
const quagroom6Footer = document.getElementById("quagroom-6-footer");
const quagroom7Footer = document.getElementById("quagroom-7-footer");
const quagroom8Footer = document.getElementById("quagroom-8-footer");
const quagroom9Footer = document.getElementById("quagroom-9-footer");
const quagroom10Footer = document.getElementById("quagroom-10-footer");
const quagroom11Footer = document.getElementById("quagroom-11-footer");
const quagroom12Footer = document.getElementById("quagroom-12-footer");
const quagroom13Footer = document.getElementById("quagroom-13-footer");
const quagroom14Footer = document.getElementById("quagroom-14-footer");
const quagroom15Footer = document.getElementById("quagroom-15-footer");
const quagroom16Footer = document.getElementById("quagroom-16-footer");
const quagroom17Footer = document.getElementById("quagroom-17-footer");
const quagroom18Footer = document.getElementById("quagroom-18-footer");
const quagroom19Footer = document.getElementById("quagroom-19-footer");
const quagroom20Footer = document.getElementById("quagroom-20-footer");
const quagroom21Footer = document.getElementById("quagroom-21-footer");
const quagroom22Footer = document.getElementById("quagroom-22-footer");
const quagroom23Footer = document.getElementById("quagroom-23-footer");
const quagroom24Footer = document.getElementById("quagroom-24-footer");
const quagroom25Footer = document.getElementById("quagroom-25-footer");
const quagroom26Footer = document.getElementById("quagroom-26-footer");


/* global variables */

let beatPlaying = false;

// starting right postions of the 'quagroom's in the header

let quagroom1HeaderRight = -400;
let quagroom2HeaderRight = -200;
let quagroom3HeaderRight = 0;
let quagroom4HeaderRight = 200;
let quagroom5HeaderRight = 400;
let quagroom6HeaderRight = 600;
let quagroom7HeaderRight = 800;
let quagroom8HeaderRight = 1000;
let quagroom9HeaderRight = 1200;
let quagroom10HeaderRight = 1400;
let quagroom11HeaderRight = 1600;
let quagroom12HeaderRight = 1800;
let quagroom13HeaderRight = 2000;
let quagroom14HeaderRight = 2200;
let quagroom15HeaderRight = 2400;
let quagroom16HeaderRight = 2600;
let quagroom17HeaderRight = 2800;
let quagroom18HeaderRight = 3000;
let quagroom19HeaderRight = 3200;
let quagroom20HeaderRight = 3400;
let quagroom21HeaderRight = 3600;
let quagroom22HeaderRight = 3800;
let quagroom23HeaderRight = 4000;
let quagroom24HeaderRight = 4200;
let quagroom25HeaderRight = 4400;
let quagroom26HeaderRight = 4600;

// starting right postions of the 'quagroom's in the footer

let quagroom1FooterRight = -400;
let quagroom2FooterRight = -200;
let quagroom3FooterRight = 0;
let quagroom4FooterRight = 200;
let quagroom5FooterRight = 400;
let quagroom6FooterRight = 600;
let quagroom7FooterRight = 800;
let quagroom8FooterRight = 1000;
let quagroom9FooterRight = 1200;
let quagroom10FooterRight = 1400;
let quagroom11FooterRight = 1600;
let quagroom12FooterRight = 1800;
let quagroom13FooterRight = 2000;
let quagroom14FooterRight = 2200;
let quagroom15FooterRight = 2400;
let quagroom16FooterRight = 2600;
let quagroom17FooterRight = 2800;
let quagroom18FooterRight = 3000;
let quagroom19FooterRight = 3200;
let quagroom20FooterRight = 3400;
let quagroom21FooterRight = 3600;
let quagroom22FooterRight = 3800;
let quagroom23FooterRight = 4000;
let quagroom24FooterRight = 4200;
let quagroom25FooterRight = 4400;
let quagroom26FooterRight = 4600;

// quagroom line start position

let rightStart = -400

// quagroom line end position

let rightEnd = 4800

// variables to control starting and stopping of beat
let currentBeat = false;
let beatNumber;
let beatNumberID;
let playPauseID;
let downloadID;
let dateID;


/* sets the date with the current time */
function dateUpdate() {
	let dateUpdate = new Date();
	let dateUpdateString = (dateUpdate.getMonth() + 1) + " " + dateUpdate.getDate() + " " 
		+ dateUpdate.getFullYear() + " " + dateUpdate.toLocaleTimeString();
	document.getElementById("date-header").innerHTML = dateUpdateString;
	document.getElementById("date-footer").innerHTML = dateUpdateString;
}


/* updates the date and shifts the 'quagroom's in the header and footer to the left */
async function frame() {
	dateUpdate();

	if (quagroom1HeaderRight >= rightEnd) {
		quagroom1HeaderRight = rightStart;
	}
	else if (quagroom2HeaderRight >= rightEnd) {
		quagroom2HeaderRight = rightStart;
	}
	else if (quagroom3HeaderRight >= rightEnd) {
		quagroom3HeaderRight = rightStart;
	}
	else if (quagroom4HeaderRight >= rightEnd) {
		quagroom4HeaderRight = rightStart;
	}
	else if (quagroom5HeaderRight >= rightEnd) {
		quagroom5HeaderRight = rightStart;
	}
	else if (quagroom6HeaderRight >= rightEnd) {
		quagroom6HeaderRight = rightStart;
	}
	else if (quagroom7HeaderRight >= rightEnd) {
		quagroom7HeaderRight = rightStart;
	}
	else if (quagroom8HeaderRight >= rightEnd) {
		quagroom8HeaderRight = rightStart;
	}
	else if (quagroom9HeaderRight >= rightEnd) {
		quagroom9HeaderRight = rightStart;
	}
	else if (quagroom10HeaderRight >= rightEnd) {
		quagroom10HeaderRight = rightStart;
	}
	else if (quagroom11HeaderRight >= rightEnd) {
		quagroom11HeaderRight = rightStart;
	}
	else if (quagroom12HeaderRight >= rightEnd) {
		quagroom12HeaderRight = rightStart;
	}
	else if (quagroom13HeaderRight >= rightEnd) {
		quagroom13HeaderRight = rightStart;
	}
	else if (quagroom14HeaderRight >= rightEnd) {
		quagroom14HeaderRight = rightStart;
	}
	else if (quagroom15HeaderRight >= rightEnd) {
		quagroom15HeaderRight = rightStart;
	}
	else if (quagroom16HeaderRight >= rightEnd) {
		quagroom16HeaderRight = rightStart;
	}
	else if (quagroom17HeaderRight >= rightEnd) {
		quagroom17HeaderRight = rightStart;
	}
	else if (quagroom18HeaderRight >= rightEnd) {
		quagroom18HeaderRight = rightStart;
	}
	else if (quagroom19HeaderRight >= rightEnd) {
		quagroom19HeaderRight = rightStart;
	}
	else if (quagroom20HeaderRight >= rightEnd) {
		quagroom20HeaderRight = rightStart;
	}
	else if (quagroom21HeaderRight >= rightEnd) {
		quagroom21HeaderRight = rightStart;
	}
	else if (quagroom22HeaderRight >= rightEnd) {
		quagroom22HeaderRight = rightStart;
	}
	else if (quagroom23HeaderRight >= rightEnd) {
		quagroom23HeaderRight = rightStart;
	}
	else if (quagroom24HeaderRight >= rightEnd) {
		quagroom24HeaderRight = rightStart;
	}
	else if (quagroom25HeaderRight >= rightEnd) {
		quagroom25HeaderRight = rightStart;
	}
	else if (quagroom26HeaderRight >= rightEnd) {
		quagroom26HeaderRight = rightStart;
	}

	if (quagroom1FooterRight >= rightEnd) {
		quagroom1FooterRight = rightStart;
	}
	else if (quagroom2FooterRight >= rightEnd) {
		quagroom2FooterRight = rightStart;
	}
	else if (quagroom3FooterRight >= rightEnd) {
		quagroom3FooterRight = rightStart;
	}
	else if (quagroom4FooterRight >= rightEnd) {
		quagroom4FooterRight = rightStart;
	}
	else if (quagroom5FooterRight >= rightEnd) {
		quagroom5FooterRight = rightStart;
	}
	else if (quagroom6FooterRight >= rightEnd) {
		quagroom6FooterRight = rightStart;
	}
	else if (quagroom7FooterRight >= rightEnd) {
		quagroom7FooterRight = rightStart;
	}
	else if (quagroom8FooterRight >= rightEnd) {
		quagroom8FooterRight = rightStart;
	}
	else if (quagroom9FooterRight >= rightEnd) {
		quagroom9FooterRight = rightStart;
	}
	else if (quagroom10FooterRight >= rightEnd) {
		quagroom10FooterRight = rightStart;
	}
	else if (quagroom11FooterRight >= rightEnd) {
		quagroom11FooterRight = rightStart;
	}
	else if (quagroom12FooterRight >= rightEnd) {
		quagroom12FooterRight = rightStart;
	}
	else if (quagroom13FooterRight >= rightEnd) {
		quagroom13FooterRight = rightStart;
	}
	else if (quagroom14FooterRight >= rightEnd) {
		quagroom14FooterRight = rightStart;
	}
	else if (quagroom15FooterRight >= rightEnd) {
		quagroom15FooterRight = rightStart;
	}
	else if (quagroom16FooterRight >= rightEnd) {
		quagroom16FooterRight = rightStart;
	}
	else if (quagroom17FooterRight >= rightEnd) {
		quagroom17FooterRight = rightStart;
	}
	else if (quagroom18FooterRight >= rightEnd) {
		quagroom18FooterRight = rightStart;
	}
	else if (quagroom19FooterRight >= rightEnd) {
		quagroom19FooterRight = rightStart;
	}
	else if (quagroom20FooterRight >= rightEnd) {
		quagroom20FooterRight = rightStart;
	}
	else if (quagroom21FooterRight >= rightEnd) {
		quagroom21FooterRight = rightStart;
	}
	else if (quagroom22FooterRight >= rightEnd) {
		quagroom22FooterRight = rightStart;
	}
	else if (quagroom23FooterRight >= rightEnd) {
		quagroom23FooterRight = rightStart;
	}
	else if (quagroom24FooterRight >= rightEnd) {
		quagroom24FooterRight = rightStart;
	}
	else if (quagroom25FooterRight >= rightEnd) {
		quagroom25FooterRight = rightStart;
	}
	else if (quagroom26FooterRight >= rightEnd) {
		quagroom26FooterRight = rightStart;
	}

	quagroom1HeaderRight+=.1;
	quagroom2HeaderRight+=.1;
	quagroom3HeaderRight+=.1;
	quagroom4HeaderRight+=.1;
	quagroom5HeaderRight+=.1;
	quagroom6HeaderRight+=.1;
	quagroom7HeaderRight+=.1;
	quagroom8HeaderRight+=.1;
	quagroom9HeaderRight+=.1;
	quagroom10HeaderRight+=.1;
	quagroom11HeaderRight+=.1;
	quagroom12HeaderRight+=.1;
	quagroom13HeaderRight+=.1;
	quagroom14HeaderRight+=.1;
	quagroom15HeaderRight+=.1;
	quagroom16HeaderRight+=.1;
	quagroom17HeaderRight+=.1;
	quagroom18HeaderRight+=.1;
	quagroom19HeaderRight+=.1;
	quagroom20HeaderRight+=.1;
	quagroom21HeaderRight+=.1;
	quagroom22HeaderRight+=.1;
	quagroom23HeaderRight+=.1;
	quagroom24HeaderRight+=.1;
	quagroom25HeaderRight+=.1;
	quagroom26HeaderRight+=.1;

	quagroom1FooterRight+=.1;
	quagroom2FooterRight+=.1;
	quagroom3FooterRight+=.1;
	quagroom4FooterRight+=.1;
	quagroom5FooterRight+=.1;
	quagroom6FooterRight+=.1;
	quagroom7FooterRight+=.1;
	quagroom8FooterRight+=.1;
	quagroom9FooterRight+=.1;
	quagroom10FooterRight+=.1;
	quagroom11FooterRight+=.1;
	quagroom12FooterRight+=.1;
	quagroom13FooterRight+=.1;
	quagroom14FooterRight+=.1;
	quagroom15FooterRight+=.1;
	quagroom16FooterRight+=.1;
	quagroom17FooterRight+=.1;
	quagroom18FooterRight+=.1;
	quagroom19FooterRight+=.1;
	quagroom20FooterRight+=.1;
	quagroom21FooterRight+=.1;
	quagroom22FooterRight+=.1;
	quagroom23FooterRight+=.1;
	quagroom24FooterRight+=.1;
	quagroom25FooterRight+=.1;
	quagroom26FooterRight+=.1;

	quagroom1Header.style.right = quagroom1HeaderRight + 'px';
	quagroom2Header.style.right = quagroom2HeaderRight + 'px';
	quagroom3Header.style.right = quagroom3HeaderRight + 'px';
	quagroom4Header.style.right = quagroom4HeaderRight + 'px';
	quagroom5Header.style.right = quagroom5HeaderRight + 'px';
	quagroom6Header.style.right = quagroom6HeaderRight + 'px';
	quagroom7Header.style.right = quagroom7HeaderRight + 'px';
	quagroom8Header.style.right = quagroom8HeaderRight + 'px';
	quagroom9Header.style.right = quagroom9HeaderRight + 'px';
	quagroom10Header.style.right = quagroom10HeaderRight + 'px';
	quagroom11Header.style.right = quagroom11HeaderRight + 'px';
	quagroom12Header.style.right = quagroom12HeaderRight + 'px';
	quagroom13Header.style.right = quagroom13HeaderRight + 'px';
	quagroom14Header.style.right = quagroom14HeaderRight + 'px';
	quagroom15Header.style.right = quagroom15HeaderRight + 'px';
	quagroom16Header.style.right = quagroom16HeaderRight + 'px';
	quagroom17Header.style.right = quagroom17HeaderRight + 'px';
	quagroom18Header.style.right = quagroom18HeaderRight + 'px';
	quagroom19Header.style.right = quagroom19HeaderRight + 'px';
	quagroom20Header.style.right = quagroom20HeaderRight + 'px';
	quagroom21Header.style.right = quagroom21HeaderRight + 'px';
	quagroom22Header.style.right = quagroom22HeaderRight + 'px';
	quagroom23Header.style.right = quagroom23HeaderRight + 'px';
	quagroom24Header.style.right = quagroom24HeaderRight + 'px';
	quagroom25Header.style.right = quagroom25HeaderRight + 'px';
	quagroom26Header.style.right = quagroom26HeaderRight + 'px';

	quagroom1Footer.style.right = quagroom1FooterRight + 'px';
	quagroom2Footer.style.right = quagroom2FooterRight + 'px';
	quagroom3Footer.style.right = quagroom3FooterRight + 'px';
	quagroom4Footer.style.right = quagroom4FooterRight + 'px';
	quagroom5Footer.style.right = quagroom5FooterRight + 'px';
	quagroom6Footer.style.right = quagroom6FooterRight + 'px';
	quagroom7Footer.style.right = quagroom7FooterRight + 'px';
	quagroom8Footer.style.right = quagroom8FooterRight + 'px';
	quagroom9Footer.style.right = quagroom9FooterRight + 'px';
	quagroom10Footer.style.right = quagroom10FooterRight + 'px';
	quagroom11Footer.style.right = quagroom11FooterRight + 'px';
	quagroom12Footer.style.right = quagroom12FooterRight + 'px';
	quagroom13Footer.style.right = quagroom13FooterRight + 'px';
	quagroom14Footer.style.right = quagroom14FooterRight + 'px';
	quagroom15Footer.style.right = quagroom15FooterRight + 'px';
	quagroom16Footer.style.right = quagroom16FooterRight + 'px';
	quagroom17Footer.style.right = quagroom17FooterRight + 'px';
	quagroom18Footer.style.right = quagroom18FooterRight + 'px';
	quagroom19Footer.style.right = quagroom19FooterRight + 'px';
	quagroom20Footer.style.right = quagroom20FooterRight + 'px';
	quagroom21Footer.style.right = quagroom21FooterRight + 'px';
	quagroom22Footer.style.right = quagroom22FooterRight + 'px';
	quagroom23Footer.style.right = quagroom23FooterRight + 'px';
	quagroom24Footer.style.right = quagroom24FooterRight + 'px';
	quagroom25Footer.style.right = quagroom25FooterRight + 'px';
	quagroom26Footer.style.right = quagroom26FooterRight + 'px';
}


/* synchronizes the function calls to update the date and move header and footers */
async function moveAll() {
	frame();
	await frame();
	setTimeout(() => {
		moveAll();
	}, .05);
}


/* starts the selected beat and adjusts web page accordingly */
function startBeat(audioID, currentBeatNumber, currentBeatNumberID, currentPlayPauseID, 
		currentDownloadID, currentDateID) {
	if (currentBeat) {
		endBeat();
	}
	beatPlaying = true;
	beatNumber = currentBeatNumber;
	beatNumberID = currentBeatNumberID;
	playPauseID = currentPlayPauseID;
	downloadID = currentDownloadID;
	dateID = currentDateID;

	if (!currentBeat || currentBeat.ended) {
		currentBeat = document.getElementById(audioID);
	}
	else {
		currentBeat.pause();
		currentBeat = document.getElementById(audioID);
	}
	currentBeat.loop = true;
	currentBeat.load();
	currentBeat.play();
	document.getElementById("pause-resume-text").innerHTML = '0';
	document.getElementById("end-beat-text").innerHTML = 'NULL';
	document.getElementById("pause-resume").style.display = 'block';
	document.getElementById("end-beat").style.display = 'block';
}


/* pauses or resumes the current beat depending on the current state of the beat */

function pauseResume() {
	if (beatPlaying) {
		currentBeat.pause();
		beatPlaying = false;
		document.getElementById("pause-resume-text").innerHTML = '1';
	}
	else {
		currentBeat.play();
		beatPlaying = true;
		document.getElementById("pause-resume-text").innerHTML = '0';
	}
}



/* ends the current beat and adjusts the web page accordingly */
function endBeat() {
	currentBeat.pause();
	beatPlaying = false;
	document.getElementById("pause-resume").style.display = 'none';
	document.getElementById("end-beat").style.display = 'none';
	currentBeat = false;
}

function setWidth() {
	document.getElementById("width").innerHTML = window.innerWidth;
}
