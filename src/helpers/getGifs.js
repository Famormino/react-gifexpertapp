export const getGifs = async ( category ) => {
            
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category ) }&limit=10&api_key=n89YmE8ZSFHSwaO7ofjaUBt0EiyaQrOj`;
    const response = await fetch(url);
    const { data } = await response.json();
    //Crear objeto con los datos necesarios
    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
        
    })

   return gifs;
 
}
