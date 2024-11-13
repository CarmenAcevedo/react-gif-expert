export const getGifts = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/trending?api_key=sYQ5a7CoAnk88O5bYsffl8xEpH2rUxIk&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    // console.log(data);
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(gifs);
    return gifs;    
}
