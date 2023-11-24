import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Charsdetails() {
  const params = useParams();
  const [house, setHouse] = useState([]);

  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [params?.slug]);

  const getProduct = async () => {
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

  return (
    <>
      {house.map((member) => (
        <>
          <h1 key={member.name}>{member.name}</h1>
          <h3>{member.house ? <h3>{member.house.name}</h3> : "No House"}</h3>
          <p>{member.quotes}</p>
        </>
        // member.members.map((w)=>(
        //     <h2>{w.name}</h2>
        // ))
      ))}
    </>
  );
}
