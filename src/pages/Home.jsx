import React, { useState, useEffect } from 'react';
import axios, { all } from 'axios';

// Components
import PokemonCard from '../components/PokemonCard';

const Home = () => {

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const { data } = await axios.get(loadMore);
    setLoadMore(data.next);

    const createPokemonObject = (results) => {
      results.forEach(async pokemon => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);

        setAllPokemons(current => [...current, res.data]);
      });
    }

    allPokemons.sort((a, b) => a.id - b.id);
    createPokemonObject(data?.results);
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <div className='w-full flex items-center justify-center flex-col p-5'>
        <div id='home-pokemon-wrapper' className='max-w-[1200px] w-full grid gap-2'>
          {
            allPokemons?.map(pokemon => {
              return <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                type={pokemon?.types}
                img={pokemon?.sprites?.other?.dream_world?.front_default}
                id={pokemon.id}
              />
            })
          }
        </div>

        <button
          className='mt-5 py-2 px-4 rounded bg-[#6e0de8] text-white'
          onClick={getAllPokemons}
        >Load More...</button>
      </div>
    </>
  )
}

export default Home;