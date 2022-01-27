import { useCallback, useEffect, useState } from "react";
import api from "../api";
import "../../styles/view.css";
import { Link } from "react-router-dom";
import StatsPoke from "../StatsPoke";
import BackButton from "../BackButton";
import ArrowRight from "../ArrowRight";
import ArrowLeft from "../ArrowLeft";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Poke = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = new URLSearchParams(window.location.search);
      const namePoke = url.get("pokemon");
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/${namePoke}`
      );
      setPokemon(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const nextPoke = useCallback(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const url = new URLSearchParams(window.location.search);
      const namePoke = url.get("pokemon");
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/${namePoke}`
      );
      setPokemon(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [setPokemon]);

  return (
    
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Link
            to={"/view?pokemon=" + (pokemon.id + 1)}
            onClick={() => {
              if (pokemon.id < 898) setTimeout(nextPoke, 1);
            }}
          >
            <ArrowRight />
          </Link>
          <div className="container">
            <div className="numPoke">
              <span className="hashtag">#</span> {pokemon.id}
            </div>
            <img
              src={pokemon.sprites.front_default}
              alt="pokemon"
              className="img-poke"
            />
            <div className="name-poke">{capitalize(pokemon.name)}</div>
            <div className="stats-container">
              <StatsPoke pokemon={pokemon} />
              <Link to="/hook">
                <BackButton />
              </Link>
            </div>
          </div>
          <Link
            to={"/view?pokemon=" + (pokemon.id - 1)}
            onClick={() => {
              if (pokemon.id > 1) setTimeout(nextPoke, 1);
            }}
          >
            <ArrowLeft />
          </Link>
        </div>
      )}
    </div>

  );
};

export default Poke;
