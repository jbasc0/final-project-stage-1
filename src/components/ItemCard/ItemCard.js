import "./ItemCard.css";

const ItemCard = ({ data, onSelectCard }) => {
  return (
    <div className="card" id={data.id}>
      <h1 className="card__name">{data.name.toUpperCase()}</h1>
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
