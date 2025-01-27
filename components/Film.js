export function Film(item) {
    const film = document.createElement('div')    
    const img_film = document.createElement('div')    
    const cont_img = document.createElement('div')    
    const ratting = document.createElement('div')    
    const name_film = document.createElement('h2')    
    const genre_film = document.createElement('h3')

    film.classList.add('film')
    film.classList.add('swiper-slide')
    img_film.classList.add('img_film')
    cont_img.classList.add('cont_img')
    ratting.classList.add('ratting')
    name_film.classList.add('name_film')
    genre_film.classList.add('genre_film')

    img_film.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path})`;
    ratting.innerHTML = item.vote_average
    if (item.vote_average > 7 ) {
        ratting.style.backgroundColor = 'green'
    } else if (item.vote_average > 5) {
        ratting.style.backgroundColor = 'yellow'
    } else {
        ratting.style.backgroundColor = 'red'
    }
    name_film.innerHTML = item.original_title
    film.onclick = () => {
        location.assign('/pages/about_kino/?id=' + item.id)
        localStorage.setItem('film', JSON.stringify(item));
    }
    film.append(img_film,name_film,genre_film)
    img_film.append(ratting,cont_img)

    return film
}