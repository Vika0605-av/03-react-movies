import styles from './SearchBar.module.css';
type Props = {
    onSearch: (query: string) => void;
};
export const SearchBar = ({ onSearch }: Props) => {
    const handleSubmit = (formData: FormData) => {
        const query = formData.get('query') as string;
         
        if (!query.trim()) {
            alert('Please enter a search query.');
            return
        }
        onSearch(query);
    }
    return (
     <form action={handleSubmit}>
        <input name="query" type="text" placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>
    );
};
        <header className={styles.header}>
          <div className={styles.container}>
            <a
              className={styles.link}
              href="https://www.themoviedb.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by TMDB
    </a>
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies..."
        autoFocus
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  </div>
</header>
    