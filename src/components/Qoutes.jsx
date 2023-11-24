import { useState, useEffect } from "react";
import axios from "axios";
//import "./Homepage.css";
import { useNavigate } from "react-router-dom";
export default function Qoutes() {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(1);
  const [categories, setCategories] = useState([]);
  const getallCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://api.gameofthronesquotes.xyz/v1/random/5"
      );
      console.log("data game of throne qoutes", data);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallCategory();
    // getTotal();
  }, [update]);

  return (
    <div className="main_image ">
      <h1>Random Qoutes by Game of throne</h1>
      <div className="main_card">
        {categories.map((e) => (
          <>
            <div className="m-2" style={{ width: "18rem" }}>
              <div className="qoute">
                <div className="">
                  <h5 className="card-title">{e.slug}</h5>
                  <p className="card-text">{e.sentence}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <button
        onClick={() => {
          console.log("updated vate", update);
          setUpdate(update + 1);
        }}
      >
        More qoutes
      </button>
    </div>
  );
}
