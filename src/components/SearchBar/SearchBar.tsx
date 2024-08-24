import toast, { Toaster } from 'react-hot-toast';
import s from "./SearchBar.module.css";

type SearchBarProps = {
    onSearch: (topic: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const query = form.elements.namedItem("query") as HTMLInputElement;
        if (query.value.trim() === "") {
            toast.error("Please complete the search field!");
            return;
        } onSearch(query.value);
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