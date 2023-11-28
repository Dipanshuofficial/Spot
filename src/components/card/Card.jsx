import React from "react";
import styles from "./card_styles.module.css";
import pic from "./python.png";
function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.innerC}>
        <div className={styles.firstC}>
          <h3>You’re Decent At Python If You Can Find These 4 Mistakes</h3>
          <p>
            How this works There’ll be 4 Python functions, and each does
            something Each function has ONE wrong line You need to take steps to
            dkjfdsafjkhdsfksdhkfsd
            sdflfhfla
            afhkjdahfkdshf
            
          </p>
        </div>
        <div className={styles.spans}>
          <span className={styles.catry}>Python</span>
          <span>28/11/2023</span>
        </div>
      </div>
      <img src={pic} alt="python" />
    </div>
  );
}

export default Card;
