import image1 from "../assets/325117.jpg";

import { NavLink, Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h2>You can find many info here</h2>
      <div className="main_image">
        <div className="card_main">
          <NavLink to="/houses" className="nav-links nav-link">
            <div className="card_home">
              <div className="card_home_img"></div>
              <div className="card_home_title"> </div>
            </div>
            Houses
          </NavLink>
          <NavLink to="/houses" className="nav-links nav-link">
            <div className="card_home_character">
              <div className="card_home_img_character"></div>
              <div className="card_home_title_character"> </div>
            </div>
            Characters
          </NavLink>
          <NavLink to="/houses" className="nav-links nav-link">
            <div className="card_home_qoutes">
              <div className="card_home_img_qoutes"></div>
              <div className="card_home_title_qoutes"> </div>
            </div>
            Best Qoutes
          </NavLink>
        </div>
      </div>
      {/* <img src={image1} alt="" className="main_image" /> */}
    </>
  );
}
