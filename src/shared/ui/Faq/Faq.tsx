import React from 'react'
import styles from './Faq.module.scss'
import cn from 'classnames'
import FaqImage from './faq.png'
import Access from '../Access/Access'
import Image from 'next/image'
import { faq } from '../../../../data/faq'
import Accordeon from '../Accordeon/Accordeon'

const Faq = () => {
  return (
      <section className={styles.faq}>
          <div className={cn("container", styles.container)}>
              <div className={styles.left}>
                  <h2 className={styles.title}>
                      <span>Trade on the</span> <br />
                            App, Web & API
                  </h2>
                  <Access />
                  <Image src={FaqImage} width={400} alt='image' />
              </div>
              <div className={styles.right}>
                  <h2 className={styles.rightTitle}>FAQ</h2>
                  <ul>{faq.map(({ title, content }) => {
                      return (
                          <Accordeon key={title} title={title} content={content} />
                      )
                  })}</ul>
              </div>
          </div>
    </section>
  )
}

export default Faq