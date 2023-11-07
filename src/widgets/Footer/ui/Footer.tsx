"use client";
import React, { useEffect, useState } from 'react'
import styles from './Footer.module.scss'
import { menu } from '../../../../data/menu'
import Link from 'next/link'
import classNames from 'classnames'

const menuItems = menu;

const Footer = () => {
    const [items, setItems] = useState([
        {
            title: 'Item',
            links: [
                {
                    title: 'Link',
                    link: '/'
                }
            ]
        }
    ]);


    useEffect(() => {
        setItems(menuItems)
    }, [])
  return (
      <footer className={styles.footer}>
          <div className={classNames(styles.container, 'container')}>
              <div className={styles.top}>
                  <nav className={styles.nav}>
                      {items.map(({ title, links }) => {
                          return (
                              <div key={title}>
                                  <span>{title}</span>
                                  <ul>{links.map(({title, link}) => <li key={title}><Link href={`${link}`}>{title}</Link></li>)}</ul>
                              </div>
                          )
                      })}
                  </nav>
              </div>
              <div className={styles.bottom}>
                  <small>© 2023 Kalshi Inc.</small>
                  <p>Information provided based on historical data of the Exchange. Contracts traded is defined as the dollar volume of the Exchange since inception. As of May 15, 2023, the historical amount of contracts traded was above 120,000,000. Open interest is defined to be the number of outstanding contracts that are trading on an exchange at any moment of time. On May 15, 2023, the open interest on the Exchange was above 4,000,000. <br /> <br />

While Kalshi strives to provide accurate and timely information, there may be inadvertent inaccuracies, errors and omissions, for which we apologize and expressly disclaim any liability. We reserve the right to make changes and corrections at any time, without notice. The content is provided on an "AS IS," "AS AVAILABLE" Basis. Any information denoting past or historical performance is not indicative of future performance and no reliance shall be placed on such information. <br /> <br />

Trading on Kalshi involves risk and may not be appropriate for all. Members risk losing their cost to enter any transaction, including fees. You should carefully consider whether trading on Kalshi is appropriate for you in light of your investment experience and financial resources. Any trading decisions you make are solely your responsibility and at your own risk. Past performance is not necessarily indicative of future results. <br /> <br />

Kalshi is subject to U.S. regulatory oversight by the CFTC.</p>
              </div>
          </div>
    </footer>
  )
}

export default Footer
