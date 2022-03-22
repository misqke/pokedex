import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../styles/PokemonPage.module.scss";
import Image from "next/image";
import Router from "next/router";
import PokemonNav from "../components/PokemonNav";
import StatBlock from "../components/StatBlock";
import InfoBlock from "../components/InfoBlock";
import Evolution from "../components/Evolution";
import getTypeStyle from "../util/getTypeStyle";

const PokemonPage = ({ pokemon }) => {
  const [desc, setDesc] = useState(pokemon.desc1);
  const btn1ref = useRef();
  const btn2ref = useRef();

  const handleDescClick = (num) => {
    return () => {
      if (num === 1) {
        btn1ref.current.classList.add(styles.active_ring);
        btn2ref.current.classList.remove(styles.active_ring);
        setDesc(pokemon.desc1);
      }
      if (num === 2) {
        btn2ref.current.classList.add(styles.active_ring);
        btn1ref.current.classList.remove(styles.active_ring);
        setDesc(pokemon.desc2);
      }
    };
  };

  useEffect(() => {
    setDesc(pokemon.desc1);
    btn1ref.current.classList.add(styles.active_ring);
    btn2ref.current.classList.remove(styles.active_ring);
  }, [pokemon]);

  if (!pokemon) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <PokemonNav num={pokemon.number} />
        <section className={styles.header}>
          <h2>{pokemon.name}</h2>
          <span>
            {pokemon.number < 10
              ? `#00${pokemon.number}`
              : pokemon.number < 100
              ? `#0${pokemon.number}`
              : `#${pokemon.number}`}
          </span>
        </section>
        <div className={`${styles.box} ${styles.top}`}>
          <section className={styles.img}>
            <div className={styles.img_img}>
              <Image
                src={pokemon.img.large}
                width={475}
                height={475}
                priority
                layout="responsive"
              ></Image>
            </div>
            <StatBlock stats={pokemon.stats} />
          </section>
          <section className={styles.desc}>
            <div className={styles.desc_box}>
              <p>{desc}</p>
              <div>
                Versions:
                <div
                  ref={btn1ref}
                  id="desc1"
                  className={`${styles.ring} ${styles.active_ring}`}
                  style={{ borderColor: "#0072b0" }}
                >
                  <div
                    className={styles.desc_btn}
                    onClick={handleDescClick(1)}
                    style={{ backgroundImage: "url('/pokeball-blue.png')" }}
                  ></div>
                </div>
                <div
                  ref={btn2ref}
                  id="desc2"
                  className={styles.ring}
                  style={{ borderColor: "#dd2d51" }}
                >
                  <div
                    className={styles.desc_btn}
                    onClick={handleDescClick(2)}
                    style={{ backgroundImage: "url('/pokeball-red.png')" }}
                  ></div>
                </div>
              </div>
            </div>
            <InfoBlock info={pokemon.info} />
            <div className={styles.type_box}>
              <h6>Type</h6>
              <div className={styles.types_box}>
                {pokemon.type.map((type) => (
                  <div
                    key={type}
                    className={styles.type}
                    style={getTypeStyle(type)}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.type_box}>
              <h6>Weaknesses</h6>
              <div className={styles.types_box}>
                {pokemon.weaknesses.map((type) => (
                  <div
                    key={type}
                    className={styles.type}
                    style={getTypeStyle(type)}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className={`${styles.box} ${styles.bottom}`}>
          <Evolution evolutions={pokemon.evolutions} />
        </div>
        <div className={styles.box}>
          <button onClick={() => Router.push("/")}>Explore More Pokemon</button>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;

export const getServerSideProps = async (context) => {
  const data = await axios.get(
    `https://misqke-pokemon-api.herokuapp.com/api/?num=${context.params.num}`
  );
  return {
    props: {
      pokemon: data.data.data,
    },
  };
};
