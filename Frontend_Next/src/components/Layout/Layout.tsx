import About from "../About/About";
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import AppearanceToggle from "../Shared/AppearanceToggle";
import ScrollTopButton from "./ScrollTopButton";
import { useEffect } from "react";
import { ScrollHelper } from "../../utils/ScrollHelper";
import CookieBar from "./CookieBar";

const Layout = () => {
  //console.log(document);
  useEffect(() => {
    document.addEventListener("scroll", ScrollHelper.onScroll);
  }, []);

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
        <CookieBar />
      </div>
    </>
  );
};

export default Layout;
