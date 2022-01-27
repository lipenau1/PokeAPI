import React, { Component } from "react";
import api from "./api";
import "../styles/view.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import StatsPoke from "./StatsPoke";

var url = new URLSearchParams(window.location.search);
var namePoke = url.get("pokemon");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function clickPoke(id) {
  window.location.href = "/view?pokemon=" + id;
}

class Poke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }

  async componentDidMount() {
    const response = await api.get(
      `https://pokeapi.co/api/v2/pokemon/${namePoke}`
    );
    this.setState({ pokemon: response.data });
  }

  render() {
    const { pokemon } = this.state;

    return pokemon ? (
      <div>
        <i
          className="arrow right"
          onClick={() => {
            if (pokemon.id < 898) {
              clickPoke(pokemon.id + 1);
            }
          }}
        ></i>
        <div className="container">
          <div className="numPoke">
            <span className="hashtag">#</span> {pokemon.id}
          </div>
          <ImgPoke pokemon={pokemon} />
          <div className="name-poke">{capitalize(pokemon.name)}</div>
          <div className="stats-container">
            <StatsPoke pokemon={pokemon} />
            <Link to="/">
              <button className="back">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </Link>
          </div>
        </div>
        <i
          className="arrow left"
          onClick={() => {
            if (pokemon.id > 1) {
              clickPoke(pokemon.id - 1);
            }
          }}
        ></i>
      </div>
    ) : (
      <h1 className="load">Loading...</h1>
    );
  }
}

export default Poke;
