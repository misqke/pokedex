import React from "react";
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/Evolution.module.scss";
import getTypeStyle from "../util/getTypeStyle";

const Evolution = ({ evolutions }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Evolutions</h3>
      <div className={styles.content_box}>
        {evolutions.map((evo, i) => (
          <div
            key={evo.num}
            className={styles.evo_box}
            onClick={() => Router.push(`/${evo.num}`)}
          >
            <div className={styles.box}>
              <div className={styles.img_box}>
                <Image src={evo.img} width={215} height={215}></Image>
              </div>
              <h4>
                {evo.name}{" "}
                <span>
                  {evo.number < 100
                    ? `#0${evo.num}`
                    : evo.num < 10
                    ? `#00${evo.num}`
                    : `#${evo.num}`}
                </span>
              </h4>
              <div className={styles.type_box}>
                {evo.types.map((type) => (
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
            {i !== evolutions.length - 1 && (
              <div className={styles.arrow}>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Evolution;
