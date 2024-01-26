import React, { useEffect, useState } from 'react'
import {useFetchGifs} from '../Hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const{images, isloading} = useFetchGifs(category);  
   // console.log({images})
    return (
        <>
            <h3>
                {category}
            </h3>
            {
                isloading?(<h3>Cargando...</h3>):null
            }
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

GifGrid.prototype = {

    category: PropTypes.string.isRequired,

}
//export default GifGrid