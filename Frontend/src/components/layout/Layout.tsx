import About from "./About";
import HomePage from "./HomePage";
import LoadingMask from "./LoadingMask";
import Navigation from "./Navigation";

const Layout = () => (
	<>
		<LoadingMask />
		<div className="container">
			<Navigation />
			<HomePage />
			<About />
		</div>
	</>
);

export default Layout;
