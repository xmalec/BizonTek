import ReactGA from "react-ga4";

type CookieSettings = {
  ad_storage: string;
  analytics_storage: string;
  personalization_storage: string;
  functionality_storage: string;
  security_storage: string;
};
const localStorageName = "consentMode";

const allAuthorizedCookieSetting: CookieSettings = {
  ad_storage: "granted",
  analytics_storage: "granted",
  personalization_storage: "granted",
  functionality_storage: "granted",
  security_storage: "granted",
};

const unauthorizedCookieSetting: CookieSettings = {
  ad_storage: "denied",
  analytics_storage: "denied",
  personalization_storage: "denied",
  functionality_storage: "denied",
  security_storage: "denied",
};

const GetCurrentSetting = (): CookieSettings => {
  const savedSetting = localStorage.getItem(localStorageName);
  if (savedSetting === null) {
    return unauthorizedCookieSetting;
  }
  return JSON.parse(savedSetting);
};

const GAHelper = {
  sendScrollEvent: (section: string) => {
    if (GetCurrentSetting().functionality_storage === "granted") {
      ReactGA.gtag("event", "BT| Scroll", {
        bt_scroll_to: section,
      });
    }
  },
  sendOpenModalEvent: (modalName: string, type: string) => {
    if (GetCurrentSetting().functionality_storage === "granted") {
      ReactGA.gtag("event", "BT| Open modal", {
        bt_modal: modalName,
        bt_type: type,
      });
    }
  },
  sendCloseModalEvent: (modalName: string, type: string) => {
    if (GetCurrentSetting().functionality_storage === "granted") {
      ReactGA.gtag("event", "BT| Close modal", {
        bt_modal: modalName,
        bt_type: type,
      });
    }
  },
  sendAppearanceChangeEvent: (value: string) => {
    if (GetCurrentSetting().personalization_storage === "granted") {
      ReactGA.gtag("event", "BT| Appearance mode", {
        bt_value: value,
      });
    }
  },
  sendSocialsClickEvent: (value: string) => {
    if (GetCurrentSetting().analytics_storage === "granted") {
      ReactGA.gtag("event", "BT| Socials click", {
        bt_value: value,
      });
    }
  },

  setUnauthorizedCookies: () => {
    ReactGA.gtag("consent", "default", unauthorizedCookieSetting);
    localStorage.setItem(
      localStorageName,
      JSON.stringify(unauthorizedCookieSetting)
    );
  },

  setAllAuthorized: () => {
    ReactGA.gtag("consent", "default", allAuthorizedCookieSetting);
    localStorage.setItem(
      localStorageName,
      JSON.stringify(allAuthorizedCookieSetting)
    );
  },

  setCookies: (setting: CookieSettings) => {
    ReactGA.gtag("consent", "default", setting);
    localStorage.setItem(localStorageName, JSON.stringify(setting));
  },

  areCookiesSet: (): boolean => {
    return localStorage.getItem(localStorageName) === null;
  },
};

export default GAHelper;
