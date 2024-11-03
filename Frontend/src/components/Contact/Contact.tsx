import ContactForm from "../../forms/ContactForm";
import Socials from "../Shared/Socials";

const Contact = () => {
  return (
    <div className="contact">
      <span className="link-anchor" id="section-contact"></span>
      <div className="contact__container section">
        <div className="contact__title">
          Máte zájem o aplikaci na míru nebo se jen chcete na něco zeptat?
        </div>
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
