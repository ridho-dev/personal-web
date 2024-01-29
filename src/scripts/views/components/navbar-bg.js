class NavbarView {
  updateNavbarColor (activeUrl) {
    const navbar = document.querySelector('.navbar')

    const navbarItems = navbar.querySelectorAll('a')
    navbarItems.forEach(item => {
      item.classList.remove('navbar-active')
    })

    const activeNavbar = navbar.querySelector(`a[href="${activeUrl}"]`)
    if (activeNavbar) {
      activeNavbar.classList.add('navbar-active')
      console.log(activeNavbar)
    }
  }
}

export default NavbarView
