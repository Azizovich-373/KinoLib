const title = document.querySelector('#title_triler')
const triler_place = document.querySelector('.triler_place')
export function Triler(item) {
    const triler = document.createElement('div')
    const triler_img = document.createElement('div')
    const triler_title = document.createElement('p')

    triler.classList.add('triler')
    triler_img.classList.add('triler_img')
    triler_title.classList.add('triler_title')

    triler_img.style.backgroundImage = `URL(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    triler_title.innerHTML = item.title
    triler.onclick = () => {
        triler_place.style.backgroundImage = `URL(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        title.innerHTML = item.title
    }
    triler.append(triler_img,triler_title)

    return triler
}