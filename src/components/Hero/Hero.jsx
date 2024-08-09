import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
          <div className={styles.content}>
               <h1 className={styles.title}>Hi, i'm Rizki</h1>
               <p className={styles.description}>
                    I'm a Full Stack Web Developer.
                    I have a passion for creating beautiful and functional web applications.
                    I'm currently looking for a job as a Full Stack Web Developer.
                    I'm a self-taught developer and I'm always learning new things.
               </p>
               <a href="mailto:rizkihibatuloh0123@gmail.com" className={styles.contactBtn}>Contact Me</a>
          </div>
          <img  src={getImageUrl("hero/heroImage.png")} alt='Hero Image me' className={styles.heroImage}/>
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero;
