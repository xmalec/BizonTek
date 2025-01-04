import { FC } from "react";
import ImageGallery from "react-image-gallery";
import { ImageModel } from "../../utils/Types";
import { AssetHelper } from "../../utils/AssetHelper";

type Image = {
  original: string;
  loading: "lazy" | "eager";
  originalAlt: string;
};
type Props = {
  images: ImageModel[];
};

const ModalGallery: FC<Props> = ({ images }) => (
  <ImageGallery
    showThumbnails={false}
    showPlayButton={false}
    items={images.map((imageModel) => {
      return {
        original: AssetHelper.getAssetUrl(imageModel.url),
        loading: "lazy",
        thumbnailHeight: "500px",
        originalAlt: imageModel.alt,
      };
    })}
  />
);

export default ModalGallery;
