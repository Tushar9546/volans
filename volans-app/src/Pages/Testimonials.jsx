import React from 'react';
import styles from "../Styles/Testimonials.module.css";
import footer from "../assets/footer-curve.png";
import TestimonialCard from '../Components/TestimonialCard';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md"

const Testimonials = () => {
  let box = document.querySelector('.ProContainer');

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
    <section className={styles.testWrapper}>
      <img src={footer} alt="Curve"/>
      <div className={styles.info}>
        <h2>Testimonials</h2>
        <p>LoremIpsumLorem</p>
      </div>
      <div className={styles.Container}>
        <MdKeyboardArrowLeft size={40} className={styles.preBtn} onClick={btnpressprev} />
        <MdKeyboardArrowRight size={40} className={styles.nextBtn} onClick={btnpressnext} />
        <div className={styles.ProContainer}>
            <TestimonialCard cardno='1'/>
            <TestimonialCard cardno='2' />
            <TestimonialCard cardno='3' />
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
