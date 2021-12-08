import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Главная</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Обо мне</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Отзывы</a>
        </li>
        {/* <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Контакты</a>
        </li> */}
      </ul>
    </div>
  );
}
