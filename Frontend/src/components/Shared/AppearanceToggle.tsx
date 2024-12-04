import { FC, useCallback } from "react";
import GAHelper from "../../utils/GAHelper";
import { Icons } from "../../utils/Icons";
import SvgIcon from "./SvgIcon";

type Props = {
  isAbsolute?: boolean;
};

const AppearanceToggle: FC<Props> = ({ isAbsolute = false }) => {
  const onClick = useCallback(() => {
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("bright")) {
      GAHelper.sendAppearanceChangeEvent("dark");
      body.classList.remove("bright");
    } else {
      GAHelper.sendAppearanceChangeEvent("bright");
      body.classList.add("bright");
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
