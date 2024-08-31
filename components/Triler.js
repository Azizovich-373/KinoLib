import { ApiCall } from "../lib/http.request"
const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL , `Bearer ${import.meta.env.VITE_KEY}`)
const title = document.querySelector('#title_triler')
const iframe = document.querySelector('.triler_place iframe')
export function Triler(item) {
    const triler = document.createElement('div')
    const triler_img = document.createElement('div')
    const triler_title = document.createElement('p')

    triler.classList.add('triler')
    triler_img.classList.add('triler_img')
    triler_title.classList.add('triler_title')

    triler_img.style.backgroundImage = `URL(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    triler_title.innerHTML = item.title
    triler.onclick = async () => {
        
        const res = await apiCall.getData(`/${item.id}/videos`)
        const finded = res.results.find(item => item.type === "Trailer")
        console.log(finded);
        
        iframe.src = `https://www.youtube.com/embed/${finded.key}`
        title.innerHTML = item.title
    }
    triler.append(triler_img,triler_title)

    return triler
}