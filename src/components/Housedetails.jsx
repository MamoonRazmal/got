import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Housedetails() {
  const params = useParams();
  const [house, setHouse] = useState([]);

  useEffect(() => {
    if (params?.slug) {
      getHouse();
    }
  }, [params?.slug]);

  const getHouse = async () => {
    try {
      const { data } = await axios.get(
        `https://api.gameofthronesquotes.xyz/v1/house/${params.slug}`
      );
      console.log("data game of thrones", data[0].members);
      setHouse(data[0].members);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="housedetail_main_card ">
        <h1>Member of House</h1>
        {house.map((member) => (
          <p key={member.name}>{member.name}</p>

          // member.members.map((w)=>(
          //     <h2>{w.name}</h2>
          // ))
        ))}
      </div>
    </>
  );
}
