export function Header(item) {
    const header = document.createElement('header')
    const left = document.createElement('nav')
    const center = document.createElement('nav')
    const right = document.createElement('nav')
    const afisha = document.createElement('a')
    const media = document.createElement('a')
    const films = document.createElement('a')
    const actors = document.createElement('a')
    const news = document.createElement('a')
    const alls = document.createElement('a')
    const cats = document.createElement('a')
    const logo = document.createElement('a')
    const search = document.createElement('button')
    const signin = document.createElement('button')
    const search_img = document.createElement('img')
    const logo_img = document.createElement('img')

    header.classList.add('header')
    search.classList.add('search')
    signin.classList.add('signin')

    afisha.innerHTML = 'Афиша'
    media.innerHTML = 'Медиа'
    films.innerHTML = 'Фильмы'
    actors.innerHTML = 'Актёры'
    news.innerHTML = 'Новости'
    alls.innerHTML = 'Подборки'
    cats.innerHTML = 'Категории'
    signin.innerHTML = 'Войти'

    logo.href = '/'
    search_img.src = '/search.svg'
    logo_img.src = '/logo.svg'

    header.append(left,center,right)
    left.append(logo)
    center.append(afisha,media,films,actors,news,alls,cats)
    right.append(search,signin)
    logo.append(logo_img)
    search.append(search_img)

    return header
}