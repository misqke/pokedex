import React from "react";
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/PokemonCard.module.scss";
import getTypeStyles from "../util/getTypeStyle";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.img_container}
        onClick={() => Router.push(`/${pokemon.number}`)}
      >
        <Image
          className={styles.img}
          src={pokemon.img.small}
          width={205}
          height={205}
          alt=""
          layout="responsive"
        />
      </div>
      <span>
        {pokemon.number < 10
          ? `#00${pokemon.number}`
          : pokemon.number < 100
          ? `#0${pokemon.number}`
          : `#${pokemon.number}`}
      </span>
      <p>{pokemon.name}</p>
      <div className={styles.type_container}>
        {pokemon.type.map((type, i) => (
          <div key={i} className={styles.type} style={getTypeStyles(type)}>
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
