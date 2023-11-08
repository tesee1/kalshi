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
<p>Information provided based on&nbsp;historical data of&nbsp;the Exchange. Contracts traded is&nbsp;defined as&nbsp;the dollar volume of&nbsp;the Exchange since inception. As&nbsp;of&nbsp;May&nbsp;15, 2023, the historical amount of&nbsp;contracts traded was above 120,000,000. Open interest is&nbsp;defined to&nbsp;be&nbsp;the number of&nbsp;outstanding contracts that are trading on&nbsp;an&nbsp;exchange at&nbsp;any moment of&nbsp;time. On&nbsp;May&nbsp;15, 2023, the open interest on&nbsp;the Exchange was above 4,000,000. <br /> <br />

While Kalshi strives to&nbsp;provide accurate and timely information, there may be&nbsp;inadvertent inaccuracies, errors and omissions, for which we&nbsp;apologize and expressly disclaim any liability. We&nbsp;reserve the right to&nbsp;make changes and corrections at&nbsp;any time, without notice. The content is&nbsp;provided on&nbsp;an&nbsp;&laquo;AS&nbsp;IS,&raquo; &laquo;AS&nbsp;AVAILABLE&raquo; Basis. Any information denoting past or&nbsp;historical performance is&nbsp;not indicative of&nbsp;future performance and no&nbsp;reliance shall be&nbsp;placed on&nbsp;such information. <br /> <br />

Trading on&nbsp;Kalshi involves risk and may not be&nbsp;appropriate for all. Members risk losing their cost to&nbsp;enter any transaction, including fees. You should carefully consider whether trading on&nbsp;Kalshi is&nbsp;appropriate for you in&nbsp;light of&nbsp;your investment experience and financial resources. Any trading decisions you make are solely your responsibility and at&nbsp;your own risk. Past performance is&nbsp;not necessarily indicative of&nbsp;future results. <br /> <br />

Kalshi is&nbsp;subject to&nbsp;U.S. regulatory oversight by&nbsp;the CFTC.</p>
              </div>
          </div>
    </footer>
  )
}

export default Footer
