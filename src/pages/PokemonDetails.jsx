import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {

  const {pokemonName} = useParams();

  const [result, setResult] = useState([]);
  const [error, setError] = useState([]);

  async function getData(){
    try {
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setResult(data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(result);
  
  return (
    <>
      <div className='w-full h-full p-3 flex items-center justify-center'>
        <div className='max-w-[1200px] w-full relative'>
          <div id='pokemon-details-top' className={`w-full h-72 ${result?.types?.[0]?.type?.name} rounded-t-[40px] flex items-center justify-around md:px-40 py-30 px-20`}>
            
            <div id='pokemon-details-img' className='w-[200px] h-[200px] z-10'>
              <img 
                src={result?.sprites?.other?.dream_world?.front_default}
                alt="" 
                className='w-full max-h-full' 
              />
            </div>
            <div className='flex items-center justify-center flex-col'>
              <h2 id='pokemon-details-id' className='text-6xl font-bold text-white opacity-50 absolute top-5'>
                #{result?.id < 10 ? '0' + result?.id : result?.id}
              </h2>
              <h1 className='font-bold text-[1.7rem] capitalize md:text-4xl text-white mb-3'>
                {result?.name}
              </h1>
              <div className='flex gap-3'>
                {
                  result?.types?.map(type => (
                    <p 
                      className='capitalize text-white px-4 py-1 rounded-full' 
                      style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', marginBottom: '0.5rem', width: 'max-content'}}
                      key={type?.type?.name}
                    >{type?.type?.name}</p>
                  ))
                }
              </div>
            </div>
          </div>

          <div className='w-full min-h-60 bg-white'>
            <div className='py-4 px-6 flex border-b-2'>
              <li className='list-none text-gray-400 px-3 py-2 cursor-pointer font-bold hover:text-black transition'>About</li>
            </div>

            <div className='py-4 px-6'>
              <table>
                <tbody className='flex flex-col gap-2'>
                  <tr>
                    <td className='w-28'>Species</td>
                    <td className='font-bold'>Grass, Poison</td>
                  </tr>
                  <tr>
                    <td className='w-28'>Height</td>
                    <td className='font-bold'>{result?.height * 10}cm</td>
                  </tr>
                  <tr>
                    <td className='w-28'>Weight</td>
                    <td className='font-bold'>{result?.weight / 10}kg</td>
                  </tr>
                  <tr>
                    <td className='w-28'>Abilities</td>
                    <td className='font-bold'>Overgrow, Chlorophyll</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonDetails;