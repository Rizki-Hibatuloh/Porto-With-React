import React, {useState} from 'react'
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
export const Navbar = () => {
     const [menuOpen, setmenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
          <a className={styles.title} href ="/">Portofolio</a>
          <div className={styles.menu}>
               <img className= {styles.menuBtn} 
               src={
                    menuOpen 
                    ? getImageUrl("nav/closeIcon.png") 
                    : getImageUrl("nav/menuIcon.png")
               } 
               alt='menu-button'
               onClick={() => setmenuOpen(!menuOpen)}
               />
               <ul className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}
               onClick={() => setmenuOpen(false)}>
                    <li>
                         <a href="#about">About</a>
                    </li>
                    <li>
                         <a href="#experience">Experience</a>
                    </li>
                    <li>
                         <a href="#project">Project</a>
                    </li>
                    <li>
                         <a href="#contact">Contact</a>
                    </li>
               </ul>
          </div>
    </nav>
  )
}

export default Navbar;