import { useEffect, useState } from "react";
import dataService from "./api/dataService";
import pathUrl from "./api/pathUrl";
import { Pokemon, ImgContainer, Img, Info } from "./styled/pokemon";
import Form from "./Form";
const Fetch = ({ idPokemon }) => {
  const [url, setUrl] = useState([]);
  const [expand, setExpand] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setExpand((current) => !current);
  };

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await dataService(idPokemon);
      const url = pathUrl(initialData);

      setUrl(url);
    };
    fetchData();
  }, [idPokemon]);

  return (
    <Pokemon className={expand ? "expand" : ""} onClick={handleClick}>
      <ImgContainer>
        <Img src={url}></Img>
      </ImgContainer>
      <Info>
        <Form expand={expand} id={idPokemon} />
      </Info>
    </Pokemon>
  );
};

export default Fetch;
