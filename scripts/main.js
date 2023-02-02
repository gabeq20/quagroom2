// Global variables

let documentLoaded = false; // Indicates whether the document is loaded.

let activeQuagrooms = 0; // Indicates the the amount of quagrooms that ocuppy the screen.



function fadeBeatNumbers() {

	$('#clone-wrap').css('bottom', (($(window).height() / 2) - $(window).scrollTop()) + 'px');

	let currentNormal = Math.floor($(window).scrollTop() / $('.beat-wrap').outerHeight()); // The index of the centered normal beat number
	let currentClone = $('.beat-wrap-clone').length - currentNormal - 1;				   // The index of the centered clone beat number

	let offset = $(window).scrollTop() - (currentNormal * $('.beat-wrap').outerHeight());

	if (offset <= $('.beat-number-clone').outerHeight()) {
		let offsetPCT = (offset / $('.beat-number-clone').outerHeight()) * 100;
		let offset50 = offsetPCT + 50;

		$('.beat-number-clone').eq(currentClone).css('background', '-webkit-linear-gradient(rgba(220, 253, 255, 0), rgba(220, 253, 255, 0) ' 
			+ offsetPCT + '%, ' + 'rgba(220, 253, 255, 1) ' + offset50 + '%)');
		$('.beat-number-clone').eq(currentClone).css('-webkit-background-clip', 'text');
		$('.beat-number-clone').eq(currentClone).css('-webkit-text-fill-color', 'transparent')

		$('.beat-number').eq(currentNormal).css('background', '-webkit-linear-gradient(.75turn, rgba(220, 253, 255, 0), rgba(220, 253, 255, 0) ' 
			+ offsetPCT + '%, ' + 'rgba(220, 253, 255, 1) ' + offset50 + '%)');
		$('.beat-number').eq(currentNormal).css('-webkit-background-clip', 'text');
		$('.beat-number').eq(currentNormal).css('-webkit-text-fill-color', 'transparent');

		$('.beat-number-clone').eq(currentClone - 1).css('background', '-webkit-linear-gradient(rgba(220, 253, 255, 1), rgba(220, 253, 255, 1))');
		$('.beat-number-clone').eq(currentClone - 1).css('-webkit-background-clip', 'text');
		$('.beat-number-clone').eq(currentClone - 1).css('-webkit-text-fill-color', 'transparent')

		$('.beat-number').eq(currentNormal + 1).css('background', '-webkit-linear-gradient(.75turn, rgba(220, 253, 255, 1), rgba(220, 253, 255, 1))');
		$('.beat-number').eq(currentNormal + 1).css('-webkit-background-clip', 'text');
		$('.beat-number').eq(currentNormal + 1).css('-webkit-text-fill-color', 'transparent');
	}
}


/*
 * Calculates pixel heights related to background quagrooms.
 * return the total height of the quagroom background in pixels
 * return the height of a single quagroom in pixels
 * return the height of the top quagroom in percent
 * return the height of the the quagroom background in percent
*/
function getHeights() {
	const zoneHeight = $(window).height() - ($('#header').outerHeight() * 2), 
		quagroomHeight = $('.quagroom-rightside').outerHeight(),
		topBuffer = ($('#header').outerHeight() / $(window).height()) * 100;
	const zoneHeightPercent = (zoneHeight / $(window).height()) * 100;
	return [zoneHeight, quagroomHeight, topBuffer, zoneHeightPercent];
}


/*
 * Calculates new heights for the quagrooms.
 * Called when the window is resized.
 * Uses function getHeights().
*/
function adjustProperties() {
	const [zoneHeight, quagroomHeight, topBuffer, zoneHeightPercent] = getHeights();
	const quagroomHeightNew = zoneHeightPercent / activeQuagrooms;
	$('.rightside').css('height', quagroomHeightNew + '%');
	$('.upside').css('height', quagroomHeightNew + '%');
	for (i = 0; i < activeQuagrooms / 2; i++) {
		$('.rightside').eq(i).css('bottom', (quagroomHeightNew * i + topBuffer) + '%');
	}
	for (i = 0; i < activeQuagrooms / 2; i++) {
		$('.upside').eq(i).css('top', (quagroomHeightNew * i + topBuffer) + '%');
	}
}


/*
 * Adds a quagroom to the quagroom background.
 * Updates global variable 'activeQuagrooms'.
 * param 'topBuffer' takes the height of the top quagroom in percent
 * param 'zoneHeightPercent' takes the height of the quagroom background in percent
*/
function displayQuagroom(topBuffer, zoneHeightPercent) {
	activeQuagrooms+=2;
	const quagroomHeightNew = zoneHeightPercent / activeQuagrooms;
	$('.rightside').css('height', quagroomHeightNew + '%');
	$('.upside').css('height', quagroomHeightNew + '%');
	for (i = 0; i < activeQuagrooms / 2; i++) {
		$('.rightside').eq(i).css('bottom', (quagroomHeightNew * i + topBuffer) + '%');
	}
	for (i = 0; i < activeQuagrooms / 2; i++) {
		$('.upside').eq(i).css('top', (quagroomHeightNew * i + topBuffer) + '%');
	}
	$('.quagroom-rightside').eq((activeQuagrooms / 2) - 1).css('color', '#202020');
	$('.rightside').eq((activeQuagrooms / 2) - 1).show()
	$('.quagroom-upside').eq((activeQuagrooms / 2) - 1).css('color', '#202020');
	$('.upside').eq((activeQuagrooms / 2) - 1).show()
}


/*
 * Removes a quagroom from the quagroom background.
 * Updates global variable 'activeQuagrooms'.
 * param 'topBuffer' takes the height of the top quagroom in percent
 * param 'zoneHeightPercent' takes the height of the quagroom background in percent
*/
function hideQuagroom(topBuffer, zoneHeightPercent) {
	activeQuagrooms-=2;
	const quagroomHeightNew = zoneHeightPercent / activeQuagrooms;
	$('.rightside').css('height', quagroomHeightNew + '%');
	$('.upside').css('height', quagroomHeightNew + '%');
	for (i = 0; i < activeQuagrooms / 2; i++) {
		$('.rightside').eq(i).css('bottom', (quagroomHeightNew * i + topBuffer) + '%');
	}
	for (i = 0; i < activeQuagrooms / 2; i++) {
		$('.upside').eq(i).css('top', (quagroomHeightNew * i + topBuffer) + '%');
	}
	$('.rightside').eq(activeQuagrooms / 2).hide();
	$('.upside').eq(activeQuagrooms / 2).hide();
}


/* 
 * Executes when the document is loaded.
 * Displays the correct amount of quagrooms to fit the page.
 * Displays the page's elements from under the full screen div.
 * Uses functions getHeights(), displayQuagroom(), and flipQuagrooms().
*/
function loadQuagrooms() {
	const [zoneHeight, quagroomHeight, topBuffer, zoneHeightPercent] = getHeights();
	if (quagroomHeight < zoneHeight) {
		while ((quagroomHeight / zoneHeight) < (1 / (activeQuagrooms + 2))) {
			displayQuagroom(topBuffer, zoneHeightPercent);
		}
	}
	$('#page-curtain').hide();
  	documentLoaded = true;
}


/* 
 * Executes when the window is resized.
 * Displays the correct amount of quagrooms to fit the page.
 * Uses functions getHeights(), displayQuagroom(),  hideQuagroom(), adjustProperties, and flipQuagrooms().
*/
function reassignQuagrooms() {
	const [zoneHeight, quagroomHeight, topBuffer, zoneHeightPercent] = getHeights();
	if ((quagroomHeight / zoneHeight) < (1 / (activeQuagrooms + 2))) {
		displayQuagroom(topBuffer, zoneHeightPercent);
	}
	else if ((quagroomHeight / zoneHeight) >= (1 / (activeQuagrooms))) {
		hideQuagroom(topBuffer, zoneHeightPercent);
	}
	adjustProperties();
}


/* 
 * Executes when the document is loaded and when the window is resized.
 * Resets the position of beat numbers and downloads so the top beat
 * begins in the middle of the page.
*/
function centerTopBeat() {
	const translateHeight = $(window).height() / 2;
	$('#top-offset').css('height', translateHeight + 'px');
}



function setClones() {
	$('#clone-wrap').css('bottom', $(window).height() / 2 + 'px');
	$('#clone-wrap').css('left', ($(window).width() / 2) - ($('.beat-wrap-clone').width() / 2) + 'px');
}


function setPadding() {
	let padding = $('.beat-wrap').height() * .2;
	for (i = 0; i < $('.beat-wrap').length; i++) {
		$('.beat-wrap').eq(i).css('padding-bottom', padding + 'px');
		$('.beat-wrap-clone').eq($('.beat-wrap').length - i - 1).css('padding-bottom', padding + 'px');
	}
	$('#final-beat-wrap').css('padding-bottom', (($(window).height() / 2) - $('.beat-wrap').height()) + 'px');
}