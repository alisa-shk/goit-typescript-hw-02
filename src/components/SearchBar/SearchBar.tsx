import toast, { Toaster } from 'react-hot-toast';
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.elements.query.value;
        if (query.trim() === "") {
            toast.error("Please complete the search field!");
            return;
        } onSearch(query);
        form.reset();
    }
    return (
        <header className={s.searchbar}>
            <form onSubmit={handleSubmit} className={s.form}>
                <input
                    className={s.input}
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className={s.btn}>Search</button>
            </form>
            <Toaster/>
        </header>
    );
};

export default SearchBar;