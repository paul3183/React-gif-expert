import React, { useEffect, useState } from 'react';

import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

// import {getGifts} from '../helpers/getGifts' no necesito este porque importe mi custom hook

const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log({images, isLoading});

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && ( <h2>Cargando...</h2> ) 
            }
            
            <div className='card-grid'>
                {images.map( (image ) => (
                    <GifItem 
                        key={image.id}
                        {...image}
                    />
                    ))
                }
            </div>
        </>
    );
};

export default GifGrid;