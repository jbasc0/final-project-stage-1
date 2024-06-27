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
    <div className="modal" id="modal" onClick={onClose}>
      <div className="modal__item-content" id="modal-item-content">
        <button className="modal__item-close" type="button" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <img
          className="modal__image"
          alt={selectedCard.name}
          src={selectedCard.sprites.front_default}
        />
        <p className="modal__image-name">{selectedCard.name.toUpperCase()}</p>
        <p className="modal__image-id">ID# {selectedCard.id}/1025</p>
        <p className="modal__image-types">Type: {pokeTypes}</p>
      </div>
    </div>
  );
};

export default ItemModal;
