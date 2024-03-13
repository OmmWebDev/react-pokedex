import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({name, type, img, id}) => {

  const navigate = useNavigate();
  const pokeCardBgColor = type[0]?.type?.name;
  
  return (
    <>
      <div className={`${pokeCardBgColor} min-w-[300px] h-[250px] rounded-3xl border flex items-center justify-between p-9 cursor-pointer relative`} 
        onClick={() => navigate(`/pokemon/${name}`)}
      >
        <div>
          <h3 className='font-bold text-2xl capitalize md:text-3xl text-white mb-3'>{name}</h3>
          {
            type?.map(type => (
              <p 
                key={type.type.name} 
                className='capitalize text-white px-4 py-1 rounded-full' 
                style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', marginBottom: '0.5rem', width: 'max-content'}}
              >{type.type.name}</p>
            ))
          }
        </div>

        <h2 className='absolute text-white text-6xl font-semibold opacity-50 right-4 top-5'>
          #{id < 10 ? '0' + id : id}
        </h2>

        <div className='w-[150px] z-10'>
          <img 
            src={img} alt={name}
            className='max-w-full max-h-full'
          />
        </div>
      </div>
    </>
  )
}

export default PokemonCard;