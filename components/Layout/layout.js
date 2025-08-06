import React from 'react'
import Nav from '../navbar/navbar'
import Footer from '../footer/footer'

function layout({children}) {
  return (
    <div className='content'>
      <Nav />
        {children}
      <Footer />
    </div>
  )
}

export default layout