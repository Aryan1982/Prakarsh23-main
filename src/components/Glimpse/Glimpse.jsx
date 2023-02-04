import React from "react";
import GlimpseCard from "./GlimpseCard";
import "./Glimpse.css";
const Events = [
  {
    EventimageSource: "assests/Glimpse/1 (1).jpg",
    key: 1,
    Animation: "fade-right",
  },
  // {
  //   EventimageSource: "assests/Glimpse/DSC_2546.jpg",
  //   key: 2,
  //   Animation: "flip-up",
  // },
  {
    EventimageSource: "assests/Glimpse/1 (2).jpg",
    key: 3,
    Animation: "flip-down",
  },
  {
    EventimageSource: "assests/Glimpse/1 (3).jpg",
    key: 4,
    Animation: "fade-left",
  },
  {
    EventimageSource: "assests/Glimpse/1 (4).jpg",
    key: 5,
    Animation: "fade-right",
  },
  {
    EventimageSource: "assests/Glimpse/1 (5).jpg",
    key: 6,
    Animation: "flip-up",
  },
  {
    EventimageSource: "assests/Glimpse/1 (6).jpg",
    key: 7,
    Animation: "flip-down",
  },
  {
    EventimageSource: "assests/Glimpse/1 (7).jpg",
    key: 8,
    Animation: "fade-left",
  },
  //   {
  //     EventimageSource: "assests/Glimpse/DSC_3773.jpg",
  //     key: 9,
  //     Animation: "fade-left",
  //   },
  // {
  //   EventimageSource: "assests/Glimpse/DSC_3773.jpg",
  //   key: 10,
  //   Animation: "fade-right",
  // },
  // {
  //   EventimageSource: "assests/Glimpse/DSC_3773.jpg",
  //   key: 11,
  //   Animation: "fade-left",
  // },
];
const Glimpse = () => {
  return (
    <section id="Glimpse">
      <div className="gdiv">
        <div className="heading">
          <h2
            className="abouthead"
            // data-aos="zoom-out"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-out"
            // data-aos-delay="500"
          >
            Glimpse
          </h2>
          <h2 className="front-text"> Previous Events </h2>
        </div>
        <div className="imagecontainer">
          <div className="h222">
            {Events.map((members) => (
              <GlimpseCard
                item={members}
                src={members.EventimageSource}
                key={members.key}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
