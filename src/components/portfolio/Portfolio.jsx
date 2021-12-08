import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  weddingPortfolio,
  individual,
  parties,

} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "weddings",
      title: "Свадьбы",
    },
    {
      id: "individual",
      title: "Индивидуальные",
    },
    {
      id: "parties",
      title: "Праздники",
    },

  ];

  useEffect(() => {
    switch (selected) {
      case "weddings":
        setData(weddingPortfolio);
        break;
      case "individual":
        setData(individual);
        break;
      case "parties":
        setData(parties);
        break;

      default:
        setData(weddingPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
