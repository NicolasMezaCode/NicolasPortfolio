import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
export default function Header () {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} inner`}>
        <div className={styles.logoContainer}>
          <a href=""> <Image src='/images/logo.png' alt='logo' width={201} height={31} /></a>
          <ul className={styles.listcontainer}>
            <li className={styles.marginright}><a href="">Home</a></li>
            <li className={styles.marginright}><a href="">About</a></li>
            <li className={styles.marginright}><a href="">Projects</a></li>
          </ul>
        </div>
        <div className={styles.contactcsontainer}>
          <ul className={styles.listcontainer}>
            <li className={styles.marginright}><a href="">Contact</a></li>
            <li className={styles.marginright}><a href="">Blog</a></li>
            <li className={styles.marginright}><a href="">Github</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
