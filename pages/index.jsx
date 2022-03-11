import React, { useState, useEffect } from "react";
import Head from "next/head";
import SearchBox from "../components/SearchBox";
import PokemonCard from "../components/PokemonCard";
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
        </div>
        <div className={styles.box}>
          <div className={styles.search_display}>
            {pokemon.length > 0 &&
              pokemon.map((pokemon) => (
                <PokemonCard key={pokemon.number} pokemon={pokemon} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
