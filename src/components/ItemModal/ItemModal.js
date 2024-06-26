import "./ItemModal.css";
import close from "../../images/close.svg";
import { useEffect, useState } from "react";

const ItemModal = ({ selectedCard, onClose }) => {
  const [pokeTypes, setPokeTypes] = useState([]);
  const types = selectedCard.types;
  const getTypes = (data) => {
    return " " + data.name[0].toUpperCase() + data.name.slice(1);
  };
  useEffect(() => {
    const fetchData = async () => {
      const results = await Promise.all(
        types.map((item) => getTypes(item.type))
      );

      setPokeTypes(new String(results));
    };
    fetchData();
  }, [types]);

  return (
    <div className={"modal"}>
      <div className="modal__item-content">
        <button className="modal__item-close" type="button" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <img
          className="modal__image"
          alt={selectedCard.name}
          src={selectedCard.sprites.front_default}
        />
        <h1 className="modal__image-name">{selectedCard.name.toUpperCase()}</h1>
        <div className="modal__image-id">ID# {selectedCard.id}/1025</div>
        <div className="modal__image-types">Type: {pokeTypes}</div>
      </div>
    </div>
  );
};

export default ItemModal;
