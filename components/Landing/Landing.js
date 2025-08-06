import React from "react";

function Landing({ Component, img }) {
  return (
    <div className="landing">
      <div className="overlay"></div>
      {img? <img src={img} alt="" />: <img src="./images/hero-img-1-min.jpg" alt="" />}
      <div className="container">
        <h1>{Component}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit
          dolorem voluptatum. Odio quisquam eveniet repellendus ab maiores,
          aliquam dicta magnam praesentium
        </p>
        <div className="btn">Git In Touch</div>
      </div>
      <style jsx>{`
        .landing {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          height: 500px;
          width: 100%;
          color: white;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(0 0 0 / 26%);
          z-index: 1;
        }
        .landing img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .landing .container {
          position: relative;
          top: 30%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 4;
        }
        p {
          max-width: 400px;
          color: #eee;
        }
      `}</style>
    </div>
  );
}

export default Landing;
