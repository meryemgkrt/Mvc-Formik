import { NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header>
      <h1 className="">Form</h1>
      <NavLink to="/">Gönderiler</NavLink>
      <NavLink to="/add-post">Gönderi Ekle</NavLink>
    </header>
  );
};

export default HeaderView;
