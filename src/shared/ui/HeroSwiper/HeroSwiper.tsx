"use client"
import React, { FC } from 'react'
import styles from './HeroSwiper.module.scss'
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import { Autoplay } from 'swiper/modules';

interface HeroSwiperProps {
  data: {
    title: string;
    shortTitle: string;
    img: StaticImageData;
    number: string;
    word: string;
    change: string;
    color: string;
}[]
}

const HeroSwiper: FC<HeroSwiperProps> = ({data}) => {
  return (
    <Swiper 
      className={styles.swiper}
      loop={true}
      autoplay={{delay: 6000, disableOnInteraction: false}}
                        spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper: any) => console.log(swiper)}>
                    
      {data.map(({title, img, number, word, change, color}) => {
        return (
          <SwiperSlide className={styles.slide} key={title}>
            <Image src={img} alt='Background' />
            <div className={styles.wrap}>
               <span className={styles.featured}>Featured</span>
            <h3>{title}</h3>
            <p className={classNames(styles.info, { [styles.green]: color === 'green' })}>
              <span className={styles.num}>{number}</span>
              <span className={styles.word}>{word}</span>
                <span className={classNames(styles.change)}>{change}</span>
            </p>
            </div>
          </SwiperSlide>
        )
      })}
                  
                </Swiper>
  )
}

export default HeroSwiper