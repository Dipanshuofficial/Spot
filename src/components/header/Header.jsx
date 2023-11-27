import React from "react";
import styles from "./header_styles.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>BlogSpot</h1>
      <div className={styles.links}>
        <a href="/">Home</a>
        <a href="/#">Categories</a>
        <a href="/#">Trending</a>
        <a href="/#">News</a>
        <a href="/#">Contact Us</a>
      </div>
      <div className={styles.lsup}>
        <a href="/">login</a>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Header;
