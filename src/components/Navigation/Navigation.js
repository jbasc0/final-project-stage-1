import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <button type="text" className="navigation__button">
          Home
        </button>
      </Link>
      <Link to="/gen1">
        <button type="text" className="navigation__button">
          Gen 1
        </button>
      </Link>
      <Link to="/gen2">
        <button type="text" className="navigation__button">
          Gen 2
        </button>
      </Link>
      <Link to="/gen3">
        <button type="text" className="navigation__button">
          Gen 3
        </button>
      </Link>
      <Link to="/gen4">
        <button type="text" className="navigation__button">
          Gen 4
        </button>
      </Link>
      <Link to="/gen5">
        <button type="text" className="navigation__button">
          Gen 5
        </button>
      </Link>
      <Link to="/gen6">
        <button type="text" className="navigation__button">
          Gen 6
        </button>
      </Link>
      <Link to="/gen7">
        <button type="text" className="navigation__button">
          Gen 7
        </button>
      </Link>
      <Link to="/gen8">
        <button type="text" className="navigation__button">
          Gen 8
        </button>
      </Link>
      <Link to="/gen9">
        <button type="text" className="navigation__button">
          Gen 9
        </button>
      </Link>
    </nav>
  );
};
export default Navigation;
