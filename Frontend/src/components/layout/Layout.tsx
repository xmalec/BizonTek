import About from "./About";
import HomePage from "./HomePage";
import LoadingMask from "./LoadingMask";
import Navigation from "./Navigation";
import { onDocumentLoad } from "../../scripts";
import Services from "./Services";
import Contact from "./Contact";

const Layout = () => {
	onDocumentLoad();
	return (
		<>
			<LoadingMask />
			<div className="container appearance-bg-color">
				<Navigation />
				<HomePage />
				<About />
				<Services />
				<Contact />
			</div>
		</>
	);
};

export default Layout;
