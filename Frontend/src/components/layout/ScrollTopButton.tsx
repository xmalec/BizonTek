import { PageHelper } from "../../utils/PageHelper";

const ScrollTopButton = () => (
	<button
		className="scroll-top hide"
		id="scroll-top-btn"
		onClick={() => PageHelper.scrollUp()}
	>
		<i className="fas fa-arrow-to-top"></i>
	</button>
);

export default ScrollTopButton;
