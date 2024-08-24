import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
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