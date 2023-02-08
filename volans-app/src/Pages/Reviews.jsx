import React from 'react';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md"
import styles from "../Styles/Reviews.module.css";
import ReviewCard from '../Components/ReviewCard';

const Reviews = () => {
  let box = document.querySelector('.productContainer');

  const btnpressprev = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      console.log(width)
  }

  const btnpressnext = () => {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log(width)
  }

  return (
    <section className={styles.reviewWrapper}>
      <div className={styles.headingWrapper}>
        <h2>University <span>Reviews</span></h2>
        <p>Lorem IpsumLorem IpsumLorem IpsumLorem</p>
      </div>
      <div className={styles.cardContainer}>
        <MdKeyboardArrowLeft size={40} className={styles.preBtn} onClick={btnpressprev} />
        <MdKeyboardArrowRight size={40} className={styles.nextBtn} onClick={btnpressnext} />
        <div className={styles.productContainer}>
            <ReviewCard cardno='1' />
            <ReviewCard cardno='2' />
            <ReviewCard cardno='3' />
            <ReviewCard cardno='4' />
            <ReviewCard cardno='5' />
            <ReviewCard cardno='6' />
            <ReviewCard cardno='7' />
            <ReviewCard cardno='8' />
            <ReviewCard cardno='9' />
            <ReviewCard cardno='10' />
            <ReviewCard cardno='11' />
            <ReviewCard cardno='12' />
            <ReviewCard cardno='13' />
            <ReviewCard cardno='14' />
        </div>
      </div>
    </section>
  )
}

export default Reviews
