import { FC, useCallback } from "react";
import GAHelper from "../../utils/GAHelper";

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
      <button className="sun">
        <i className="fal fa-sun"></i>
      </button>
      <button className="moon">
        <i className="fal fa-moon"></i>
      </button>
    </div>
  );
};

export default AppearanceToggle;
