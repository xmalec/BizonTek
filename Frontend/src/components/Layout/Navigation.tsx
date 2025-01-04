import { useCallback } from "react";
import { PageHelper } from "../../utils/PageHelper";
import AppearanceToggle from "../Shared/AppearanceToggle";
import ContactButton from "../Shared/ContactButton";
import SvgIcon from "../Shared/SvgIcon";
import { Icons } from "../../utils/Icons";
import Img from "../Shared/Image";

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
              <Img
                className="logo-dark"
                src="./img/layout/logo_dark.webp"
                fetchpriority="high"
                alt="Logo"
              />
              <Img src="./img/layout/logo.webp" alt="Logo" fetchpriority="high" />
            </div>
            <h2 className="m-0 text">
              <button
                className="title"
                aria-label="Homepage"
                onClick={() => PageHelper.handleClickScroll("section-hp")}
              >
                BizonTek
              </button>
            </h2>
          </div>
          <div className="menu" id="menu-container">
              <button
                id="menu-bars-toggle"
                aria-label="Menu"
                className="menu-bars appearance-border-text no-hover"
                onClick={onBarsClick}
              >
                <span className="bars">
                  <SvgIcon name={Icons.Bars} height={24} width={26} className="icon-dark" />
                  <SvgIcon name={Icons.Bars_Light} height={24} width={26} className="icon-bright" />
                </span>
                <span className="times">
                  <SvgIcon name={Icons.Times_Nav} className="icon-dark" />
                  <SvgIcon name={Icons.Times_Nav_Light} className="icon-bright" />
                </span>
              </button>
            <div className="menu-items">
              <div>
                <button
                  aria-label="O mně"
                  onClick={() => PageHelper.handleClickScroll("section-about")}
                >
                  O mně
                </button>
              </div>
              <div>
                <button
                  aria-label="Dovednosti"
                  onClick={() =>
                    PageHelper.handleClickScroll("section-skills")
                  }
                >
                  Dovednosti
                </button>
              </div>
              <div>
                <button
                  aria-label="Co nabízím"
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
