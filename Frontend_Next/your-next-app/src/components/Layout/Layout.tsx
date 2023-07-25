import About from "../About/About";
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import { onDocumentLoad } from "../../../js/scripts";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import AppearanceToggle from "../Shared/AppearanceToggle";
import ScrollTopButton from "./ScrollTopButton";
const Layout = () => {
  //onDocumentLoad();
  return (
    <>
      <ScrollTopButton />
      <div className="container appearance-bg-color">
        <Navigation />
        <AppearanceToggle isAbsolute={true} />
        <HomePage />
        <About />
        <Services />
        <Contact />
      </div>
    </>
  );
};

export default Layout;
