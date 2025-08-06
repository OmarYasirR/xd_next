import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Landing from '../components/Landing/Landing'
import Service from '../components/services/service'
import Testimonial from '../components/Testimonial/Testimonial'
import Seprator from '../components/seprator'

function Services() {
  const [num, setNum] = useState(4);
  function* generator() {
    yield 5
    yield 10
    yield 15
    yield 20
  }
  const gen = () => {
    if(generator().next().done){
      setNum(generator().next())
    }
    for (let i = 0; i < num; i++) {
      Aa.push(arr.i)
      
    }
  }
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  let Aa = []
  useEffect(() => {
    console.log(Aa)
    console.log('Aa')
  },[num])
  return (
    <>
    <Head>
      <title>Xedlab | Services</title>
    </Head>
    <div onClick={() => {gen()}} className='dsdf'>
      <Landing Component={'Services'} />
      <Seprator />
      <Service />
      <Testimonial />
    </div>
    </>
  )
}

export default Services