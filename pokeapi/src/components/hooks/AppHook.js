import "../../styles/index.css";
import { useEffect, useState } from "react";
import api from "../api";
import TableHeader from "../TableHeader";
import TableContent from "../TableContent";
import Context from "../context/Context";
import SideBar from "../SideBar";
import ContextPoke from "../context/ContextPoke";

const AppHook = () => {
  const [pokemons, setPokemons] = useState([]);
  const [subList, setSubList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const arr = [];
      for (let i = 0; i < 50; i++) {
        const response = await api.get(
          `https://pokeapi.co/api/v2/pokemon/${i + 1}`
        );

        arr.push(response.data);
      }
      setSubList(arr);

      const fetchAfterRender = async () => {
        const afterPokes = [];
        for (let i = 0; i < 898; i++) {
          const response = await api.get(
            `https://pokeapi.co/api/v2/pokemon/${i + 1}`
          );

          afterPokes.push(response.data);
        }
        setSubList(afterPokes);
      };
      fetchAfterRender();
    };
    fetchData();
  }, []);

  useEffect(() => {
    setPokemons(subList);
  }, [subList]);

  return (
    <Context.Provider value={[subList, setSubList]}>
      <ContextPoke.Provider value={[pokemons, setPokemons]}>
        <div>
          <SideBar />
          <div className="tableContainer">
            <table className="tablePokemon" cellSpacing="0">
              <TableHeader />
              <tbody>
                {pokemons.map((pokemon) => (
                  <TableContent pokemon={pokemon} key={pokemon.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContextPoke.Provider>
    </Context.Provider>
  );
};

export default AppHook;
