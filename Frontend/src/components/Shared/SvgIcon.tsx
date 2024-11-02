import { FC } from "react";
import spriteVersion from "../../../public/img/icons/version.json";

type Props = {
  name: string;
  size?: number;
  className?: string;
};

const SvgIconPath = "/img/icons/icons.svg";

const getSpriteUrl = () => {
  return `${SvgIconPath}?v=${spriteVersion.version}`;
};  

const SvgIcon: FC<Props> = ({ name,  size, className  }) => {
  size = size ? size : 24;
  return (
    <span aria-hidden="true" className={`icon-svg icon-svg--${name} ${className ? className : ""}`} style={{height: `${size}px`, width: `${size}px`}}>
        <svg className="icon-svg__svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="100%" width="100%">
            <use focusable="false" height="100%" width="100%" xlinkHref={`${getSpriteUrl()}#${name}`}></use>
        </svg>
    </span>
  );
};

export default SvgIcon;
