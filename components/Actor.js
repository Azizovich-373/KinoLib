export function Actor(item) {
    const actor = document.createElement('div')    
    const img_actor = document.createElement('div')    
    const cont_img = document.createElement('div')    
    const name_actor = document.createElement('h2')    
    const genre_actor = document.createElement('h3')

    actor.classList.add('actor')
    img_actor.classList.add('img_actor')
    cont_img.classList.add('cont_img')
    name_actor.classList.add('name_actor')
    genre_actor.classList.add('genre_actor')

    img_actor.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.profile_path})`;
    name_actor.innerHTML = item.name
    genre_actor.innerHTML = item.character
    actor.append(img_actor,name_actor,genre_actor)
    img_actor.append(cont_img)

    return actor
}