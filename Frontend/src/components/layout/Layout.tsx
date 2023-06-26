import About from "./About";
import HomePage from "./HomePage";
import LoadingMask from "./LoadingMask";
import Navigation from "./Navigation";
import { onDocumentLoad } from "../../scripts";

const Layout = () => {
	onDocumentLoad();
	return (
		<>
			<LoadingMask />
			<div className="container appearance-bg-color">
				<Navigation />
				<HomePage />
				<About />
			</div>
		</>
	);
};

export default Layout;
