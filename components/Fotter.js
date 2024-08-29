export function Footer(item) {
    const footer = document.createElement('footer')
    const box_fon = document.createElement('div')
    const box = document.createElement('div')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    const inp_footer = document.createElement('input')
    const btn_footer = document.createElement('button')
    const cats = document.createElement('div')
    const afisha = document.createElement('p')
    const news = document.createElement('p')
    const people = document.createElement('p')
    const retting = document.createElement('p')
    const rezechi = document.createElement('p')
    const cat_film = document.createElement('p')
    const h4 = document.createElement('h4')
    const h5 = document.createElement('h5')
    const h6 = document.createElement('h6')

    footer.classList.add('footer')
    box_fon.classList.add('box_fon')
    box.classList.add('box')
    inp_footer.classList.add('inp_footer')
    btn_footer.classList.add('btn_footer')
    cats.classList.add('cats')

    img.src = '/logo_footer.svg'
    inp_footer.placeholder = 'Введите свой E-mail адрес'

    h2.innerHTML = 'Подпишитесь на E-mail рассылку'
    h3.innerHTML = `Если хотиет быть в курсе последних новостей и новинок кино -`
    h6.innerHTML = ` заполните форму ниже и оформите бесплатную E-mail рассылку! `
    btn_footer.innerHTML = 'Подписаться'
    afisha.innerHTML = 'Афиша'
    news.innerHTML = 'Новости'
    people.innerHTML = 'Персоны'
    retting.innerHTML = 'Рейтинги'
    rezechi.innerHTML = 'Рецензии'
    cat_film.innerHTML = 'Католог фильмов'
    h4.innerHTML = '2024 © Kinoarea.  Все права защищены'
    h5.innerHTML = 'Политика конфиденциальности'

    footer.append(box_fon,cats,h4,h5)
    box_fon.append(box)
    box.append(img,h2,h3,h6,inp_footer,btn_footer)
    cats.append(afisha,news,people,retting,rezechi,cat_film)
    
    return footer
}