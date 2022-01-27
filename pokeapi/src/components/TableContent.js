import { Link } from "react-router-dom";
import IdPoke from "./IdPoke";
import ImgPoke from "./ImgPoke";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const TableContent = ({pokemon}) => {
  

  return (
    <tr key={pokemon.id} className={pokemon.types[0].type.name}>
      <IdPoke pokemon={pokemon} />
      <td>
        <Link to={"/view?pokemon=" + pokemon.id}>
          <ImgPoke pokemon={pokemon} />
        </Link>
      </td>
      <td>
        <Link to={"/view?pokemon=" + pokemon.id}>
          {capitalize(pokemon.name)}
        </Link>
      </td>
      <td>
        <Link to={"/view?pokemon=" + pokemon.id}>
          <span>{capitalize(pokemon.types[0].type.name)}</span>
        </Link>
      </td>
      <td>
        <Link to={"/view?pokemon=" + pokemon.id}>
          {pokemon.stats[0].base_stat}
        </Link>
      </td>
      <td>
        <Link to={"/view?pokemon=" + pokemon.id}>
          {pokemon.stats[1].base_stat}
        </Link>
      </td>
      <td>
        <Link to={"/view?pokemon=" + pokemon.id}>{pokemon.weight / 10}kgs</Link>
      </td>
    </tr>
  );
};

export default TableContent;
