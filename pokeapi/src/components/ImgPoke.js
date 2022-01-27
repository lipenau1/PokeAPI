const ImgPoke = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt="pokemon" className="pic" />
    </div>
  );
};

export default ImgPoke;
