import { useCallback, useState } from "react";
import { PageHelper } from "../../utils/PageHelper";
import AppearanceToggle from "../Shared/AppearanceToggle";
import ContactButton from "../Shared/ContactButton";
import SvgIcon from "../Shared/SvgIcon";
import { Icons } from "../../utils/Icons";
import Img from "../Shared/Image";
import Link from "next/link";

const Navigation = () => {

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onBarsClick = useCallback(() => {
    setIsCollapsed(!isCollapsed)
  }, [isCollapsed]);

  const onLinkClick = useCallback(() => {
    setIsCollapsed(false);
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
                onClick={() => PageHelper.handleClickScroll("top")}
              >
                BizonTek
              </button>
            </h2>
          </div>
          <div className={`menu ${isCollapsed ? "collapsed" : ""}`} id="menu-container">
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
                <Link
                  aria-label="O mně"
                   href="#o-mne"
                  scroll={false}
                  onClick={onLinkClick}
                >
                  O mně
                </Link>
              </div>
              <div>
                <Link
                href="#dovednosti"
                  aria-label="Dovednosti"
                  scroll={false}
                  onClick={onLinkClick}
                >
                  Dovednosti
                </Link>
              </div>
              <div>
                <Link
                  aria-label="Co nabízím"
                  scroll={false}
                     href="#sluzby"
                  onClick={onLinkClick}
                  
                >
                  Co nabízím
                </Link>
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
