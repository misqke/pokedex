import React, { useState, useEffect } from "react";
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
  pokemon = pokemon[0];
  const [desc, setDesc] = useState(pokemon.desc1);

  const handleDescClick = (num) => {
    return () => {
      const btn1 = document.querySelector("#desc1");
      const btn2 = document.querySelector("#desc2");
      if (num === 1) {
        btn1.classList.add(styles.active_ring);
        btn2.classList.remove(styles.active_ring);
        setDesc(pokemon.desc1);
      }
      if (num === 2) {
        btn2.classList.add(styles.active_ring);
        btn1.classList.remove(styles.active_ring);
        setDesc(pokemon.desc2);
      }
    };
  };

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
                  id="desc1"
                  className={`${styles.ring} ${styles.active_ring}`}
                  style={{ borderColor: "#0072b0" }}
                >
                  <div
                    className={styles.desc_btn}
                    style={{ backgroundColor: "#0072b0" }}
                    onClick={handleDescClick(1)}
                  >
                    <Image src="/pokeball.png" width={30} height={30}></Image>
                  </div>
                </div>
                <div
                  id="desc2"
                  className={styles.ring}
                  style={{ borderColor: "#dd2d51" }}
                >
                  <div
                    className={styles.desc_btn}
                    style={{ backgroundColor: "#dd2d51" }}
                    onClick={handleDescClick(2)}
                  >
                    <Image src="/pokeball.png" width={30} height={30}></Image>
                  </div>
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
    `http://localhost:8000/api/?search=${context.params.num}`
  );
  return {
    props: {
      pokemon: data.data.data,
    },
  };
};
