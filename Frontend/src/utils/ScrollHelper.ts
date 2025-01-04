import { url } from "inspector";
import GAHelper from "./GAHelper";
import { Sections } from "./Sections";

const activeSectionClass = "active-section";

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
};

const hasClass = (element: Element, className: string) => {
  return element.classList.contains(className);
};

const addClass = (element: Element, className: string) => {
  if (!hasClass(element, className)) {
    element.classList.add(className);
    return true;
  }
  return false;
};

const removeClass = (element: Element, className: string) => {
  element.classList.remove(className);
};

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
};

function manageScrollTop(document: Document) {
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

function manageEventsOpacity(document: Document) {
  const events = document.getElementsByClassName("event");
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    if (!hasClass(event, "show") && isElementInView(event)) {
      addClass(event, "show");
    }
  }
}

function manageSkillBars(document: Document) {
  const events = document.getElementsByClassName("skill-bar__fill");
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    if (hasClass(event, "unactive") && isElementInView(event)) {
      removeClass(event, "unactive");
    }
  }
}

function registerDataLayer(document: Document) {

  var activeSectionId = getActiveSectionId(document);
  let found = false;
  Sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if ((!found || activeSectionId == '') && isElementInView(element)) {
      found = true;
      if (activeSectionId != section.id) {
        GAHelper.sendScrollEvent(section.code);
        addClass(element, activeSectionClass);
        setUrlHash(section.url);
        activeSectionId = section.id;
      }
    }
    else {
      removeClass(element, activeSectionClass);
    }
  });
}

function getActiveSectionId(document: Document) {
  const activeSections = document.getElementsByClassName(activeSectionClass);
  return activeSections.length > 0 ? activeSections[0].id : '';
}

export class ScrollHelper {
  static onScroll = () => {
    manageNavigationBarOnScroll(document);
    manageEventsOpacity(document);
    manageScrollTop(document);
    manageSkillBars(document);
    registerDataLayer(document);
  };
}
function setUrlHash(url: string) {
  window.history.replaceState(null, '', url);
}

