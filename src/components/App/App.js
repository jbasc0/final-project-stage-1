import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import ItemModal from "../ItemModal/ItemModal";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [pokemon, setPokemon] = useState([]);

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getPokemon()
      .then((res) => {
        setPokemon(res.results);
      })

      .catch((err) => console.log(err));
  });

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/gen1"
          element={
            <Main
              gen={"1"}
              pokemon={pokemon}
              onSelectCard={handleSelectedCard}
            />
          }
        />

        <Route
          path="/gen2"
          element={
            <Main
              gen={"2"}
              pokemon={pokemon}
              onSelectCard={handleSelectedCard}
            />
          }
        />

        <Route
          path="/gen3"
          element={
            <Main
              gen={"3"}
              pokemon={pokemon}
              onSelectCard={handleSelectedCard}
            />
          }
        />

        <Route
          path="/gen4"
          element={
            <Main
              gen={"4"}
              pokemon={pokemon}
              onSelectCard={handleSelectedCard}
            />
          }
        />

        <Route
          path="/gen5"
          element={
            <Main
              gen={"5"}
              pokemon={pokemon}
              onSelectCard={handleSelectedCard}
            />
          }
        />

        <Route
          path="/gen6"
          element={
            <Main
              gen={"6"}
              pokemon={pokemon}
              onSelectCard={handleSelectedCard}
            />
          }
        />

        <Route
          path="/gen7"
          element={
            <Main
              gen={"7"}
              pokemon={pokemon}
              onSelectCard={handleSelectedCard}
            />
          }
        />

        <Route
          path="/gen8"
          element={
            <Main
              gen={"8"}
              pokemon={pokemon}
              onSelectCard={handleSelectedCard}
            />
          }
        />

        <Route
          path="/gen9"
          element={
            <Main
              gen={"9"}
              pokemon={pokemon}
              onSelectCard={handleSelectedCard}
            />
          }
        />
        <Route path="/about" element={<About author={true} />} />
        <Route exact path="/" element={<About />} />
      </Routes>
      <Footer />
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
