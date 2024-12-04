import { FC, useCallback, useState } from "react";
import GAHelper from "../../utils/GAHelper";
import { Icons } from "../../utils/Icons";
import SvgIcon from "./SvgIcon";

type Props = {
  isSmall?: boolean;
}

const Socials:FC<Props> = ({isSmall = false}) => {
  const onClick = useCallback((action: string) => {
    GAHelper.sendSocialsClickEvent(action);
  }, []);
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/jiri-malec/"
        target="_blank"
        rel="noreferrer"
        aria-label="Můj LinkedIn profil"
        onClick={() => onClick("LinkedIn")}
      >
        <SvgIcon name={Icons.LinkedIn} size={isSmall ? 24 : 27} className="icon-dark" />
        <SvgIcon name={Icons.LinkedIn_Light} size={isSmall ? 24 : 27} className="icon-bright" />
      </a>
      <a
        href="https://github.com/xmalec"
        target="_blank"
        rel="noreferrer"
        aria-label="Můj GitHub profil"
        onClick={() => onClick("GitHub")}
      >
        <SvgIcon name={Icons.GitHub} size={isSmall ? 24 : 27} className="icon-dark" />
        <SvgIcon name={Icons.GitHub_Light} size={isSmall ? 24 : 27} className="icon-bright" />
      </a>
      <a
        href="/files/cv_jiri_malec.pdf"
        target="_blank"
        aria-label="Můj životopis"
        onClick={() => onClick("CV")}
      >
        <SvgIcon name={Icons.CV} width={isSmall ? 22 : 24} height={isSmall ? 26 : 29} className="icon-dark" />
        <SvgIcon name={Icons.CV_Light} width={isSmall ? 22 : 24} height={isSmall ? 26 : 29} className="icon-bright" />
      </a>
    </div>
  );
};

export default Socials;
