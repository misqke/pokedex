import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import SearchBox from "../components/SearchBox";
import PokemonCard from "../components/PokemonCard";
import AdvancedSearch from "../components/AdvancedSearch/AdvancedSearch";
import FiltersBox from "../components/FiltersBox";
import axios from "axios";
import styles from "../styles/Home.module.scss";

const compareSearch = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  const obj1Values = Object.values(obj1);
  const obj2Values = Object.values(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  let match = true;
  for (let i = 0; i < obj1Keys.length; i++) {
    if (obj1Keys[i] !== obj2Keys[i] || obj1Values[i] !== obj2Values[i]) {
      match = false;
    }
  }
  return match;
};

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [search, setSearch] = useState("");
  const [advancedSearch, setAdvancedSearch] = useState({});
  const [random, setRandom] = useState(false);
  const [sort, setSort] = useState("01");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleSortChange = (sortValue) => {
    setRandom(false);
    setPage(1);
    setSort(sortValue);
  };

  const handleAdvancedSearch = async (reqBody = advancedSearch) => {
    setRandom(false);
    const request = { ...reqBody, search };
    if (!compareSearch(request, advancedSearch) || page === 1) {
      setAdvancedSearch(request);
      setPage(1);
      const pokemon = await axios.post(
        `https://misqke-pokemon-api.herokuapp.com/api/search/?page=${1}&sort=${sort}`,
        request
      );
      setPokemon(pokemon.data.data);
      setPages(pokemon.data.pages);
    } else if (compareSearch(request, advancedSearch)) {
      const pokemon = await axios.post(
        `https://misqke-pokemon-api.herokuapp.com/api/search/?page=${page}&sort=${sort}`,
        request
      );
      setPokemon((prev) => [...prev, ...pokemon.data.data]);
    }
    if ((search || Object.keys(request).includes("minNum")) && page === 1) {
      const display = document.querySelector("#search_display");
      display.scrollIntoView();
    }
  };

  const handleRandomPokemon = async (currentPokemon) => {
    const pokemonNames = currentPokemon.map((pokemon) => pokemon.name);
    const reqBody = { pokemon: pokemonNames };
    const data = await axios.post(
      `https://misqke-pokemon-api.herokuapp.com/api/random`,
      reqBody
    );
    if (currentPokemon.length === 0) {
      setRandom(true);
      setPokemon(data.data.data);
    } else {
      setPokemon((prev) => [...prev, ...data.data.data]);
    }
  };

  useEffect(() => {
    if (random) {
      handleRandomPokemon(pokemon);
    } else if (!random) {
      handleAdvancedSearch(advancedSearch);
    }
  }, [page, sort]);

  useEffect(() => {
    const searchBox = document.querySelector("#search_container");
    const btn = document.querySelector("#scroll_btn");
    const scrollObs = new IntersectionObserver(
      (entry) => {
        btn.classList.toggle(`${styles.visible}`, !entry[0].isIntersecting);
      },
      { threshold: 1 }
    );
    scrollObs.observe(searchBox);
  }, []);

  return (
    <div className={styles.container} id="home_page">
      <Head>
        <title id="title">Pokedex</title>
      </Head>
      <div className={styles.inner_container}>
        <div className={styles.search_container} id="search_container">
          <h1 className={styles.title}>Pokedex</h1>
          <SearchBox
            search={search}
            setSearch={handleSearchChange}
            handleAdvancedSearch={handleAdvancedSearch}
          />
          <AdvancedSearch search={handleAdvancedSearch} />
        </div>
        <div className={styles.box}>
          <FiltersBox
            randomSearch={handleRandomPokemon}
            handleSortChange={handleSortChange}
          />
          <div className={styles.search_display} id="search_display">
            {pokemon.length > 0 ? (
              pokemon.map((pokemon, i) => (
                <PokemonCard
                  id={`card${i}`}
                  key={pokemon.number}
                  pokemon={pokemon}
                />
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
          {page < pages && (
            <div className={styles.loadMore}>
              <button type="button" onClick={() => setPage((prev) => prev + 1)}>
                Load more Pokemon
              </button>
            </div>
          )}
        </div>
      </div>
      {
        <button
          type="button"
          id="scroll_btn"
          className={`${styles.toTopBtn}`}
          onClick={scrollToTop}
        >
          <Image
            src={"/chevron-up.svg"}
            width={20}
            height={20}
            layout="responsive"
            alt="to top"
          />
        </button>
      }
    </div>
  );
}
