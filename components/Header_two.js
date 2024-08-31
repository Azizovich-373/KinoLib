export function Header_two(item) {
    const header = document.createElement('header')
    const search = document.createElement('button')
    const menu = document.createElement('button')
    const logoContainer = document.createElement('div')
    const nav = document.createElement('nav')
    const left = document.createElement('nav')
    const signin = document.createElement('button')
    const logo_img = document.createElement('img')
    const search_img = document.createElement('img')
    const menu_img = document.createElement('img')
    const logo = document.createElement('a')
    const afisha = document.createElement('a')
    const media = document.createElement('a')
    const films = document.createElement('a')
    const actors = document.createElement('a')
    const news = document.createElement('a')
    const alls = document.createElement('a')
    const cats = document.createElement('a')
    
    header.classList.add('header')
    search.classList.add('search')
    menu.classList.add('menu')
    signin.classList.add('signin')
    logoContainer.classList.add('logo-container')
    nav.classList.add('titles_header')
    logo.href = '/'
    logo_img.src = '/logo.svg'
    search_img.src = '/search.svg'
    menu_img.src = '/menu.svg'
    
    afisha.innerHTML = 'Афиша'
    media.innerHTML = 'Медиа'
    films.innerHTML = 'Фильмы'
    actors.innerHTML = 'Актёры'
    news.innerHTML = 'Новости'
    alls.innerHTML = 'Подборки'
    cats.innerHTML = 'Категории'
    signin.innerHTML = 'Войти'

    header.append(left, logoContainer, signin)
    left.append(menu,search)
    search.append(search_img)
    menu.append(menu_img)
    logoContainer.append(logo, nav)
    logo.append(logo_img)
    nav.append(afisha, media, films, actors, news, alls, cats)

    return header
}
