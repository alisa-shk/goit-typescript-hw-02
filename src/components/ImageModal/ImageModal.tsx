import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
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