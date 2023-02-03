import React from "react";
import "./Home.css";
import IMG from "../../assets/logo.svg";
import Title from "../../assets/title.png";
const Home = () => {
  return (
    <section id="home">
      <div className="container home__container">
        <div className="home__content">
          <div className="home__title">
            <img src={Title} />
          </div>
          <p>
            Prakarsh ‘23’s vision is to assist the rural areas, and villages and
            to encourage them in the advancement of their lives through
            technologies developed in Prakarsh by students.{" "}
          </p>
          <div className="glow mx-auto d-flex align-items-center justify-content-center">
            <span class="fast-flicker glow ">co</span>mi
            <span class="flicker glow ">n</span>gs
            <span class="flicker glow ">oo</span>n
          </div>
          <div className="home__btn"></div>
        </div>

        {/* <div className="home__logo">
          <div
            className="home__logo-img"
            data-aos="zoom-in-down"
            data-aos-mirror="true"
          >
            <img src={IMG} alt="" />
          </div>
        </div> */}
        
        {/* <div className ="vlogo">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oauaSJ_r2GA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div> */}
    </section>
  );
};

export default Home;
