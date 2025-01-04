import ContactForm from "../../forms/ContactForm";
import Socials from "../Shared/Socials";

const Contact = () => {
  return (
    <div className="contact">
      <span className="link-anchor" id="kontakt"></span>
      <div className="contact__container section">
        <h3 className="contact__title m-0">
          Máte zájem o aplikaci na míru nebo se jen chcete na něco zeptat?
        </h3>
        <ContactForm />
        <div className="contact__info-grid">
          <span className="contact__name color-transition">Jiří Malec</span>
          <Socials isSmall={true} />

          <span className="contact__cities color-transition">
            Brno, Jihlava
          </span>
          <a className="contact__email" href="mailto:jiri.malec@bizontek.cz"
            aria-label="Napsat e-mail">
            jiri.malec@bizontek.cz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
