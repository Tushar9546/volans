import React from 'react';
import heroimg from "../assets/hero-banner-girl.png";
import styles from "../Styles/Home.module.css";

const Home = () => {
  return (
    <section className={styles.homeWrapper}>
        <div className={styles.firstHalf}>
            <div className={styles.infoWrapper}>
                <h2>
                    Give Wings to Your<br/>
                    Educational Journey
                </h2>
                <button className={styles.btn}>get started</button>
            </div>
            <div className={styles.animationWrapper}>
                <img className={styles.hero} src={heroimg} alt='Animated Image' />
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B9D9EB"  fill-opacity="0.9" d="M0,64L60,96C120,128,240,192,360,208C480,224,600,192,720,165.3C840,139,960,117,1080,106.7C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </section>
  )
}

export default Home
