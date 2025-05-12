import toast, { Toaster } from 'react-hot-toast';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const handleSubmit = event => {
    event.preventDefault();
    const query = event.target.searchField.value.trim();

    if (!query || query === '') {
      toast('Please enter a search term');
      return;
    }

    onSearch(query);
    event.target.reset();
  };

  
  return (
    <header className={css.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.searchBar}
          type="text"
          name="searchField"
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.searchButton}>
          <FaMagnifyingGlass />
        </button>
      </form>
      <Toaster />
    </header>
  );
}