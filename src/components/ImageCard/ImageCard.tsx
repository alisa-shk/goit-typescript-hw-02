import { Image } from "../searchImages-api";
import s from "./ImageCard.module.css";

type ImageCardProps = {
    image: Image;
    onImageClick: (image: Image) => void;
};

const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
    return (
        <div>
            <img
                src={image.urls.small}
                alt={image.description}
                onClick={() => onImageClick(image)}
                className={s.image}
            />
        </div>
    )
};

export default ImageCard;