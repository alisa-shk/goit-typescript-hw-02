import s from "./LoadMoreButton.module.css";

const LoadMoreBtn = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick} className={s.btn}>Load more</button>
        </div>
    )
};

export default LoadMoreBtn;