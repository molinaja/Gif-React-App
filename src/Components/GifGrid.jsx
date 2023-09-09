import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';
import {useFetchGifs} from '../Hooks/useFetchGifs'

const GifGrid = ({ category }) => {

    const{images, isloading} = useFetchGifs(category);  
   // console.log({images})
    return (
        <>
            <h3>
                {category}
            </h3>
            <div className='card-grid'>
                {
                    images.map(
                        (image) => (
                                <GifGridItem key={image.id} {...image}/>
                            )                    
                    )                
                }
            </div>

        </>
    )
}

export default GifGrid