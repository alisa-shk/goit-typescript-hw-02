import s from "./LoadMoreButton.module.css";

type LoadMoreBtnProps = {
    onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
    return (
        <div>
            <button onClick={onClick} className={s.btn}>Load more</button>
        </div>
    )
};

export default LoadMoreBtn;