import Head from 'next/head'
import React from 'react'
import Landing from '../components/Landing/Landing'
import Seprator from '../components/seprator'
import Data from '../Data/Blog.json'
import style from '../styles/Blogs.module.css'
import Link from 'next/link'

function blog() {
  return (
    <>
    <Head>
      <title>Xedlab | Blogs</title>
    </Head>
    <div>
      <Landing Component={'Current News, Updates'} />
      <Seprator/>
      <div className={`${style.cont} container`}>
        {Data.map((item, i) => (
          <div className={style.box} key={i}>
            <div className={style.imgCont}>
              <img src={item.img} alt="blog" className={style.img}/>
            </div>
            <div className={style.text}>
              <div className={style.date}>{item.date}</div>
              <h3 className={style.h2}>{item.h3}</h3>
              <div className={style.p}>{item.P}</div>
              <Link href={`blogpost/${i}`} className={style.readMore}>Read More  &gt;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default blog