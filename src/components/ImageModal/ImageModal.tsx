import ReactModal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../searchImages-api";


type ImageModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    image: Image | null;
};

const ImageModal = ({ isOpen, onRequestClose, image }: ImageModalProps) => {
    if (!isOpen) return null;
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal"
            className={s.modal}
            overlayClassName={s.overlay}
        >
            {image && (
                <div>
                    <img
                    src={image.urls.regular}
                    alt={image.description}
                    className={s.image}
                />
                <div className={s.data}>
                    <p>Author: {image.user.name}</p>
                    <p>Description: {image.description}</p>
                    <p>Likes: {image.likes}</p>
                </div>
                </div>
            )}
        </ReactModal>
    );
}

export default ImageModal;