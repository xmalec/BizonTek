
const isElementInView = (element: Element, fullyInView = false) => {
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
  
const hasClass = (element: Element, className: string) => {
	return element.classList.contains(className);
  }
  
const addClass = (element: Element, className: string) => {
	if (!hasClass(element, className)) {
	  element.classList.add(className);
	  return true;
	}
	return false;
  }
  
const removeClass = (element: Element, className: string) => {
	element.classList.remove(className);
  }
  
  
const manageNavigationBarOnScroll = (document: Document) => {
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


export class PageHelper {
	static handleClickScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			// 👇 Will scroll smoothly to the top of the next section
			element.scrollIntoView({ behavior: "smooth" });
			const container = document.getElementById("menu-container");
			if (container != undefined) {
				if (container.classList.contains("collapsed")) {
					container.classList.remove("collapsed");
				}
			}
		}
	};

	static scrollUp = () => {
		this.handleClickScroll("section-hp");
	};
}

