import { FC, useCallback, useEffect } from "react";
import GAHelper from "../../utils/GAHelper";
import { Icons } from "../../utils/Icons";
import SvgIcon from "./SvgIcon";

type Props = {
  isAbsolute?: boolean;
};

const AppearanceToggle: FC<Props> = ({ isAbsolute = false }) => {
  const BRIGHT_MODE = "bright";
  const DARK_MODE = "dark";
  const USER_MODE = "userMode";
  const onClick = useCallback(() => {
    const body = document.getElementsByTagName("body")[0];
    const currentMode = body.classList.contains(BRIGHT_MODE) ? DARK_MODE : BRIGHT_MODE;
    localStorage.setItem(USER_MODE, currentMode);
    if (body.classList.contains(BRIGHT_MODE)) {
      GAHelper.sendAppearanceChangeEvent(DARK_MODE);
      body.classList.remove(BRIGHT_MODE);
    } else {
      GAHelper.sendAppearanceChangeEvent(BRIGHT_MODE);
      body.classList.add(BRIGHT_MODE);
    }
  }, []);

  useEffect(() => {
    if(localStorage.getItem(USER_MODE) === BRIGHT_MODE) {
      document.getElementsByTagName("body")[0].classList.add(BRIGHT_MODE);
    } else {
      document.getElementsByTagName("body")[0].classList.remove(BRIGHT_MODE);
    }
  }, []);
  return (
    <div
      className={`appearance-toggle ${isAbsolute ? "absolute" : ""}`}
      onClick={onClick}
    >
      <button className="sun" aria-label="Světlý mód">
      <SvgIcon name={Icons.Sun} />
        {/* <i className="fal fa-sun"></i> */}
      </button>
      <button className="moon" aria-label="Tmavý mód">
      <SvgIcon name={Icons.Moon} />
        {/* <i className="fal fa-moon"></i> */}
      </button>
    </div>
  );
};

export default AppearanceToggle;
