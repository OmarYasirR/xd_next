import React from 'react'
import Blogs from '../../Data/Blog.json'
import Landing from '../../components/Landing/Landing'
import Seprator from '../../components/seprator'
import style from '../../styles/blogpost.module.css'


export const getStaticPaths= () => {
  const paths = Blogs.map((blog, i) => {
    return {params: {i : i.toString()}}
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = (context) => {
  const i = context.params.i
  const data = Blogs[i]
  return{
    props : {blog: data}
  }
}

const blogpost = ({blog}) => {
  
  return (
    <div>
      <Landing  Component={"blog details"} img="../images/hero-img-1-min.jpg"/>
      <Seprator />
      <div className={`${style.detlCont} container`}>
        <div className={style.left}>
          <img src={`.${blog.img}`} alt="blog"className={style.blogImg} />
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.

When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.

A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.

The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.

When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
          </p>
          <div className={style.comments}>
            {Array.from(Array(3)).map((item, i) => (
              <div className={style.comment} key={i}>
                <img src={i%2 == 0? '../images/person_1.jpg': '../images/person_3.jpg' } alt="person" className={style.comntImg} />
                <div className={style.comntInfo}>
                  <h4>Chris Meyer</h4>
                  <div className={style.date}>JANUARY 9, 2018 AT 2:21PM
  </div>
                  <p className={style.comntP}>
                  When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
                  </p>
                  <div className={style.comntBtn}>
                    REPLY
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={style.formCont}>
            <h2>Leave a Comment</h2>
            <form className={style.form}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className={style.input} />
              <label htmlFor="email">Email</label>
              <input type="text" id="email" className={style.input} />
              <label htmlFor="mesg">Message</label>
              <textarea name="" id="mesg" cols="30" rows="10" className={style.textarea}></textarea>
            </form>
            <div className='btn'>Post A Comment</div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.cat}>
            <h2>Categories</h2>
            <div className={style.item}>
              <span>Creatives</span><span>(12)
              </span>
            </div>
            <div className={style.item}>
              <span>News</span><span>(22)
              </span>
            </div>
            <div className={style.item}>
              <span>Design</span><span>(37)
              </span>
            </div>
            <div className={style.item}>
              <span>HTML</span><span>(42)
              </span>
            </div>
            <div className={style.item}>
              <span>Web Development</span><span>(14)
              </span>
            </div>
          </div>
          <div className={style.authar}>
            <img src="../images/person_1.jpg" alt=""className={style.imgAuthr} />
            <h3>About The Author</h3>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <div className="btn">Read More</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default blogpost