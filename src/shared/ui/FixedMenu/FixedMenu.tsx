import React from 'react'
import styles from './FixedMenu.module.scss'
import { secondMenu } from '../../../../data/menu'
import Link from 'next/link'
import classNames from 'classnames'

const FixedMenu = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                {secondMenu.map(({title, img: Svg, path}, i) => {
                    return (
                        <li className={classNames({ [styles.active]: i === 0 })} key={title}>
                            <Link href={path}>
                            <Svg />
                                <span>{title}</span>
                            </Link>
                        </li>
                    )
                })}
          </ul>
    </nav>
  )
}

export default FixedMenu