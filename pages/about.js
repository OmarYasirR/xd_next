import Head from "next/head";
import React from "react";
import Landing from "../components/Landing/Landing.js";
import Service from '../components/services/service.js'
import styles from "../styles/About.module.css";
import Seprator from "../components/Seprator.js";

function about() {
  const team = [
    {
      name: "Maria Jones",
      role: "CEO, Co-Founder",
      discription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        img: './images/person_1.jpg'
    },
    {
      name: "James Campbel",
      role: "CEO, Co-Founder",
      discription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        img: './images/person_3.jpg'
    },
    {
      name: "Rob Smith",
      role: "CEO, Co-Founder",
      discription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        img: './images/person_1.jpg'
    },
    {
      name: "Kaye Hamilton",
      role: "CEO, Co-Founder",
      discription:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        img: './images/person_3.jpg'
    },
  ];
  return (
    <>
      <Head>
        <title>Xedlab | About</title>
      </Head>
      <div style={{ marginBottom: "50px" }}>
        <Landing Component={"About"} />
        <Seprator />
        <div className={`${styles.about} container`}>
          <div className={styles.text}>
            <div className="mainHeading">about us</div>
            <h1 className="mainh1">XedLab History</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
              <br />A small river named Duden flows by their place and supplies
              it with the necessary regelialia. It is a paradisematic country,
              in which roasted parts of sentences fly into your mouth.
            </p>
            <div className="btn" style={{ marginTop: "20px" }}>
              Read more
            </div>
          </div>
          <div className={styles.imgs}>
            <img src="./images/gal_1.jpg" className={styles.img} alt="" />
            <img
              src="./images/gal_2.jpg"
              className={styles.img}
              alt=""
              style={{ alignSelf: "center" }}
            />
          </div>
        </div>
        <div className={styles.team}>
          <div className="container">
            <div className="mainHeading">meet the team</div>
            <h1 className="mainh1">Our Team</h1>
            <div className={styles.teamCont}>
              {team.map((item, i) => (
                <div key={i} className={styles.box}>
                  <img className={styles.temimg} src={item.img} alt="" />
                  <div className="name">{item.name}</div>
                  <div className={styles.role}>{item.role}</div>
                  <div>{item.discription}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Service />
    </>
  );
}

export default about;
