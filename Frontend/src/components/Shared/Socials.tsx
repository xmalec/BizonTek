import { FC, useCallback, useState } from "react";
import GAHelper from "../../utils/GAHelper";

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
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/xmalec"
        target="_blank"
        rel="noreferrer"
        onClick={() => onClick("GitHub")}
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="/files/cv_jiri_malec.pdf"
        target="_blank"
        onClick={() => onClick("CV")}
      >
        <span className="text-xl">CV</span>
      </a>
    </div>
  );
};

export default Socials;
