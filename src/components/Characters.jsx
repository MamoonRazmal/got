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
      console.log("data game of thrones", data);
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
    <div className="main_image main_direction ">
      <div className="row char_font mt-3">
        {categories.map((e) => (
          <>
            <div className="column char_col">
              <div className="cards  m-2">
                <h5 className="card-titles char_title">{e.name}</h5>
                <p className="card-texts ">{e.slug}</p>
                {e.house ? <p>{e.house.name}</p> : "No House"}
                {/* <p className="card-texts ">{e?.house?.name}</p> */}
                <button
                  className="btn btn-info p-2 mt-3   mtext"
                  onClick={() => navigate(`/character/${e.slug}`)}
                >
                  More Details
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
