function isElementInView(element: Element, fullyInView = false) {
	const bounding = element.getBoundingClientRect();
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

function hasClass(element: Element, className: string) {
	return element.classList.contains(className);
}

function addClass(element: Element, className: string) {
	if (!hasClass(element, className)) {
		element.classList.add(className);
		return true;
	}
	return false;
}

function removeClass(element: Element, className: string) {
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

function manageScrollTop() {
	const nameTitle = document.getElementById("title-name");
	const scrollTopBtn = document.getElementById("scroll-top-btn");
	if (nameTitle != undefined && scrollTopBtn != undefined) {
		if (isElementInView(nameTitle)) {
			addClass(scrollTopBtn, "hide");
		} else {
			removeClass(scrollTopBtn, "hide");
		}
	}
}

function onScroll(e: Event) {
	manageNavigationBarOnScroll();
	manageEventsOpacity();
	manageScrollTop();
}

function toggleMenuCollapse() {
	const container = document.getElementById("menu-container");
	if (container != undefined) {
		if (container.classList.contains("collapsed")) {
			container.classList.remove("collapsed");
		} else {
			container.classList.add("collapsed");
		}
	}
}

function initMenuToggle() {
	const menu = document.getElementById("menu-bars-toggle");
	if (menu != undefined) {
		menu.addEventListener("click", toggleMenuCollapse);
	}
}

export function onDocumentLoad() {
	document.addEventListener("scroll", onScroll);
	initMenuToggle();

	//showEventDetail();
}
