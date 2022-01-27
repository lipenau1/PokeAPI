const StatsPoke = ({pokemon}) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <div className="stats">
        {capitalize(pokemon.stats[0].stat.name)}: {pokemon.stats[0].base_stat}
      </div>
      <div className="stats">
        {capitalize(pokemon.stats[1].stat.name)}: {pokemon.stats[1].base_stat}
      </div>
      <div className="stats">
        {capitalize(pokemon.stats[2].stat.name)}: {pokemon.stats[2].base_stat}
      </div>
      <div className="stats">
        {capitalize(pokemon.stats[3].stat.name)}: {pokemon.stats[3].base_stat}
      </div>
      <div className="stats">
        {capitalize(pokemon.stats[4].stat.name)}: {pokemon.stats[4].base_stat}
      </div>
      <div className="stats">
        {capitalize(pokemon.stats[5].stat.name)}: {pokemon.stats[5].base_stat}
      </div>
    </div>
  );
};

export default StatsPoke;
