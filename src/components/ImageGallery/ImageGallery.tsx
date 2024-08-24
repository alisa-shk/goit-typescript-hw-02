import { Image } from "../searchImages-api";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type ImageGalleryProps = {
    images: Image[];
    onImageClick: (image: Image) => void;
};

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
    return (
        <ul className={s.gallery}>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard image={image} onImageClick={onImageClick} />
            </li>
            ))}
        </ul>
    )
};

export default ImageGallery;