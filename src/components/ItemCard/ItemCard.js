import "./ItemCard.css";

const ItemCard = ({ data, onSelectCard }) => {
  return (
    <div className="card" id={data.id}>
      <p className="card__name">{data.name.toUpperCase()}</p>
      <img
        className="card__image"
        alt={data.name}
        src={data.sprites.front_default}
        onClick={() => onSelectCard(data)}
      />
    </div>
  );
};

export default ItemCard;
