import { useCallback, useEffect, useState } from "react";
import GAHelper from "../../utils/GAHelper";

const CookieBar = () => {
  const [showCookieBar, setShowCookieBar] = useState(false);
  useEffect(() => {
    setShowCookieBar(GAHelper.areCookiesSet());
  }, []);
  const acceptAll = useCallback(() => {
    GAHelper.setAllAuthorized();
    setShowCookieBar(false);
  }, []);
  const rejectAll = useCallback(() => {
    GAHelper.setUnauthorizedCookies();
    setShowCookieBar(false);
  }, []);
  return (
    <>
      <div className={`cookiebar-wrapper ${showCookieBar ? "show" : ""}`}>
        <div className="cookiebar-container">
          <div className="cookiebar-content ">
            <div id="cookiebar-title">
              <strong>Na tomto webu používáme cookies</strong>
            </div>
            <div id="cookiebar-description">
              Kliknutím na tlačítko "Přijmout vše" nám dáváte souhlas ke
              zpracování všech námi používaných souborů cookie, které nám
              pomáhají zejména s fungováním webových stránek, analýzou využití
              dat a s našimi marketingovými aktivitami.
              {/* <a>zjistit vice</a> */}
            </div>
          </div>
          <div className="cookiebar-actions ">
            <button id="cookiebar-settings-btn" onClick={rejectAll}>
              Zakázat vše
            </button>
            <button
              id="cookiebar-allow-all-btn"
              className="btn btn-animated btn-sm btn-contact appearance-color-text-dark"
              onClick={acceptAll}
            >
              Přijmout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBar;
