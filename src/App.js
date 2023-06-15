import Fetch from "./Fetch";
import "./styles.css";
import { Pokedex } from "./styled/pokemon";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState(null);

  function showSearch(e) {
    if (e.target.value === "") {
      setSearch(null);
    } else if (e.target.value !== "") {
      setSearch([e.target.value]);
    }
  }

  const numFetch = 45;
  return (
    <div className="App">
      <div className="buscador">
        <h2>Pokedex</h2>
        <input
          placeholder="Ingrese nombre o numero"
          onChange={showSearch}
        ></input>
      </div>

      <Pokedex>
        {search
          ? search.map((x) => <Fetch idPokemon={x} />)
          : [...Array(numFetch)].map((x, i) => <Fetch idPokemon={i + 1} />)}
      </Pokedex>
    </div>
  );
}
