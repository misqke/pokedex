import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/PokemonPage.module.scss";
import Image from "next/image";
import StatBlock from "../components/StatBlock";
import InfoBlock from "../components/InfoBlock";

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

  const getStyle = (type) => {
    switch (type) {
      case "Bug":
        return {
          backgroundColor: "#729f3f",
          color: "#fff",
        };
      case "Dragon":
        return {
          background: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
          color: "#fff",
        };
      case "Fairy":
        return {
          background: "#fdb9e9",
          color: "#212121",
        };
      case "Fire":
        return {
          background: "#fd7d24",
          color: "#fff",
        };
      case "Ghost":
        return {
          background: "#7b62a3",
          color: "#fff",
        };
      case "Ground":
        return {
          background: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
          color: "#212121",
        };
      case "Normal":
        return {
          background: "#a4acaf",
          color: "#212121",
        };
      case "Psychic":
        return {
          background: "#f366b9",
          color: "#fff",
        };
      case "Steel":
        return {
          background: "#9eb7b8",
          color: "#212121",
        };
      case "Dark":
        return {
          background: "#707070",
          color: "#fff",
        };
      case "Electric":
        return {
          background: "#eed535",
          color: "#212121",
        };
      case "Fighting":
        return {
          background: "#d56723",
          color: "#fff",
        };
      case "Flying":
        return {
          background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
          color: "#212121",
        };
      case "Grass":
        return {
          background: "#9bcc50",
          color: "#212121",
        };
      case "Ice":
        return {
          background: "#51c4e7",
          color: "#212121",
        };
      case "Poison":
        return {
          background: "#b97fc9",
          color: "#fff",
        };
      case "Rock":
        return {
          background: "#a38c21",
          color: "#fff",
        };
      case "Water":
        return {
          backgroundColor: "#4592c4",
          color: "#fff",
        };
      default:
        return {
          background: "#fff",
          color: "#212121",
        };
    }
  };

  return (
    <div className={styles.container}>
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
            <Image src={pokemon.img.large} width={475} height={475}></Image>
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
                <div key={type} className={styles.type} style={getStyle(type)}>
                  {type}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.type_box}>
            <h6>Weaknesses</h6>
            <div className={styles.types_box}>
              {pokemon.weaknesses.map((type) => (
                <div key={type} className={styles.type} style={getStyle(type)}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className={`${styles.box} ${styles.bottom}`}></div>
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
      pokemon: data.data,
    },
  };
};