import { reload } from "./lib/utils";
import { Header } from "./components/Header";
import { Header_two } from "./components/Header_two";
import { Film } from "./components/Film";
import { Triler } from "./components/Triler";
import { Footer } from "./components/Fotter";
import { ApiCall } from "./lib/http.request";
const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL , `Bearer ${import.meta.env.VITE_KEY}`)
const cont_header = document.querySelector('.header_place')
const cont_footer = document.querySelector('.footer_place')
const cont_film = document.querySelector('.films')
const view_all_play = document.querySelector('.view_all_play')
const select_triler = document.querySelector('.select_triler')
const upcomming_place = document.querySelector('.uncomming_place')
const top_place = document.querySelector('.top_place')
const title = document.querySelector('#title_triler')
const iframe = document.querySelector('.triler_place iframe')
const prev_top = document.querySelector('.prev_top')
const next_top = document.querySelector('.next_top')
const count_top = document.querySelector('.count_top')
const prev_up = document.querySelector('.prev_up')
const next_up = document.querySelector('.next_up')
const count_up = document.querySelector('.count_up')
const cont = document.querySelector('.container')
reload([{}], cont_header, Header);
function checkWindowSize() {
    if (window.innerWidth <= 1400) {
        reload([{}], cont_header, Header_two);
    } else {
        reload([{}], cont_header, Header);
    }
}
checkWindowSize();
window.addEventListener('resize', checkWindowSize);
reload([{}], cont_footer, Footer)

await apiCall.getData('/now_playing?language=en-US&page=1')
    .then(res => {
        const eightFilms = res.results.splice(0,8)
        reload(eightFilms, cont_film, Film);
    })
await apiCall.getData('/top_rated?language=en-US&page=1')
    .then(async res => {        
        reload(res.results, select_triler, Triler);
        const videos = await apiCall.getData(`/${res.results[0].id}/videos`);
        const finded = videos.results.find(item => item.type === "Trailer")
        iframe.src = `https://www.youtube.com/embed/${finded.key}`
        title.innerHTML = res.results[0].title
    })

let current_up = +(count_up.innerHTML)

next_up.onclick = async () => {
    if (current_up < 10) {
        current_up++
        count_up.innerHTML = current_up.toString()
        Upcomming(current_up)
    }
}
prev_up.onclick = async () => {
    if (current_up > 1) {
        current_up--
        count_up.innerHTML = current_up.toString()
        Upcomming(current_up)

    }
}
Upcomming(current_up)
async function Upcomming(item) {
    await apiCall.getData(`/upcoming?language=en-US&page=${item}`)
    .then(res => {
        const fourUp = res.results.splice(0,4)
        reload(fourUp, upcomming_place, Film);
    })
}
let current_top = +(count_top.innerHTML)
next_top.onclick = async () => {
    if (current_top < 20) {
        current_top++
        count_top.innerHTML = current_top.toString()
        Top_films(current_top)
    }
}
prev_top.onclick = async () => {
    if (current_top > 1) {
        current_top--
        count_top.innerHTML = current_top.toString()
        Top_films(current_top)
    }
}
Top_films(current_top)
async function Top_films(item) {
    await apiCall.getData(`/top_rated?page=${item}`)
    .then(res => {
        const four = res.results.splice(0,4)
        reload(four, top_place, Film)
    })
}
let view = false
view_all_play.onclick = async () => {
    
    if (view === true) {
        view_all_play.innerHTML = 'Все новинки'
        view = false
        await apiCall.getData('/now_playing?language=en-US&page=1')
            .then(res => {
                console.log(res);
                const eightFilms = res.results.splice(0,8)              
                reload(eightFilms, cont_film, Film);
            })
    } else {
        view_all_play.innerHTML = 'Скрыть'
        view = true
        await apiCall.getData('/now_playing?language=en-US&page=1')
        .then(res => {
            console.log(res);
            reload(res.results, cont_film, Film);
        })        
    }
    
}