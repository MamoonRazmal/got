import { useState, useEffect } from "react";
import axios from "axios";
//import "./Homepage.css";
import { useNavigate } from "react-router-dom";
export default function Characters() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const getallCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://api.gameofthronesquotes.xyz/v1/characters"
      );
      console.log("data game of throne", data);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallCategory();
    // getTotal();
  }, []);

  return (
    <div className="main_image main_direction">
      <h1>Characters</h1>
      <div className="row char_font">
        {categories.map((e) => (
          <>
            <div className="column char_col">
              <div className="cards">
                <h5 className="card-titles">{e.name}</h5>
                <p className="card-texts">{e.slug}</p>
                <button
                  className="btn btn-info ms-1"
                  onClick={() => navigate(`/character/${e.slug}`)}
                >
                  get
                </button>
              </div>
              {/* </div> */}
            </div>
            {/* </div> */}
          </>
        ))}
      </div>
    </div>
  );
}
