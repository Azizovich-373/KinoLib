import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { reload } from "./lib/utils";
import { Header } from "./components/Header";
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
const swiper_place = document.querySelector('.upcomming .swiper .swiper-wrapper')
const top_place = document.querySelector('.top_films .swiper .swiper-wrapper')
const title = document.querySelector('#title_triler')
const iframe = document.querySelector('.triler_place iframe')
reload([{}], cont_header, Header);
reload([{}], cont_footer, Footer)
new Swiper('.top_films .swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    grid: {
        rows: 3,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
new Swiper('.upcomming .swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    grid: {
        rows: 3,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
await apiCall.getData('/now_playing?language=en-US&page=1')
    .then(res => {
        reload(res.results.splice(0,8), cont_film, Film);
    })
await apiCall.getData('/top_rated?language=en-US&page=1')
    .then(async res => {        
        reload(res.results, select_triler, Triler);
        const videos = await apiCall.getData(`/${res.results[0].id}/videos`);
        const finded = videos.results.find(item => item.type === "Trailer")
        iframe.src = `https://www.youtube.com/embed/${finded.key}`
        title.innerHTML = res.results[0].title
    })


await apiCall.getData(`/upcoming?language=en-US&page=1`)
    .then(res => {
        reload(res.results, swiper_place, Film);
    })
await apiCall.getData(`/top_rated?page=1`)
    .then(res => {
        reload(res.results, top_place, Film)
    })
let view = false
view_all_play.onclick = async () => {
    
    if (view === true) {
        view_all_play.innerHTML = 'Все новинки'
        view = false
        await apiCall.getData('/now_playing?language=en-US&page=1')
            .then(res => {
                console.log(res);          
                reload(res.results.splice(0,8), cont_film, Film);
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