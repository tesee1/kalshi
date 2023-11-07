import React from 'react'
import Logo from '@/shared/assets/icons/logo.svg';
import Search from '@/shared/assets/icons/search.svg';
import Image from 'next/image';
import styles from './Navbar.module.scss'
import classNames from 'classnames';
import Link from 'next/link';

const Navbar = () => {
  return (
      <header className={styles.header}>
          <div className={classNames("container", styles.container)}>
              <Link className={styles.logo} href="/"><Logo /></Link>
              <nav className={styles.nav}>
                  <ul>
                      <li><Link href="/">Events</Link></li>
                      <li><Link href="/">Financials</Link></li>
                      <li><Link href="/">API</Link></li>
                      <li><Link href="/">Learn</Link></li>
                  </ul>
              </nav>
              <form className={styles.form}>
                  <Search />
                  <input placeholder='Search' type="text" />
                  <span>⌘/</span>
              </form>
              <div className={styles.btns}>
                  <Link href="/login" className={styles.login}>Log in</Link>
                  <Link href="/" className={styles.signup}>Sign up</Link>
              </div>
          </div>
    </header>
  )
}

export default Navbar