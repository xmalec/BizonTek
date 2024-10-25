import { useCallback } from "react";
import { PageHelper } from "../../utils/PageHelper";
import AppearanceToggle from "../Shared/AppearanceToggle";
import ContactButton from "../Shared/ContactButton";

const Navigation = () => {
  const onBarsClick = useCallback(() => {
    const container = document.getElementById("menu-container");
    if (container != undefined) {
      if (container.classList.contains("collapsed")) {
        container.classList.remove("collapsed");
      } else {
        container.classList.add("collapsed");
      }
    }
  }, []);
  return (
    <nav>
      <div className="navigation-container">
        <div className="navigation">
          <div className="title-part">
            <div className="logo">
              <img
                className="logo-dark"
                src="./img/layout/logo_dark.webp" fetchPriority="high" 
                alt="Logo"
              />
              <img src="./img/layout/logo.webp" alt="Logo" fetchPriority="high" />
            </div>
            <button
              className="title"
              onClick={() => PageHelper.handleClickScroll("section-hp")}
            >
              BizonTek
            </button>
          </div>
          <div className="menu" id="menu-container">
            <div className="menu-bars-container">
              <button
                id="menu-bars-toggle"
                className="menu-bars appearance-border-text"
                onClick={onBarsClick}
              >
                <span className="bars">
                  <i className="fal fa-bars"></i>
                </span>
                <span className="times">
                  <i className="fal fa-times"></i>
                </span>
              </button>
            </div>
            <div className="menu-items">
              <div>
                <button
                  onClick={() => PageHelper.handleClickScroll("section-about")}
                >
                  O mně
                </button>
              </div>
              <div>
                <button
                  onClick={() =>
                    PageHelper.handleClickScroll("section-services")
                  }
                >
                  Co nabízím
                </button>
              </div>
              <div className="nav-contact-btn">
                <ContactButton isSmall={true} />
              </div>
            </div>
            <AppearanceToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
