import s from "./ErrorMessage.module.css"

const ErrorMessage = ():React.ReactElement => {
    return (
        <div>
            <h3 className={s.err}>Sorry, there is some problem. Please try again!</h3>
        </div>
    );
};
export default ErrorMessage;