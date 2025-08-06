 import React, { useEffect } from 'react'
import styles from './Blogs.module.css'

function Blogs() {
  
  return (
    <div className='container'>
      <div className={`${styles.mainHeading} mainHeading`}>
        Blogs
      </div>
      <h1 className={`${styles.h1} mainh1`}>
      Recent Posts
      </h1>
      <div className={styles.Blogs}>
        <div className={styles.box}>
          <img src="./images/gal_1.jpg" alt="" className={styles.img}/>
          <div className={styles.text}>
            <div className={styles.date}>May 14, 2020</div>
            <h3>Far far away, behind the word mountains</h3>
            <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
            <span className={styles.link}>Read More &gt;</span>
          </div>
        </div>
        <div className={styles.box}>
          <img src="./images/gal_2.jpg" alt="" className={styles.img}/>
          <div className={styles.text}>
            <div className={styles.date}>May 14, 2020</div>
            <h3>Far far away, behind the word mountains</h3>
            <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
            <span className={styles.link}>Read More &gt;</span>
          </div>
        </div>
        <div className={styles.box}>
          <img src="./images/gal_3.jpg" alt="" className={styles.img}/>
          <div className={styles.text}>
            <div className={styles.date}>May 14, 2020</div>
            <h3>Far far away, behind the word mountains</h3>
            <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
            <span className={styles.link}>Read More &gt;</span>
          </div>
        </div>
        <div className={styles.box}>
          <img src="./images/gal_1.jpg" alt="" className={styles.img}/>
          <div className={styles.text}>
            <div className={styles.date}>May 14, 2020</div>
            <h3>Far far away, behind the word mountains</h3>
            <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
            <span className={styles.link}>Read More &gt;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs