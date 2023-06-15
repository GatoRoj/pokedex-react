import React, { useState, useEffect } from "react";
import { Box, Percent, Bar } from "./styled/form";
import dataService from "./api/dataService";

const Form = ({ expand, id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await dataService(id);
      setData([
        initialData.stats[0].base_stat,
        initialData.stats[1].base_stat,
        initialData.stats[2].base_stat,
        initialData.stats[3].base_stat,
        initialData.stats[4].base_stat,
        initialData.stats[5].base_stat
      ]);
    };
    fetchData();
  }, [id]);

  return (
    <Box className={expand ? "" : "none"}>
      <p className="stat">Hp</p>
      <Percent>
        <Bar style={{ width: `${data[0]}%`, backgroundColor: "#64ed7b" }}></Bar>
      </Percent>
      <p className="stat">Attack</p>
      <Percent>
        <Bar style={{ width: `${data[1]}%`, backgroundColor: "#f77173" }}></Bar>
      </Percent>
      <p className="stat">Defense</p>
      <Percent>
        <Bar style={{ width: `${data[2]}%`, backgroundColor: "#ee9d5f" }}></Bar>
      </Percent>
      <p className="stat">Sp. Atk</p>
      <Percent>
        <Bar style={{ width: `${data[3]}%`, backgroundColor: "#ff5fff" }}></Bar>
      </Percent>
      <p className="stat">Sp. Def</p>
      <Percent>
        <Bar style={{ width: `${data[4]}%`, backgroundColor: "#eae65a" }}></Bar>
      </Percent>
      <p className="stat">Speed</p>
      <Percent>
        <Bar style={{ width: `${data[5]}%`, backgroundColor: "#5ed1e9" }}></Bar>
      </Percent>
    </Box>
  );
};

export default Form;
