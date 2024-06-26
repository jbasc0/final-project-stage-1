export const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else return Promise.reject(`Error: ${res.status}`);
};

export const getPokemon = () => {
  return fetch(`${baseUrl}?limit=1025`).then(checkServerResponse);
};

export const getPokemonData = (item) => {
  return fetch(item).then(checkServerResponse);
};
