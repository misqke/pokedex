import React from "react";
import styles from "../styles/InfoBlock.module.scss";

const InfoBlock = ({ info }) => {
  const handleInfoClick = (ability) => {
    return (e) => {
      const adjustedAbility = ability.split(" ").join("");
      const abilityDesc = document.querySelector(`#${adjustedAbility}`);
      abilityDesc.classList.toggle(styles.active);
    };
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <section>
          <p className={styles.name}>{info[0].name}</p>
          <p className={styles.value}>{info[0].value}</p>
        </section>
        <section>
          <p className={styles.name}>{info[1].name}</p>
          <p className={styles.value}>{info[1].value}</p>
        </section>
        <section>
          <p className={styles.name}>{info[2].name}</p>
          <p className={styles.value}>
            {info[2].value.includes("Male") && (
              <span className={styles.gender}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gender-male"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                  />
                </svg>
              </span>
            )}
            {info[2].value.includes("Female") && (
              <span className={styles.gender}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gender-female"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
                  />
                </svg>
              </span>
            )}
            {!info[2].value.includes("Male") &&
              !info[2].value.includes("Female") && (
                <span className={styles.value}>{info[2].value}</span>
              )}
          </p>
        </section>
      </div>
      <div className={styles.box}>
        <section>
          <p className={styles.name}>{info[3].name}</p>
          <p className={styles.value}>{info[3].value}</p>
        </section>
        <section>
          <p className={styles.name}>{info[4].name}</p>
          {info[4].value.map((stuff, i) => (
            <div key={i} className={styles.ability_box}>
              <p className={styles.value} key={i}>
                {stuff.name}
              </p>
              <div
                className={styles.info_btn}
                onClick={handleInfoClick(stuff.name)}
              >
                <svg
                  style={{ color: "#fff", margin: "auto" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-question-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                </svg>
              </div>
            </div>
          ))}
        </section>
      </div>
      {info[4].value.map((ability) => (
        <div
          key={ability.name}
          id={ability.name.split(" ").join("")}
          className={styles.ability_desc}
        >
          <h5>Ability Info</h5>
          <h3>{ability.name}</h3>
          <p>{ability.desc}</p>
          <div className={styles.close} onClick={handleInfoClick(ability.name)}>
            X Close
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoBlock;
