"use client"
import React, { FC, useState } from 'react'
import styles from './Accordeon.module.scss'
import cn from 'classnames'

interface AccordeonProps {
    title: string;
    content: string;
}

const Accordeon: FC<AccordeonProps> = ({ title, content }) => {
const [isActive, setIsActive] = useState(false);
  return (
      <li className={styles.wrap}>
        <button className={styles.btn} onClick={() => setIsActive((prev) => !prev)}>{title}</button>
        <span className={cn({[styles.active]: isActive}, styles.span)}>{content}</span>
    </li>
  );
}

export default Accordeon