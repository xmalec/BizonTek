function isElementInView(element, fullyInView) {
	var pageTop = window.pageYOffset || document.documentElement.scrollTop;
	var pageBottom = pageTop + window.innerHeight;
	var elementTop = element.offsetTop;
	var elementBottom = elementTop + element.offsetHeight;

	if (fullyInView === true) {
		return pageTop < elementTop && pageBottom > elementBottom;
	} else {
		return elementTop <= pageBottom && elementBottom >= pageTop;
	}
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

function manageNavigationBarOnScroll() {
	const nameTitle = document.getElementById("title-name");
	const professionTitle = document.getElementById("title-profession");
	const contactButton = document.getElementById("main-button");
	const navigation = document.getElementsByTagName("nav")[0];
	const itemsContainer = document.getElementById("menu-items-container");
	if (
		navigation != undefined &&
		contactButton != undefined &&
		nameTitle != undefined &&
		professionTitle != undefined &&
		itemsContainer != undefined
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
	const container = document.getElementById("menu-items-container");
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
}

onDocumentLoad();
