import { FC } from "react";
import spriteVersion from "../../../public/version.json";

type Props = {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
  style?: object;
};

const SvgIconPath = "/img/icons/icons.svg";

const getSpriteUrl = () => {
  return `${SvgIconPath}?v=${spriteVersion.version}`;
};  

const SvgIcon: FC<Props> = ({ name,  size, className, width, height, style }) => {
  //let style = {};
  if (!height && !width) {
    size = size ? size : 24;
    style = {...style, height: `${size}px`, width: `${size}px`}
  } else {
    style = {...style, height: `${height}px`, width: `${width}px`}
  }
  console.log(style);
  return (
    <span aria-hidden="true" className={`icon-svg icon-svg--${name} ${className ? className : ""}`} style={style}>
        <svg className="icon-svg__svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="100%" width="100%">
            <use focusable="false" height="100%" width="100%" xlinkHref={`${getSpriteUrl()}#${name}`}></use>
        </svg>
    </span>
  );
};

export default SvgIcon;
