import React, {FC} from 'react'
import styles from './InfoBlock.module.scss'
import cn from 'classnames';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';

interface InfoBlockProps {
    title: string;
    data: {
    title: string;
    date: string;
    change: string;
    color: string;
    img: StaticImageData;
}[];
    appearance: 'column2' | 'column4'
}

const InfoBlock: FC<InfoBlockProps> = ({title, data, appearance}) => {
  return (
      <section className={styles.infoblock}>
          <div className={cn('container', styles.container)}>
              <div className={styles.top}>
                  <h2>{title}</h2>
                  <Link href="/login">See all</Link>
              </div>
              <ul className={cn(styles.bottom, { [styles.grid2]: appearance === 'column2' })}>
                  {data.map(({ title, date, change, color, img }) => {
                      return (
                          <li key={title}>
                              <Link href="/login">
                                  <Image alt="Image" src={img} />
                                  <div>
                                      <h4>{title}</h4>
                                  <p>{date}</p>
                                  <span className={classNames({[styles.green]: color === 'green'})}>{change}</span>
                                  </div>
                              </Link>
                          </li>
                      )
                  })}
              </ul>
          </div>
    </section>
  )
}

export default InfoBlock