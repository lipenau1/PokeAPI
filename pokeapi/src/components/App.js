import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import api from "../components/api";
import "../styles/index.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

var typeArr = [
  "grass",
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function searchBar() {
  let bar = document.getElementById("search");
  if (bar.style.display === "block") {
    bar.style.display = "none";
  } else {
    bar.style.display = "block";
  }
}

function clickPoke(id) {
  window.location.href = "/view?pokemon=" + id;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      subList: [],
    };
  }

  async componentDidMount() {
    var arr = [];
    for (var i = 0; i < 100; i++) {
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/${i + 1}`
      );

      arr.push(response.data);
    }

    this.setState({ pokemons: arr });
    this.setState({ subList: arr }, this.getAll);
  }

  async getAll() {
    var arr = [];
    for (var i = 0; i < 898; i++) {
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/${i + 1}`
      );

      arr.push(response.data);
    }
    this.setState({ subList: arr });
    this.setState({ pokemons: arr });
  }

  render() {
    const { pokemons } = this.state;
    const { subList } = this.state;

    let pokeList = (type) => {
      var arr = [];
      subList.filter((pokemon) => {
        if (pokemon.types[0].type.name.includes(type)) {
          arr.push(pokemon);
        }
      });
      this.setState({ pokemons: arr });
      document.documentElement.scrollTop = 0;
    };

    let pokeListAll = () => {
      this.setState({ pokemons: subList });

      document.documentElement.scrollTop = 0;
    };

    let pokeSearch = (text) => {
      var arr = [];
      var search = text.toLowerCase();
      subList.filter((pokemon) => {
        if (pokemon.name.includes(search) || pokemon.id === text) {
          arr.push(pokemon);
        }
      });
      this.setState({ pokemons: arr });
    };

    return (
      <div>
        <div className="sidebar">
          <div>
            <div>
              <span className="title">Pokémon</span>
              <button className="searchIcon" onClick={searchBar}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <input
              type="text"
              className="search"
              id="search"
              placeholder="Search.."
              onChange={(e) => {
                pokeSearch(e.target.value);
              }}
            />
          </div>
          <div className="filterTypes">
            <div>Types</div>
          </div>
          <div className={"all typeForFilter"} key="all" onClick={pokeListAll}>
            <div>All Types</div>
          </div>
          <div>
            {typeArr.map((type) => (
              <div
                className={type + " typeForFilter"}
                key={type}
                onClick={function () {
                  pokeList(type);
                }}
              >
                <div>{capitalize(type)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="tableContainer">
          <table className="tablePokemon" cellSpacing="0">
            <thead>
              <tr>
                <th className="numberPokemon">N°</th>
                <th>Pokémon</th>
                <th>Name</th>
                <th>Type</th>
                <th>HP</th>
                <th>Atk</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {pokemons.map((pokemon) => (
                <tr
                  key={pokemon.id}
                  className={pokemon.types[0].type.name}
                  onClick={function () {
                    clickPoke(pokemon.name);
                  }}
                >
                  <td className="numberPokemon">
                    <span className="hashtag">#</span> {pokemon.id}
                  </td>
                  <td>
                    <img
                      src={pokemon.sprites.front_default}
                      alt="pokemon"
                      width="150px"
                      className="pic"
                    />
                  </td>
                  <td>{capitalize(pokemon.name)}</td>
                  <td>
                    <span>{capitalize(pokemon.types[0].type.name)}</span>
                  </td>
                  <td>{pokemon.stats[0].base_stat}</td>
                  <td>{pokemon.stats[1].base_stat}</td>
                  <td>{pokemon.weight / 10}kgs</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
