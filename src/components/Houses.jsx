import { useState, useEffect } from "react";
import "./homepage.css";
import axios from "axios";
//import "./Homepage.css";
import { useNavigate } from "react-router-dom";
export default function Houses() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const getallCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://api.gameofthronesquotes.xyz/v1/houses"
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
    <div className="main_image  ">
      <div className="row">
        {categories.map((e) => (
          <>
            <div className="column">
              <div className="cards m-3">
                <h5 className="card-titles">{e.name}</h5>
                <p className="card-texts">{e.slug}</p>
                <button
                  className="btn btn-info ms-1 pt-1 mthouse "
                  onClick={() => navigate(`/housedetails/${e.slug}`)}
                >
                  Details
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
