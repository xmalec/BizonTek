import { FC } from "react";
import ImageGallery from "react-image-gallery";

type Image = {
  original: string;
};
type Props = {
  images: string[];
};

const ModalGallery: FC<Props> = ({ images }) => (
  <ImageGallery
    showThumbnails={false}
    showPlayButton={false}
    items={images.map((url): Image => {
      return {
        original: url,
      };
    })}
  />
);

export default ModalGallery;
