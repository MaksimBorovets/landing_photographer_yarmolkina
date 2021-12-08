import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Алиса",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Нам с мужем все очень понравилось! Очень хорошие впечатления остались от общения и процесса съемки! Большое спасибо за фотографии, остались очень довольны! Очень много красивых нежных фотографий и интересных ракурсов.И погода позволила, дождем не облило)Желаем дальнейших творческих успехов вашей команде! :)",
    },
    {
      id: 2,
      name: "Ирина Филатова",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/2346735/pexels-photo-2346735.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Спасибо Вам огромное за Вашу работу! Маша такая классная. У меня вообще способностей нет, я прямо чувствовала, что я стою пустая совершенно. Но она все мне показала, настроила на нужную волну. Мне очень понравилось с Вами общаться, надеюсь, что в будущем еще доведется ))",
      featured: true,
    },
    {
      id: 3,
      name: "Марго",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3321584/pexels-photo-3321584.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Было все просто супер! Нам всем очень понравилась Мария!!! Спасибо вам!",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Отзывы</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              {/* <img className="right" src={d.icon} alt="" /> */}
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              {/* <h4>{d.title}</h4> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
