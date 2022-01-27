import Title from "./Title";
import SearchButton from "./SearchButton";
import { useContext } from "react";
import Context from "./context/Context";
import ContextPoke from "./context/ContextPoke";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const SideBar = () => {
  const [subList, setSubList] = useContext(Context);
  const [pokemons, setPokemons] = useContext(ContextPoke);

  const typeArr = [
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

  const pokeList = (type) => {
    const arr = [];
    subList.filter((pokemon) => {
      if (pokemon.types[0].type.name.includes(type)) {
        arr.push(pokemon);
      }
    });
    setPokemons(arr);
    document.documentElement.scrollTop = 0;
  };

  const pokeListAll = () => {
    setPokemons(subList);
    document.documentElement.scrollTop = 0;
  };

  const pokeSearch = (text) => {
    const arr = [];
    let search = text.toLowerCase();
    subList.filter((pokemon) => {
      if (pokemon.name.includes(search) || pokemon.id == text) {
        arr.push(pokemon);
      }
    });
    setPokemons(arr);
  };

  return (
    <div className="sidebar">
      <div>
        <div>
          <Title />
          <SearchButton />
        </div>
        <input
          type="text"
          className="search"
          id="search"
          placeholder="Search.."
          onChange={(e) => {
            setTimeout(pokeSearch(e.target.value), 200);
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
  );
};

export default SideBar;
