import xboxLogo from "../../assets/xbox.png";
import playstationLogo from "../../assets/playstation.jpg";
import nintendoLogo from "../../assets/nintendo.jpg";
import "./style.css";

const ItemJogos = ({ nome, plataforma }) => {
  return (
    <div className="card">
      <div>
        <img
          src={
              plataforma === "xbox"
              ? xboxLogo
              : plataforma === "playstation"
              ? playstationLogo
              : nintendoLogo
          }
          alt="logo"
        />
      </div>
      <div>
        <p>{nome}</p>
      </div>
    </div>
  );
};
export default ItemJogos;
