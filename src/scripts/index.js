import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/bg.css'
import App from './views/app'

// eslint-disable-next-line no-unused-vars
const app = new App({
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})
