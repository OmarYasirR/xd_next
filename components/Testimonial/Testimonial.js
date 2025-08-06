import React, { useEffect, useState } from "react";

function Testimonial() {
  const testi = [
    {
      name: "James Woodland",
      img: "./images/person_1.jpg",
      jop: "Designer at Facebook",
    },
    { name: "john Doe", img: "./images/person_3.jpg", jop: "CEO, Founder" },
    {
      name: "john Doe",
      img: "./images/person_1.jpg",
      jop: "Product Designer at Twitter",
    },
  ];
  const [active, setActive] = useState(0);
  const classHandler = (i) => {
    if (i === active) {
      return "active";
    }
    if (i === active - 1 || (i === testi.length - 1 && active === 0)) {
      return "prev";
    }
    if (i === active + 1 || (i === 0 && active === testi.length - 1)) {
      return "next";
    }
  };
  let handler;
  const navigation = (i) => {
    clearInterval(handler);
    setActive(i);
  };
  useEffect(() => {
    handler = setTimeout(() => {
      active == testi.length - 1
        ? setActive(0)
        : setActive((prev) => {
            return prev + 1;
          });
    }, 3000);
  }, [active]);
  return (
    <div className="testimonial container">
      <h4 className='mainHeading'>TESTIMONIALS</h4>
      <h1 className='mainh1'>What People Says..</h1>
      <div className="cont">
        {testi.map((item, i) => (
          <div className={`box ${classHandler(i)}`} key={i}>
            <img src={item.img} />
            <h3>{item.name}</h3>
            <div className="jop">{item.jop}</div>
            <p>
              “When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove,
              the headline of Alphabet Village and the subline of her own road,
              ”
            </p>
          </div>
        ))}
        <div className="bullits">
          {testi.map((_, i) => (
            <span
              key={i}
              onClick={() => {
                navigation(i);
              }}
              className={i === active ? "active" : ""}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;