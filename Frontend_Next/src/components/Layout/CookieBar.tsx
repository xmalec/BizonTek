import { useEffect, useState } from "react";

const localStorageName = "consentMode";

const CookieBar = () => {
  const [showCookieBar, setShowCookieBar] = useState(true);
  useEffect(() => {
    setShowCookieBar(localStorage.getItem(localStorageName) === null);
  }, []);

  return (
    <>
      {showCookieBar && (
        <div className="cookiebar-wrapper">
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
              <button id="cookiebar-settings-btn">Nastavení cookies</button>
              <button
                id="cookiebar-allow-all-btn"
                className="btn btn-animated btn-sm btn-contact appearance-color-text-dark"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBar;
