import React from "react";
import styles from "./footer_styles.module.css";
function Footer() {
  return (
    <div className={styles.colored}>
      <div className={styles.container}>
        <div className={styles.container_inner1}>
          <div className={styles.text}>
            <h1>BlogSpot</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus magnam sequi omnis delectus quod!
            </p>
          </div>
          <div className={styles.links}>
            <h2>Quick Links</h2>
            <ul>
              <li><a href="/#">Home</a></li>
              <li><a href="/#">Categories</a></li>
              <li><a href="/#">Trending</a></li>
              <li><a href="/#">News</a></li>
              <li><a href="/#">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.follow}>
            <h2>Follow us</h2>
            <ul>
              <li><a href="/#">Facebook</a></li>
              <li><a href="/#">Twitter</a></li>
              <li><a href="/#">Instagram</a></li>
            </ul>
          </div>
          <div className={styles.location}>
            <h2>Office Location</h2>
            <ul>
              <li>Zone/Block Basement 1 Unit B1</li>
              <li>1234567890 0987654321</li>
              <li>something@gmail.com</li>
              <li>someone@gmail.com</li>
            </ul>
          </div>
        </div>
        <span className={styles.line}></span>
        <div className={styles.container_inner2}>
          <div className={styles.cpyrt}>
            <h4>Copyright ©️2023 BlogSpot all rights reserved</h4>
          </div>
          <div className={styles.others}>
            <a href="/#">Privacy policy</a>
            <a href="/#">Content policy</a>
            <a href="/#">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
