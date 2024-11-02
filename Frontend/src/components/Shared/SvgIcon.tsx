import { FC } from "react";
import { PageHelper } from "../../utils/PageHelper";

type Props = {
  name: string;
  size?: number;
  className?: string;
};

const SvgIconPath = "/img/icons/icons.svg";

const SvgIcon: FC<Props> = ({ name, size = 24, className }) => {
  return (
    <span aria-hidden="true" className={`icon-svg icon-svg--${name} ${className}`} style={{height: `${size}px`, width: `${size}px`}}>
        <svg className="icon-svg__svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="100%" width="100%">
            <use focusable="false" height="100%" width="100%" xlinkHref={`${SvgIconPath}#${name}`}></use>
        </svg>
    </span>
  );
};

export default SvgIcon;
