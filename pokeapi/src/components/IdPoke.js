import { Link } from "react-router-dom";

const IdPoke = ({ pokemon }) => {
  return (
    <td className="numberPokemon">
      <Link to={"/view?pokemon=" + pokemon.id}>
        <span className="hashtag">#</span> {pokemon.id}
      </Link>
    </td>
  );
};

export default IdPoke;
