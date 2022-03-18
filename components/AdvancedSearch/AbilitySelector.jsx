import React, { useState } from "react";
import Image from "next/image";
import abilitiesList from "../../abilities.json";
import styles from "../../styles/AbilitySelector.module.scss";

const AbilitySelector = ({ ability, handleChange }) => {
  const [open, setOpen] = useState(false);

  const handleAbilitySelect = (ability) => {
    return () => {
      handleChange(ability);
      setOpen(false);
    };
  };

  const handleMenuClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.container} id="ability_container">
      <div className={styles.display}>
        <div className={styles.pokeBall}>
          <Image src="/pokeball.png" width={30} height={30}></Image>
        </div>
        <p>{ability}</p>
        <div className={styles.btn} onClick={handleMenuClick}>
          <Image
            src={open ? "/chevron-up.svg" : "/chevron-down.svg"}
            alt=""
            width="24"
            height="24"
          />
        </div>
      </div>
      {open && (
        <div
          className={styles.selection}
          style={{
            width: `${
              document.querySelector("#ability_container").scrollWidth
            }px`,
          }}
        >
          <div className={styles.selectionBox}>
            {abilitiesList.map((ability, i) => (
              <div
                key={i}
                className={styles.ability}
                onClick={handleAbilitySelect(ability)}
              >
                {ability}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AbilitySelector;
