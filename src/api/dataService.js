const dataService = async (id) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data.json();  
  
};

export default dataService;
