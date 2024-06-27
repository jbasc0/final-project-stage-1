import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__content">
        Developed by
        <Link to="/about">
          <button type="text" className="footer__button">
            Jovito Basco
          </button>
        </Link>
      </h2>
      <p className="footer__content">2024</p>
    </footer>
  );
};
export default Footer;
