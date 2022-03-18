import React, { useState, useEffect } from "react";
import Head from "next/head";
import SearchBox from "../components/SearchBox";
import PokemonCard from "../components/PokemonCard";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
import axios from "axios";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = async () => {
    const data = await axios.get(
      `http://localhost:8000/api/?search=${search}&page=${page}`
    );
    setPokemon(data.data.data);
    setPages(data.data.pages);
  };

  const handleAdvancedSearch = async (reqBody) => {
    console.log(reqBody);
    const data = await axios.post("http://localhost:8000/api", reqBody);
    setPokemon(data.data.data);
    setPages(data.data.pages);
    const display = document.querySelector("#search_display");
    display.scrollIntoView();
  };

  useEffect(() => {
    handleSubmitSearch();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
      </Head>
      <div className={styles.inner_container}>
        <div className={styles.search_container}>
          <h1 className={styles.title}>Pokedex</h1>
          <SearchBox
            search={search}
            setSearch={handleSearchChange}
            submitSearch={handleSubmitSearch}
            handleSubmit={handleSubmitSearch}
          />
          <AdvancedSearch search={handleAdvancedSearch} />
        </div>
        <div className={styles.box}>
          <div className={styles.search_display} id="search_display">
            {pokemon.length > 0 ? (
              pokemon.map((pokemon) => (
                <PokemonCard key={pokemon.number} pokemon={pokemon} />
              ))
            ) : (
              <div className={styles.noResults}>
                <h4>No Pokemon Matched Your Search!</h4>
                <p>Try these suggestions to find a Pokemon:</p>
                <ul>
                  <li>Reduce the number of seach parameters</li>
                  <li>Search for only one Pokemon type at a time</li>
                  <li>Try multiple body sizes and shapes</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
