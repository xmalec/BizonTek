import About from "../About/About";
import HomePage from "./HomePage";
import LoadingMask from "./LoadingMask";
import Navigation from "./Navigation";
import { onDocumentLoad } from "../../scripts";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import AppearanceToggle from "../Shared/AppearanceToggle";
import { DataLoadProvider } from "../../hooks/useDataLoadProvider";
import ScrollTopButton from "./ScrollTopButton";

const Layout = () => {
	onDocumentLoad();
	return (
		<DataLoadProvider>
			<LoadingMask />
			<ScrollTopButton />
			<div className="container appearance-bg-color">
				<Navigation />
				<AppearanceToggle isAbsolute={true} />
				<HomePage />
				<About />
				<Services />
				<Contact />
			</div>
		</DataLoadProvider>
	);
};

export default Layout;
