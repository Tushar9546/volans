import React from 'react';
import volans from "../assets/why-volans.png";
import styles from "../Styles/About.module.css";

const About = () => {
  return (
    <section className={styles.aboutWrapper}>
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <h2>Why <span>Volnas Academia</span></h2>
                    <ul>
                        <li>Hands-on Data Analysis Training</li>
                        <li>Coaching from Industry Experts</li>
                        <li>Simulation Tests</li>
                        <li>Practice Papers</li>
                        <li>Real Life Projects</li>
                        <li>Access to Online Webinars</li>
                    </ul>
                </div>
            </div>
            <div className={styles.heroWrapper}>
                <img className={styles.img} src={volans} alt="Why Volans"/>
            </div>

        </div>
      
    </section >
  )
}

export default About
