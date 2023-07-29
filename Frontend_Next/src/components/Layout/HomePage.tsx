import { PageHelper } from "../../utils/PageHelper";
import ContactButton from "../Shared/ContactButton";
import Socials from "../Shared/Socials";

const HomePage = () => {
  return (
    <div className="hp section">
      <span className="link-anchor" id="section-hp"></span>
      <div className="background-image">
        <img src="./img/layout/logo_stroke.png" alt="Logo" />
      </div>
      <div className="hp-grid">
        <div className="content-logo">
          <img src="./img/layout/profile-image.jpg" alt="Profilový obrázek" />
        </div>

        <div id="title-name" className="h1 name">
          Jiří Malec
        </div>
        <div id="title-profession" className="h3 profession">
          Softwarový vývojář
        </div>
        <div className="text description">
          Zdravím a vítejte na mém webu! Jmenuji se <b>Jiří Malec</b> a
          vystupuji pod doménou <b>BizonTek</b>. Zde na webu bych se Vám chtěl
          představit a nabídnou mé služby coby softwarového vývojáře.
          Specializuji se především na webové aplikace, portály, komerční a
          informační systémy.{" "}
          <b
            className="more-button"
            onClick={() => PageHelper.handleClickScroll("section-services")}
          >
            Zvládnu toho ale mnohem více!
          </b>
        </div>
        <Socials />

        <div className="contact-email">
          <a href="mailto:jiri.malec@bizontek.cz" type="button">
            jiri.malec@bizontek.cz
          </a>
        </div>
        <div className="contact-btn" id="main-button">
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
