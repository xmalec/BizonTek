import { AssetHelper } from "../../utils/AssetHelper";
import ContactButton from "../Shared/ContactButton";
import Img from "../Shared/Image";
import Socials from "../Shared/Socials";

const HomePage = () => {
  return (
    <div className="hp section">
      <span className="link-anchor-top" id="top"></span>
      <div className="hp-grid">
        <div className="content-logo">
          <Img src="./img/layout/profile-image.webp" alt="Jiří Malecf – Profilový obrázek" fetchpriority="high" />
        </div>

        <h1 id="title-name" className="h1 name">
          Ing. Jiří Malec
        </h1>
        <h2 id="title-profession" className="profession h3 m-0">
          Softwarový inženýr
        </h2>
        <div className="text description">
          Jmenuji se <b>Jiří Malec</b> a rád bych vám představil své dovednosti a služby jako softwarový vývojář specializující se na <b>.NET</b> technologii a řešení od <b>Microsoftu</b>.
          Na mém webu najdete informace o mých zkušenostech, portfoliu a schopnostech vytvářet <b>webové aplikace</b>, včetně portálů, komerčních, informačních a rezervačních systémů na míru.
          <br />Pokud hledáte profesionála na <b>.NET a Microsoft technologie</b>, neváhejte mě <b>kontaktovat</b>.
        </div>
        <Socials />

        <div className="contact-email">
          <a href="mailto:jiri.malec@bizontek.cz" type="button" aria-label="Napsat e-mail">
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
