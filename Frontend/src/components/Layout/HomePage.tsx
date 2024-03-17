import { PageHelper } from "../../utils/PageHelper";
import ContactButton from "../Shared/ContactButton";
import Socials from "../Shared/Socials";

const HomePage = () => {
  return (
    <div className="hp section">
      <span className="link-anchor" id="section-hp"></span>
      <div className="background-image">
        {/* <img src="./img/layout/logo_stroke.png" alt="Logo" /> */}
      </div>
      <div className="hp-grid">
        <div className="content-logo">
          <img src="./img/layout/profile-image.jpg" alt="Profilový obrázek" />
        </div>

        <div id="title-name" className="h1 name">
          Ing. Jiří Malec
        </div>
        <div id="title-profession" className="h3 profession">
          Softwarový inženýr
        </div>
        <div className="text description">
          Vítejte na mém webu! Jmenuji se <b>Jiří Malec</b> a zde na webu bych
          Vám chtěl představit mé dovednosti a nabídnou mé služby coby
          softwarového fullstack vývojáře. Dovedu implementovat různé portály,
          komerční, informační či rezervační systémy a to ve formě webové nebo
          mobilní aplikace. Jsem otevřený zajímavým projektům a novým výzvám.{" "}
          <br />
          Pokud byste měli zájem o mé služby, budu moc rád, když se mi ozvete.
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
