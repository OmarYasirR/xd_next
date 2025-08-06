import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Service from '../components/services/service'
import Testimonial from '../components/Testimonial/Testimonial'
import Blogs from '../components/Blogs/Blogs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

export default function Home() {
  
  return (
    <>
    <Head>
      <title>Xedlab | Home</title>
    </Head>
    <div
      className='container'
    >
      <div className={styles.landing}>
        <div className={styles.text}>
          <h1>Xedlab  is leading medical institution for Covid-19</h1>
          <p className='pa'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita voluptatum quo soluta vero perspiciatis cumque sed doloremque nihil aliquid at?.</p>
          <div className="btn">Get in touch</div>
        </div>
        <img className={styles.img} src="./images/hero-img-min.png" alt="" />
      </div>
      <div className={styles.social}>
        <div className={styles.icosocial}>
          <BsInstagram />
          <span>INSTGRAM</span>
        </div>
        <div className={styles.icosocial}>
          <BsTwitter />
          <span>TEWETTER</span>
        </div>
        <div className={styles.icosocial}>
          <BsFacebook />
          <span>FACEBOOK</span>
        </div>
      </div>
    </div>
    <Service />
    <div className={styles.container}>
      <div className={`${styles.cont} container`}>
        <div className={styles.box}>
          <img
            src="./images/gal_1.jpg"
            alt=""
            className={styles.img}
            style={{borderRadius: '15px'}}
          />
          <div className={styles.Text}>
            <h3></h3>
            <div className="pa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error numquam culpa placeat pariatur fuga illo veniam doloremque ea optio beatae velit</div>
            <ul  style={{listStyle: 'inside'}}>
              <li>Deserunt harum incidunt</li>
              <li>Ex nesciunt est temporibus</li>
              <li>Vel rem eveniet facere et velit</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <div className="btn">Get Started</div>
          </div>
        </div>
        <div className={styles.box}>
          <img
            src="./images/gal_2.jpg"
            alt=""
            className={styles.img}
            style={{borderRadius: '15px'}}
          />
          <div className={styles.Text}>
            <h3></h3>
            <div className="pa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error numquam culpa placeat pariatur fuga illo veniam doloremque ea optio beatae velit</div>
            <ul  style={{listStyle: 'inside'}}>
              <li>Deserunt harum incidunt</li>
              <li>Ex nesciunt est temporibus</li>
              <li>Vel rem eveniet facere et velit</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <div className="btn">Get Started</div>
          </div>
        </div>
        <div className={styles.box}>
          <img
            src="./images/gal_3.jpg"
            alt=""
            className={styles.img}
            style={{borderRadius: '15px'}}
          />
          <div className={styles.Text}>
            <h3></h3>
            <div className="pa">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error numquam culpa placeat pariatur fuga illo veniam doloremque ea optio beatae velit</div>
            <ul  style={{listStyle: 'inside'}}>
              <li>Deserunt harum incidunt</li>
              <li>Ex nesciunt est temporibus</li>
              <li>Vel rem eveniet facere et velit</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
            <div className="btn">Get Started</div>
          </div>
        </div>
      </div>
      <div className={`${styles.stats} container`}>
        <div className={styles.statbox}>
          <div className={styles.number} data-goal='4350'>
              4350
          </div>
          <span style={{fontSize: '14px'}}>TOTAL INFECTED</span>
        </div>
        <div className={styles.statbox}>
          <div className={styles.number} data-goal='3350'>
              3350
          </div>
          <span style={{fontSize: '14px'}}>TOTAL INFECTED</span>
        </div>
        <div className={styles.statbox}>
          <div className={styles.number} data-goal='2350'>
              2350
          </div>
          <span style={{fontSize: '14px'}}>MEDICAL DOCTORS</span>
        </div>
        <div className={styles.statbox}>
          <div className={styles.number} data-goal='1350'>
              1350
          </div>
          <span style={{fontSize: '14px'}}>FACILITIES</span>
        </div>
      </div>
    </div>
    <Testimonial />
    <div className='help container'>
      <img src="./images/gal_2.jpg" alt="help us fight covid 19" />
      <h1>Help Us Fight Covid 19</h1>
      <div className="btn">Git in Touch</div>
    </div>
    <Blogs />
    </>
  )
}
