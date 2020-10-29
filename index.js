const toggleSwitch = document.querySelector('input[type="checkbox"]')
const navbar = document.querySelector('nav')
const navbarBrandLight = document.getElementById('navbar-brand-img-light')
const navbarBrandDark = document.getElementById('navbar-brand-img-dark')

// Switch theme
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        navbar.removeAttribute("class")        
        navbar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark")
        navbarBrandDark.hidden = false
        navbarBrandLight.hidden = true
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        navbar.removeAttribute("class")        
        navbar.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light")
        navbarBrandDark.hidden = true
        navbarBrandLight.hidden = false
    }
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme)

//on Load
toggleSwitch.checked = false;