import React from 'react';
import quote from "../assets/quote.jpg";
import styles from "../Styles/TestimonialCard.module.css";

const TestimonialCard = (props) => {
  return (
    <div className={styles.CardTest}>
       <div className={styles.userImg}>
       <img src="https://i.pinimg.com/474x/7f/9c/34/7f9c341586ad0933aecb40fc24c3a4a6.jpg" alt="User"/>
       </div>
       <div className={styles.userData}>
        <h3>Lorem ipsum Lorem</h3>
        <p>Lorem ipsum Lorem</p>
       </div>
       <div className={styles.quote}>
        <img src={quote} />
       </div>
       <div className={styles.textContainer}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
    
    </div>
  )
}

export default TestimonialCard
