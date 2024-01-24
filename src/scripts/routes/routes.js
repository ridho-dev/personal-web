import HomePage from '../views/pages/home'
import AboutPage from '../views/pages/about'
import ProjectsPage from '../views/pages/projects'
import ContactPage from '../views/pages/contacts'

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/about': AboutPage,
  '/projects': ProjectsPage,
  '/contact': ContactPage
}

export default routes
