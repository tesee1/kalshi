
import React from 'react'
import styles from './HeroSection.module.scss'
import cn from 'classnames';
import Access from '../Access/Access';
import HeroSwiper from '../HeroSwiper/HeroSwiper';
import { heroItems } from '../../../../data/hero';
import Link from 'next/link';
import Image from 'next/image';


const HeroSection = () => {
  return (
      <section className={styles.hero}>
          <div className={cn("container", styles.container)}>
              <div className={styles.top}>
                  <h1 className={styles.title}><span>Trade on the</span> <br />
                      outcome of events</h1>
                  <Access />
              </div>
              <div className={styles.bottom}>
                  <HeroSwiper data={heroItems} />
                  <ul className={styles.list}>
                      {heroItems.map(({title, shortTitle, img}) => {
                          return (
                              <li key={title}>
                                  <Link href='/login'>
                                      <Image alt={shortTitle} src={img} />
                                      <span>{shortTitle}</span>
                                  </Link>
                              </li>
                          )
                      })}
                  </ul>
              </div>
          </div>
    </section>
  )
}

export default HeroSection