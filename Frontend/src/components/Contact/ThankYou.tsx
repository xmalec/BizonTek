import { Icons } from "../../utils/Icons";
import SvgIcon from "../Shared/SvgIcon";

const ThankYou = () => (
  <div className="contact__thank-you">
    <div className="contact__thank-you_container">
      <div className="h2 thank-you__title">Díky za zprávu!</div>
      <div className="text-xxl thank-you__text">Brzo se Vám ozvu.</div>
      <div className="thank-you__icon">
        <SvgIcon name={Icons.Check} size={5} />
        {/* <i className="fas fa-check-circle"></i> */}
      </div>
    </div>
  </div>
);

export default ThankYou;
