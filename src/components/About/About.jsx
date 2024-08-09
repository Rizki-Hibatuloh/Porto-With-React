import React from 'react'

import styles from './About.module.css'
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
          <h2 className={styles.title}>About</h2>
          <div className={styles.content}>
               <img 
               src={getImageUrl("about/aboutImage.png")} alt="About-Image" 
               className={styles.aboutImage}
               />
               <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                         <img 
                         src={getImageUrl("about/cursorIcon.png")} 
                         alt="cursor-image" 
                         />
                         <div className={StyleSheet.aboutItemText}>
                              <h3>Frontend Developer</h3>
                              <p>
                                   I'm a Frontend Developer with experience in build and 
                                   optimazied sites
                              </p>
                         </div>
                    </li>

                    <li className={styles.aboutItem}>
                         <img 
                         src={getImageUrl("about/serverIcon.png")} 
                         alt="Server-image" 
                         />
                         <div className={StyleSheet.aboutItemText}>
                              <h3>Backend Developer</h3>
                              <p>
                                   I have experience developing fast and optimized and APIs
                              </p>
                         </div>
                    </li>

                    <li className={styles.aboutItem}>
                         <img 
                         src={getImageUrl("about/uiIcon.png")} 
                         alt="UI-image" 
                         />
                         <div className={StyleSheet.aboutItemText}>
                              <h3>UI Designer</h3>
                              <p>
                                   I have designed multiple landing pages and have created deign systems as well
                              </p>
                         </div>
                    </li>
               </ul>
          </div>
    </section>
  )
}

export default About;
