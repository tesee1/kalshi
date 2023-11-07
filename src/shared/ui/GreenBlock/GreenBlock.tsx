import React, { FC } from 'react'
import styles from './GreenBlock.module.scss'
import cn from 'classnames'
import { greenBlock1, greenBlockInfo } from '../../../../data/greenblock';
import Image, { StaticImageData } from 'next/image';

interface GreenBlockProps {
    upperBlock: Boolean;
    data: { img: StaticImageData, text: string, title?: string; }[];
}

const GreenBlock: FC<GreenBlockProps> = ({upperBlock, data}) => {
  return (
      <div className={styles.GreenBlock}>
          <div className={cn('container', styles.container)}>
              {upperBlock && <div className={styles.top}>
                  <ul>
                      {greenBlockInfo.map(({ title, value }) => {
                      return (
                          <li key={title}>
                              <h3>{title}</h3>
                              <span>{value}</span>
                          </li>
                      )
                  })}
                  </ul>
              </div>}
              <div className={styles.bottom}>
                  <ul>
                      {data.map(({ img, text, title }) => {
                          return (
                              <li key={text}>
                                  <Image width={56} src={img} alt='Image' />
                                  {title ? <h3>{title}</h3> : ''}
                                  <p dangerouslySetInnerHTML={{__html: text}}></p>
                              </li>
                          )
                      })}
                  </ul>
              </div>
          </div>
    </div>
  )
}

export default GreenBlock