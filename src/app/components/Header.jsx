import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
export default function Header () {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} inner`}>
        <div className={styles.logoContainer}>
          <a className={styles.logo} href=""><p>Nicolas Meza</p></a>
          <ul className={styles.listcontainer}>
            <li className={`${styles.font300}`}><a href="" className={styles.btnRef}>HOME</a></li>
            <li className={`${styles.font300}`}><a href="" className={styles.btnRef}>ABOUT</a></li>
            <li className={`${styles.font300}`}><a href="" className={styles.btnRef}>PROJECTS</a></li>
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
