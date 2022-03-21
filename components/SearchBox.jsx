import React from "react";
import styles from "../styles/SearchBox.module.scss";

const SearchBox = ({ search, setSearch, handleAdvancedSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdvancedSearch();
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h3>Name or Number</h3>
        <form className={styles.search_box} onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={(e) => setSearch(e)} />
          <button className={styles.search_btn} type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <p>
          Use the Advanced Search to explore Pokémon by type, weakness, Ability,
          and more!
        </p>
      </div>
      <div className={styles.banner}>
        <h2>
          Search for a Pokémon by name or using its National Pokédex number.
        </h2>
      </div>
    </div>
  );
};

export default SearchBox;
