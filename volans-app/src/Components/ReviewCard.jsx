import React from 'react';
import quote from "../assets/quote.jpg";
import styles from "../Styles/ReviewCard.module.css";

const ReviewCard = (props) => {
  return (
    <div className={styles.cardWrapper}>
       <div className={styles.quoteWrapper}>
        <img src={quote} alt="Quote" />
       </div>
       <div className={styles.textWrapper}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, rerum dolorum. Nobis qui hic pariatur libero recusandae sunt nam soluta iste voluptas, ad tenetur neque vel ipsa illo et sapiente.</p>
       </div>
       <hr></hr>
       <div className={styles.userWrapper}>
        <div className={styles.imgWrapper}>
          <img src="https://i.pinimg.com/474x/7f/9c/34/7f9c341586ad0933aecb40fc24c3a4a6.jpg" alt="User"/>
        </div>
        <div className={styles.userInfo}>
          <h2>Lorem ipsum Lorem</h2>
          <p>Lorem ipsum Lorem</p>
        </div>
       </div>
    </div>
  )
}

export default ReviewCard
