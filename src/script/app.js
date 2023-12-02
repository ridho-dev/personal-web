const menuItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Contact']

menuItems.forEach( item => {
    let menuItem = document.getElementById(`nav${item}`)
    menuItem.addEventListener('click', event => {
        event.preventDefault()
        changeContent(item.toLowerCase())
    })
})

function changeContent(sectionId) {
    let allSections = document.querySelectorAll('main > section')

    allSections.forEach(function(section) {
        section.classList.remove('active')
    })

    let selectedSection = document.getElementById(`${sectionId}Content`)
    if (selectedSection) {
        console.log(`id: ${selectedSection.id}`)
        selectedSection.classList.add('active')
    }
}