import { reload } from "./lib/utils";
import { Header } from "./components/Header";
import { Film } from "./components/Film";
import { Triler } from "./components/Triler";
import { Footer } from "./components/Fotter";
import { compile } from "sass";

const cont_header = document.querySelector('.header_place')
const cont_footer = document.querySelector('.footer_place')
const cont_film = document.querySelector('.films')
const view_all_play = document.querySelector('.view_all_play')
const select_triler = document.querySelector('.select_triler')
const title = document.querySelector('#title_triler')
const upcomming_place = document.querySelector('.uncomming_place')
const triler_place = document.querySelector('.triler_place')
const top_place = document.querySelector('.top_place')


reload([{}], cont_header, Header)
reload([{}], cont_footer, Footer)
try {
    const res = await fetch(import.meta.env.VITE_NOW_PLAYING, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`
        }
    });
    const triler = await fetch(import.meta.env.VITE_TRILER, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`
        }
    });
    const upcomming = await fetch(import.meta.env.VITE_COMMING, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`
        }
    });
    const popular = await fetch(import.meta.env.VITE_POPULAR, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`
        }
    });
    const triler_data = await triler.json()
    const up_data = await upcomming.json()
    const pop_data = await popular.json()
    const data = await res.json()
    const eightFilms = data.results.splice(0,8)
    const fourTrilers = data.results.splice(0,4)
    const fourPopular = pop_data.results.splice(0,4)
    const fourUp = up_data.results.splice(0,4)
    console.log(eightFilms);
    console.log(triler_data);
    console.log(fourTrilers);
    console.log(up_data);
    title.innerHTML = fourTrilers[0].title
    triler_place.style.backgroundImage = `URL(https://image.tmdb.org/t/p/original${fourTrilers[0].backdrop_path})`
    reload(eightFilms, cont_film, Film);
    reload(fourTrilers, select_triler, Triler);
    reload(fourPopular, top_place, Film);
    reload(fourUp, upcomming_place, Film);
} catch (error) {
    console.error('Ошибка:', error);
}
view_all_play.onclick = async () => {
    view_all_play.classList.add('hide')
    try {
        const res = await fetch(import.meta.env.VITE_NOW_PLAYING, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_KEY}`
            }
        });
    
        const data = await res.json();
    
        reload(data.results, cont_film, Film);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}