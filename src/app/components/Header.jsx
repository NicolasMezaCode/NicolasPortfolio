import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
export default function Header () {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} inner`}>
        <div className={styles.logoContainer}>
          <a className={styles.logo} href=""><Image src='/images/logo.png' alt='logo' width={178} height={26} /></a>
          <ul className={styles.listcontainer}>
            <li className={`${styles.marginright} ${styles.font700}`}><a href="">Home</a></li>
            <li className={`${styles.marginright} ${styles.font700}`}><a href="">About</a></li>
            <li className={`${styles.marginright} ${styles.font700}`}><a href="">Projects</a></li>
          </ul>
        </div>
        <div className={styles.contactcontainer}>
          <ul className={styles.listcontainer}>
            <li className={`${styles.marginright} ${styles.font300}`}><a href="">Contact</a></li>
            <li className={`${styles.marginright} ${styles.font300}`}><a href="">Blog</a></li>
            <li className={`${styles.marginright} ${styles.font300}`}><a href="">Github</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
