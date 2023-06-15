const pathUrl = (pokemon) => {
  var poke = pokemon.name.replace("-", ".");
  if (pokemon.name === "nidoran-m" || pokemon.name === "nidoran-f") {
    poke = pokemon.name.replace("-", "_");
  }

  const path = `https://projectpokemon.org/images/normal-sprite/${poke}.gif`;
  return path;
};

export default pathUrl;
