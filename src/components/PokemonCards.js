import { useState, useEffect } from 'react';

import './PokemonCards.css';


function PokemonCards(props) {

    const [pokemonData, setPokemonData] = useState({
        id: 0,
        name: '',
        base_exp: 0,
        height: 0,
        weight: 0,
        types: [],
        image_url: {
            svg_url: '',
            sprite: {
                front: '',
                back: ''
            }
        },
    });


    function findPokemonType(types) {
        const types_arr = [];

        types.map(type => {
            types_arr.push(type.type.name);
        })

        return types_arr;
    }

    useEffect(() => {
        fetch(props.url)
            .then(res => res.json())
            .then(data => {
                setPokemonData({
                    id: data.id,
                    name: data.name,
                    types: findPokemonType(data.types),
                    image_url: {
                        svg_url: (data.id < 650) ? `/svg/${data.id}.svg` : data.sprites.front_default,
                        sprite: {
                            front: data.sprites.front_default,
                            back: data.sprites.back_default,
                        }
                    },
                })
            });
    }, [])
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <>
            <div className='cardContainer m-3 p-2'>
                <div className='card cursor-pointer rounded-lg flex flex-col'>
                    <div className='card__image flex items-center justify-center'>
                        <img width="200px" className='object-cover' height="200px" src={pokemonData.image_url.sprite.front} alt={props.name} />
                    </div>

                    <div className='card__description'>
                        <div className='card__title p-3'>
                            {props.name.toUpperCase()}
                        </div>
                        <div className='p-3'>
                            {pokemonData.types && (
                                <div>
                                    {pokemonData.types.map((type, index) => (
                                        <span key={index} className=' mr-2 py-1 text-white px-5 rounded-2xl bg-black'>
                                            {capitalizeFirstLetter(type)}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default PokemonCards;