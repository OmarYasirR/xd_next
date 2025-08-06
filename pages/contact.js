import Head from 'next/head'
import React from 'react'
import Landing from '../components/Landing/Landing'
import styles from '../styles/contact.module.css'
import Seprator from '../components/seprator'

function contact() {
  return (
    <>
    <Head>
      <title>Xedlab | Contact us</title>
    </Head>
    <div>
      <Landing Component={'Contact XedLab'} />
      <Seprator/>
      <div className={styles.contact}>
        <div className="container">
          <div className="mainHeading">contact</div>
          <h1 className="mainh1">Get in Touch</h1>
          <div className={styles.cont}>
            <div className={styles.text}>
              <div className={styles.box}>
                <div className={styles.icon}></div>
                <span>
                  <h5>Location : </h5>
                  <div className={styles.addres}>43 Raymouth Rd. Baltemoer, London 3910</div>
                </span>
              </div>
              <div className={styles.box}>
                <div className={styles.icon}></div>
                <span>
                  <h5>Open Hours : </h5>
                  <div className={styles.addres}>Sunday-Friday:<br />11:00 AM - 2300 PM</div>
                </span>
              </div>
              <div className={styles.box}>
                <div className={styles.icon}></div>
                <span>
                  <h5>Email :</h5>
                  <div className={styles.addres}>info@Colorlib</div>
                </span>
              </div>
              <div className={styles.box}>
                <div className={styles.icon}></div>
                <span>
                  <h5>Call :</h5>
                  <div className={styles.addres}>+1 1234 55488 55</div>
                </span>
              </div>
            </div>
            <form className={styles.form}>
              <div>
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Email' />
              </div>
              <input type="text" placeholder='Subject' />
              <textarea placeholder='Message'></textarea>
              <div className="btn">Send a Message</div>
            </form> 
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      form div{
        display: flex;
        gap: 10px;
      }
      input,
      textarea{
        width: 100%;
        height: 50px;
        outline: none;
        border-radius: 3px;
        border: 1px solid var(--trans);
        padding: 15px;
      }
      input:focus,
      textarea:focus
      {
        border: 1px solid var(--main);
      }
      textarea{
        height: 200px
      }
      h5{
        margin-bottom: 10px
      }
    `}</style>
    </>
  )
}

export default contact