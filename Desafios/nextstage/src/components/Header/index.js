import favoritoIcon from "../../assets/favorite-icon.svg";
import apiIcon from "../../assets/api-icon.svg";
import "./header.css";

function Header() {
  return (
    <header>
      <a href="https://rawg.io/apidocs" target="_blank" rel="noreferrer">
        <img className="api" src={apiIcon} alt="API" />
      </a>
      <h1>
        NEXT<span>STAGE</span>
      </h1>
      <button>
        <img className="favoritos" src={favoritoIcon} alt="favoritos" />
      </button>
    </header>
  );
}

export default Header;
