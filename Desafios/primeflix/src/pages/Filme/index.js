import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./filme-info.css";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "e41d651f9fc642229cd44ae081e4b305",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }

    loadFilme();

    return () => {
      console.log("componente desmontado");
    };
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasfilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id,
    );

    if (hasfilme) {
      toast.warn("Esse filme já está na sua lista");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  function getCorNota(nota) {
    if (nota) {
      if (nota >= 8.5) {
        return "#00A8E1";
      } else if (nota >= 7) {
        return "#2E8B57";
      } else if (nota >= 5.5) {
        return "#6FCF97";
      } else if (nota >= 4) {
        return "#F2C94C";
      } else {
        return "#EB5757";
      }
    }
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h2>Carregando detalhes do filme...</h2>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <hr />
      <div className="area-info">
        <strong>
          Avaliação:{" "}
          <span
            className="avaliacao"
            style={{ backgroundColor: getCorNota(filme.vote_average) }}
          >
            {filme.vote_average.toFixed(1)}/10
          </span>
        </strong>
        <div>
          <p>Gêneros:</p>
          {filme.genres.map((genero) => {
            return (
              <span className="genero" key={genero.id}>
                {genero.name}
              </span>
            );
          })}
        </div>
      </div>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
