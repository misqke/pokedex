import React, { useState } from "react";
import Image from "next/image";
import AbilitySelector from "./AbilitySelector";
import WeightIcon from "./WeightIcon";
import getTypeStyle from "../../util/getTypeStyle";
import styles from "../../styles/AdvancedSearch.module.scss";

const typesList = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];

const AdvancedSearch = ({ search }) => {
  const [open, setOpen] = useState(false);
  const [types, setTypes] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [minNum, setMinNum] = useState(1);
  const [maxNum, setMaxNum] = useState(898);
  const [heights, setHeights] = useState([]);
  const [weights, setWeights] = useState([]);
  const [ability, setAbility] = useState("All");

  const handleTypesChange = (type) => {
    return () => {
      const index = types.indexOf(type);
      if (index === -1) {
        setTypes((prev) => [...prev, type]);
      } else {
        setTypes((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
      }
    };
  };

  const handleWeaknessesChange = (type) => {
    return () => {
      const index = weaknesses.indexOf(type);
      if (index === -1) {
        setWeaknesses((prev) => [...prev, type]);
      } else {
        setWeaknesses((prev) => [
          ...prev.slice(0, index),
          ...prev.slice(index + 1),
        ]);
      }
    };
  };

  const handleHeightsChange = (height) => {
    return () => {
      const index = heights.indexOf(height);
      if (index === -1) {
        setHeights((prev) => [...prev, height]);
      } else {
        setHeights((prev) => [
          ...prev.slice(0, index),
          ...prev.slice(index + 1),
        ]);
      }
    };
  };

  const handleWeightsChange = (weight) => {
    return () => {
      const index = weights.indexOf(weight);
      if (index === -1) {
        setWeights((prev) => [...prev, weight]);
      } else {
        setWeights((prev) => [
          ...prev.slice(0, index),
          ...prev.slice(index + 1),
        ]);
      }
    };
  };

  const handleAbilityChange = (ability) => {
    setAbility(ability);
  };

  const handleReset = () => {
    setMaxNum(898);
    setMinNum(1);
    setTypes([]);
    setWeaknesses([]);
    setHeights([]);
    setWeights([]);
    setAbility("All");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqBody = { minNum, maxNum };
    if (types.length > 0) reqBody.types = types;
    if (weaknesses.length > 0) reqBody.weaknesses = weaknesses;
    if (heights.length > 0) reqBody.heights = heights;
    if (weights.length > 0) reqBody.weights = weights;
    if (ability !== "All") reqBody.ability = ability;
    search(reqBody);
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit}
        className={`${styles.form} ${open && styles.open}`}
      >
        <div className={styles.box}>
          <section className={styles.types}>
            <p className={styles.title}>Type & Weakness</p>
            <p>
              <strong>T</strong> = Type <strong>W</strong> = Weakness
            </p>
            <div className={styles.types_box}>
              {typesList.map((type, i) => (
                <div key={i} className={styles.type_box}>
                  <div className={styles.type} style={getTypeStyle(type)}>
                    {type}
                  </div>
                  <span
                    className={styles.type_btn}
                    onClick={handleTypesChange(type)}
                    style={{
                      backgroundColor: `${
                        types.includes(type) ? "#30a7d7" : "#fff"
                      }`,
                    }}
                  >
                    T
                  </span>
                  <span
                    className={styles.type_btn}
                    onClick={handleWeaknessesChange(type)}
                    style={{
                      backgroundColor: `${
                        weaknesses.includes(type) ? "#30a7d7" : "#fff"
                      }`,
                    }}
                  >
                    W
                  </span>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.num_range}>
            <p className={styles.title}>Number Range</p>
            <div className={styles.num_range_box}>
              <input
                type="number"
                min={1}
                max={898}
                value={minNum}
                onChange={(e) => setMinNum(e.target.value)}
              />
              -
              <input
                type="number"
                min={1}
                max={898}
                value={maxNum}
                onChange={(e) => setMaxNum(e.target.value)}
              />
            </div>
          </section>
        </div>
        <div className={styles.box}>
          <section className={styles.ability_selector}>
            <p className={styles.title}>Ability</p>
            <AbilitySelector
              ability={ability}
              handleChange={handleAbilityChange}
            />
          </section>
          <section className={styles.height}>
            <p className={styles.title}>Height</p>
            <div className={styles.heightBtnBox}>
              <div
                className={styles.heightBtn}
                onClick={handleHeightsChange("small")}
                style={{
                  backgroundColor: `${
                    heights.includes("small") ? "#ee6b25" : "#fff"
                  }`,
                }}
              >
                <Image
                  src="/small.png"
                  width={48}
                  height={48}
                  alt="height small"
                />
              </div>
              <div
                className={styles.heightBtn}
                onClick={handleHeightsChange("medium")}
                style={{
                  backgroundColor: `${
                    heights.includes("medium") ? "#ee6b25" : "#fff"
                  }`,
                }}
              >
                <Image
                  src="/medium.png"
                  width={60}
                  height={60}
                  alt="height medium"
                />
              </div>
              <div
                className={styles.heightBtn}
                onClick={handleHeightsChange("large")}
                style={{
                  backgroundColor: `${
                    heights.includes("large") ? "#ee6b25" : "#fff"
                  }`,
                }}
              >
                <Image
                  src="/large.png"
                  width={80}
                  height={80}
                  alt="height large"
                />
              </div>
            </div>
          </section>
          <section className={styles.height}>
            <p className={styles.title}>Weight</p>
            <div className={styles.heightBtnBox}>
              <div
                className={styles.heightBtn}
                onClick={handleWeightsChange("small")}
              >
                <WeightIcon
                  size={"small"}
                  active={weights.includes("small") ? true : false}
                />
              </div>
              <div
                className={styles.heightBtn}
                onClick={handleWeightsChange("medium")}
              >
                <WeightIcon
                  size={"medium"}
                  active={weights.includes("medium") ? true : false}
                />
              </div>
              <div
                className={styles.heightBtn}
                onClick={handleWeightsChange("large")}
              >
                <WeightIcon
                  size={"large"}
                  active={weights.includes("large") ? true : false}
                />
              </div>
            </div>
          </section>
          <section className={styles.buttons}>
            <button className={styles.searchBtn} type="submit">
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
              SEARCH
            </button>
            <button
              className={styles.resetBtn}
              type="button"
              onClick={handleReset}
            >
              RESET
            </button>
          </section>
        </div>
      </form>
      <div className={styles.openBtn} onClick={() => setOpen((prev) => !prev)}>
        <span>{`${!open ? "Show" : "Hide"}`} Advanced Search</span>
        <span></span>
      </div>
    </div>
  );
};

export default AdvancedSearch;
