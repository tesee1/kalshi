import React from 'react'
import styles from './Access.module.scss'

const Access = () => {
  return (
      <form className={styles.access}>
          <input type="text" placeholder='Your email' />
          <button type='submit'>Get access</button>
    </form>
  )
}

export default Access