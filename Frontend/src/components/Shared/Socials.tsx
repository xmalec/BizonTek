import { FC, useCallback, useState } from "react";
import GAHelper from "../../utils/GAHelper";
import { Icons } from "../../utils/Icons";
import SvgIcon from "./SvgIcon";

const Socials = () => {
  const onClick = useCallback((action: string) => {
    GAHelper.sendSocialsClickEvent(action);
  }, []);
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/jiri-malec/"
        target="_blank"
        rel="noreferrer"
        onClick={() => onClick("LinkedIn")}
      >
        <SvgIcon name={Icons.LinkedIn} size={26} className="icon-dark" />
        <SvgIcon name={Icons.LinkedIn_Light} size={26} className="icon-bright" />
        {/* <i className="fab fa-linkedin"></i> */}
      </a>
      <a
        href="https://github.com/xmalec"
        target="_blank"
        rel="noreferrer"
        onClick={() => onClick("GitHub")}
      >
        <SvgIcon name={Icons.GitHub} size={26} className="icon-dark" />
        <SvgIcon name={Icons.GitHub_Light} size={26} className="icon-bright" />
        {/* <i className="fab fa-github"></i> */}
      </a>
      <a
        href="/files/cv_jiri_malec.pdf"
        target="_blank"
        onClick={() => onClick("CV")}
      >
        <SvgIcon name={Icons.CV} size={24} className="icon-dark" />
        <SvgIcon name={Icons.CV_Light} size={24} className="icon-bright" />
        {/* <span className="text-xl">CV</span> */}
      </a>
    </div>
  );
};

export default Socials;
