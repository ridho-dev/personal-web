import routes from '../routes/routes'
import UrlParser from '../utils/url-parser'
import NavbarView from './components/navbar-bg'

class App {
  constructor ({ content }) {
    this._content = content
    this._navbarView = new NavbarView()
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    this._navbarView.updateNavbarColor(`#${url}`)
    await page.afterRender()
  }
}

export default App
