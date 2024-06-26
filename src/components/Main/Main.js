import { React, useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";
import Preloader from "../Preloader/Preloader";
import { getPokemonData } from "../../utils/api";

function Main({ gen, pokemon, onSelectCard }) {
  const pokemonCards = pokemon;
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  let filteredCards = [];

  if (gen === "1") {
    filteredCards = pokemonCards.slice(0, 151);
  } else if (gen === "2") {
    filteredCards = pokemonCards.slice(151, 251);
  } else if (gen === "3") {
    filteredCards = pokemonCards.slice(251, 386);
  } else if (gen === "4") {
    filteredCards = pokemonCards.slice(386, 493);
  } else if (gen === "5") {
    filteredCards = pokemonCards.slice(493, 649);
  } else if (gen === "6") {
    filteredCards = pokemonCards.slice(649, 721);
  } else if (gen === "7") {
    filteredCards = pokemonCards.slice(721, 809);
  } else if (gen === "8") {
    filteredCards = pokemonCards.slice(809, 905);
  } else if (gen === "9") {
    filteredCards = pokemonCards.slice(905, 1025);
  }
  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all(
        filteredCards.map((item) =>
          getPokemonData(item.url).catch((err) => console.log(err))
        )
      );

      setPokeData(results);
      setLoading(false);
    };
    fetchData();
  }, [filteredCards]);

  return (
    <main className="main">
      <section className="main__card-section" id="card-section">
        <div>
          {loading ? (
            <Preloader />
          ) : (
            <div className="main__card-items">
              {pokeData.map((item) => (
                <ItemCard
                  key={item.name}
                  data={item}
                  onSelectCard={onSelectCard}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
export default Main;
