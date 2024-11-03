import { Icons } from "../../utils/Icons";
import { PageHelper } from "../../utils/PageHelper";
import SvgIcon from "../Shared/SvgIcon";

const ScrollTopButton = () => (
  <button
    className="scroll-top hide"
    id="scroll-top-btn"
    aria-label="Zpět na homepage"
    onClick={() => PageHelper.scrollUp()}
  >
    <SvgIcon name={Icons.ArrowUp} />
    {/* <i className="fas fa-arrow-to-top"></i> */}
  </button>
);

export default ScrollTopButton;
