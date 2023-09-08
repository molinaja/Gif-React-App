export const GetGif = async (category) => {

    const key = 'j3wVn8TpK88OdbNLFgGD1y8Erb4NeF84'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=20`;
    const res = await fetch(url);
    const {data} = await res.json();
    //console.log(data);

    const gifs = data.map(
        img => (
            {
                id : img.id, 
                title : img.title,
                url: img.images.downsized_medium.url
                
            }
        )
    )

    console.log(gifs);

}
