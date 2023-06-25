function isElementInView(element, fullyInView = false) {
	var bounding = element.getBoundingClientRect();
	if (fullyInView) {
		return (
			bounding.top >= 0 &&
			bounding.left >= 0 &&
			bounding.right <= window.innerWidth &&
			bounding.bottom <= window.innerHeight
		);
	}
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.left <= window.innerWidth &&
		bounding.top <= window.innerHeight
	);
}

function hasClass(element, className) {
	return element.classList.contains(className);
}

function addClass(element, className) {
	if (!hasClass(element, className)) {
		element.classList.add(className);
		return true;
	}
	return false;
}

function removeClass(element, className) {
	element.classList.remove(className);
}

function manageEventsOpacity() {
	const events = document.getElementsByClassName("event");
	for (let i = 0; i < events.length; i++) {
		const event = events[i];
		if (!hasClass(event, "show") && isElementInView(event)) {
			addClass(event, "show");
		}
	}
}

function manageNavigationBarOnScroll() {
	const nameTitle = document.getElementById("title-name");
	const professionTitle = document.getElementById("title-profession");
	const contactButton = document.getElementById("main-button");
	const navigation = document.getElementsByTagName("nav")[0];
	if (
		navigation != undefined &&
		contactButton != undefined &&
		nameTitle != undefined &&
		professionTitle != undefined
	) {
		if (isElementInView(nameTitle)) {
			removeClass(navigation, "fixed");
			removeClass(navigation, "hidden");
		} else {
			if (isElementInView(contactButton)) {
				addClass(navigation, "hidden");
			} else {
				removeClass(navigation, "hidden");
			}

			if (!isElementInView(professionTitle)) {
				addClass(navigation, "fixed");
			} else {
				removeClass(navigation, "fixed");
			}
		}
	}
}

function onScroll(e) {
	manageNavigationBarOnScroll();
	manageEventsOpacity();
}

function toggleApperance() {
	const body = document.getElementsByTagName("body")[0];
	if (body.classList.contains("bright")) {
		body.classList.remove("bright");
	} else {
		body.classList.add("bright");
	}
}

function toggleMenuCollapse() {
	const container = document.getElementById("menu-container");
	if (container.classList.contains("collapsed")) {
		container.classList.remove("collapsed");
	} else {
		container.classList.add("collapsed");
	}
}

function initApperanceToggle() {
	var toggles = document.getElementsByClassName("appearance-toggle");
	for (var i = 0; i < toggles.length; i++) {
		toggles[i].addEventListener("click", toggleApperance);
	}
}

function initMenuToggle() {
	document
		.getElementById("menu-bars-toggle")
		.addEventListener("click", toggleMenuCollapse);
}

function onDocumentLoad() {
	document.addEventListener("scroll", onScroll);
	initApperanceToggle();
	initMenuToggle();
	//showEventDetail();
}

function showEventDetail() {
	console.log("here");
	document.getElementsByTagName("html")[0].classList.add("fixed");
	document.getElementsByClassName("event-detail")[0].classList.add("show");
}

function hideEventDetail() {
	document.getElementsByTagName("html")[0].classList.remove("fixed");
	document.getElementsByClassName("event-detail")[0].classList.remove("show");
}

onDocumentLoad();
