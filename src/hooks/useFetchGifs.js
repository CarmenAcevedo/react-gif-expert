import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const getImages = async() => {
        const newImages = await getGifts( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
        // getGifts(category)
        //     .then( newImages => setImages(newImages))
    }, [] );


    return {
        images,
        isLoading
    }
}

