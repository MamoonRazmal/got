import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Charsdetails() {
  const params = useParams();
  const [house, setHouse] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    if (params?.slug) {
      getChar();
    }
  }, [params?.slug]);

  const getChar = async () => {
    try {
      const { data } = await axios.get(
        `https://api.gameofthronesquotes.xyz/v1/character/${params.slug}`
      );
      console.log("data game of thrones of character", data);
      setHouse(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex < house[0]?.quotes.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="char_main">
        <div className="main_card char_main">
          {house.map((member) => (
            <div className="m-5" style={{ width: "18rem" }} key={member.name}>
              <h1>{member.name}</h1>
              {member.house ? <h3>{member.house.name}</h3> : "No House"}
              <div className="main_card_chardetails">
                <div className="">
                  <p className="card-text">
                    {member.quotes[currentQuoteIndex]}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <button className="qoute_btn" onClick={handleNextQuote}>
            More Quotes
          </button>
        </div>
      </div>
    </>
  );
}
