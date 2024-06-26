import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        Developed by
        <Link to="/about">
          <button type="text" className="footer__button">
            Jovito Basco
          </button>
        </Link>
      </div>
      <div>2024</div>
    </footer>
  );
};
export default Footer;
