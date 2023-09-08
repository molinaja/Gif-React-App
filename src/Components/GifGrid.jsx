import React from 'react'
import {GetGif}  from '../helpers/getGif';

const GifGrid = ({ category }) => {

    GetGif(category);

    return (
        <>
            <h3>
                {category}
            </h3>

        </>
    )
}

export default GifGrid