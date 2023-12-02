const homeContent = document.getElementById('homeContent')
const aboutContent = document.getElementById('aboutContent')

const navHome = document.getElementById('navHome')
const navAbout = document.getElementById('navAbout')

navHome.addEventListener('click', () => {
    homeContent.style.display = 'flex'
    aboutContent.style.display = 'none'
})

navAbout.addEventListener('click', () => {
    homeContent.style.display = 'none'
    aboutContent.style.display = 'flex'
})