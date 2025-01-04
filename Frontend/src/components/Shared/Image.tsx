import React from 'react';
import { AssetHelper } from '../../utils/AssetHelper';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Img: React.FC<ImageProps> = (props) => {
    let src = props.src;
    if (src !== undefined) {
        src = AssetHelper.getAssetUrl(src);
    }
    return <img {...props} src={src} />;
};

export default Img;