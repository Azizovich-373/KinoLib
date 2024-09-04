export function Poster(item) {
    const poster = document.createElement('div')    
    const img_poster = document.createElement('div')        

    poster.classList.add('film')
    img_poster.classList.add('img_film')

    img_poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.file_path})`;
    
    poster.append(img_poster)

    return poster
}