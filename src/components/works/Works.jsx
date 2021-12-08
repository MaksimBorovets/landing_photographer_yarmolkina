import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/22.svg",
      title: "Стаж",
      desc:
        "Более 7 лет работы, 100+ фотосессий и много-много довольных клиентов.",
      img:
        "https://images.pexels.com/photos/3679525/pexels-photo-3679525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: "2",
      icon: "./assets/11.svg",
      title: "Преподаватель",
      desc:
        `Преподаю курсы:
         "Постановка света при фотосъемке."`,
      img:
        "https://images.pexels.com/photos/752525/pexels-photo-752525.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Профессионализм",
      desc:
        "Профессионал своего дела, постоянно совершенствую свои навыки и пользуюсь только современной техникой для фотосьемки",
      img:
        "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
