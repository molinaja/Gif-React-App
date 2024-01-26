
import { useState, useEffect } from 'react';
import { GetGif } from '../helpers/getGif';

export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isloading, setIsloading] = useState(true);


    const ascGetGif = async () => {
        const newImg = await GetGif( category) ; 
        setImages( newImg );
        setIsloading(false);
    }

    useEffect(
        () => {
            ascGetGif();
        }, []
    );


    return{
        images,
        isloading
    }

}
