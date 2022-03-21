import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/FiltersBox.module.scss";

const FiltersBox = ({ randomSearch, handleSortChange }) => {
  const [sort, setSort] = useState("Lowest Number (First)");
  const [open, setOpen] = useState(false);

  const handleSortInputChange = (e) => {
    const text = e.target.innerText;
    setSort(text);
    setOpen(false);
    if (text === "Highest Number (First)") {
      handleSortChange("10");
    } else if (text === "A - Z") {
      handleSortChange("az");
    } else if (text === "Z - A") {
      handleSortChange("za");
    } else {
      handleSortChange("01");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <button
          type="button"
          className={styles.randomBtn}
          onClick={() => randomSearch([])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-arrow-repeat"
            viewBox="0 0 16 16"
          >
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
            <path
              fillRule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
            />
          </svg>
          Surprise Me!
        </button>
        <div className={styles.filter} id="filter_container">
          <div className={styles.filterDisplay}>
            {sort}
            <div
              className={styles.openBtn}
              onClick={() => setOpen((prev) => !prev)}
            >
              <Image
                src={open ? "/chevron-up.svg" : "/chevron-down.svg"}
                alt=""
                width="24"
                height="24"
              />
            </div>
          </div>
          {open === true && (
            <div
              className={styles.filterOptions}
              style={{
                width: `${
                  document.querySelector("#filter_container").scrollWidth
                }px`,
              }}
            >
              <div className={styles.options}>
                <span>Sort results by...</span>
                <span onClick={(e) => handleSortInputChange(e)}>
                  Lowest Number (First)
                </span>
                <span onClick={(e) => handleSortInputChange(e)}>
                  Highest Number (First)
                </span>
                <span onClick={(e) => handleSortInputChange(e)}>A - Z</span>
                <span onClick={(e) => handleSortInputChange(e)}>Z - A</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FiltersBox;
