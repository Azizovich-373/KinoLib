export function Header(item) {
    const header = document.createElement('header')
    const genres = document.createElement('div')
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
    const logo_center = document.createElement('a')
    const search = document.createElement('button')
    const search_left = document.createElement('button')
    const signin = document.createElement('button')
    const search_img = document.createElement('img')
    const search_left_img = document.createElement('img')
    const logo_img = document.createElement('img')
    const logo_center_img = document.createElement('img')
    const menu = document.createElement('button')
    const menu_img = document.createElement('img')

    header.classList.add('header')
    search.classList.add('search')
    search_left.classList.add('search_left')
    logo_center.classList.add('center_logo')
    genres.classList.add('genres')
    menu.classList.add('menu')
    logo.classList.add('logo')
    signin.classList.add('signin')
    center.classList.add('center')
    menu_img.src = '/menu.svg'

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
    search_left_img.src = '/search.svg'
    logo_img.src = '/logo.svg'
    logo_center_img.src = '/logo.svg'

    header.append(left,center,right)
    left.append(menu,search_left,logo)
    menu.append(menu_img)
    center.append(logo_center,genres)
    logo_center.append(logo_center_img)
    genres.append(afisha,media,films,actors,news,alls,cats)
    right.append(search,signin)
    logo.append(logo_img)
    search.append(search_img)
    search_left.append(search_left_img)

    return header
}