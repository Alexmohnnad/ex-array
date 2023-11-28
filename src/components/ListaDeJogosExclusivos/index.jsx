import "./style.css";
import Lupa from "../../assets/lupa.png";
import ItemJogos from "../ItemJogos";
import { useState } from "react";
import { filtrarJogo, buscarJogo, retornarJogos } from "../../servico";

const ListaDeJogosExclusivos = () => {
  const [listaJogos, setListaJogos] = useState(retornarJogos());
  const [textoBusca, setTextoBusca] = useState("");

  const handleFiltrarJogoPlataforma = (plataforma) => {
    setListaJogos(filtrarJogo(plataforma));
    setTextoBusca("");
  };

  const handleLimparFiltro = () => {
    setListaJogos(retornarJogos());
    setTextoBusca("");
  };

  const handleBuscarJogo = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListaJogos(buscarJogo(textoDigitado));
    
  };

  return (
    <div className="container-principal">
      <h2>Lista de Jogos Exclusivos</h2>
      <div className="container-btns">
        <button onClick={() => handleFiltrarJogoPlataforma("xbox")}>
          XBOX
        </button>
        <button onClick={() => handleFiltrarJogoPlataforma("playstation")}>
          PlayStation
        </button>
        <button onClick={() => handleFiltrarJogoPlataforma("nintendo")}>
          Nintendo
        </button>
        <button onClick={() => handleLimparFiltro()}>Limpar Filtro</button>
      </div>
      <div className="container-input">
        <img src={Lupa} alt="ícone" />
        <input
          type="text"
          value={textoBusca}
          onChange={(event) => handleBuscarJogo(event.target.value)}
          placeholder="Pesquise um jogo ou plataforma"
        />
      </div>
      <div className="container-jogos">
          {listaJogos && listaJogos.length > 0 
          ? (listaJogos.map((jogo) => (
            <ItemJogos
              key={jogo.id}
              nome={jogo.nome}
              plataforma={jogo.plataforma}
            />
          ))) 
          : ( <p className="paragrafo">Não há nenhum produto na lista.</p>)
          }
      </div>
    </div>
  );
};
export default ListaDeJogosExclusivos;
