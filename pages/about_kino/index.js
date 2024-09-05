import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { reload } from "../../lib/utils";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Fotter";
import { ApiCall } from "../../lib/http.request";
import { Poster } from '../../components/Poster';
import { Film } from '../../components/Film';
import { Actor } from '../../components/Actor';

const id = new URLSearchParams(window.location.search).get('id');
const apiCall = new ApiCall(import.meta.env.VITE_BASE_URL , `Bearer ${import.meta.env.VITE_KEY}`)
const item = JSON.parse(localStorage.getItem('film'));
const cont_header = document.querySelector('.header_place')
const cont_footer = document.querySelector('.footer_place')
const poster_place = document.querySelector('.poster_place')
const cadr_place = document.querySelector('.cadr_place')
const actor_place = document.querySelector('.actor_place')
const sickvel_place = document.querySelector('.sickvel .swiper .swiper-wrapper')
const similar_place = document.querySelector('.similar .swiper .swiper-wrapper')
const title = document.querySelector('#title_triler')
const iframe = document.querySelector('.triler_place iframe')  
const videos = await apiCall.getData(`/${id}/videos`);
const finded = videos.results.find(item => item.type === "Trailer")

reload([{}], cont_header, Header)
reload([{}], cont_footer, Footer)
iframe.src = `https://www.youtube.com/embed/${finded.key}`
title.innerHTML = item.title
new Swiper('.sickvel .swiper', {
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
new Swiper('.similar .swiper', {
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
const actor = await apiCall.getData(`/${id}/credits`)
    .then(res => {
        reload(res.cast.splice(0,10), actor_place, Actor)
    })
const posters = await apiCall.getData(`/${id}}/images`)
    .then(res => {
        reload(res.backdrops.splice(1,4), poster_place, Poster)
    })
const cadrs = await apiCall.getData(`/${id}}/images`)
    .then(res => {        
        reload(res.backdrops.splice(0,4), cadr_place, Poster)
    })
const sickvel = await apiCall.getData('/popular?page=1')
    .then(res => {
        reload(res.results, sickvel_place, Film)
    })
const similar = await apiCall.getData(`/${id}/similar`)
    .then(res => {
        reload(res.results, similar_place, Film)
    })