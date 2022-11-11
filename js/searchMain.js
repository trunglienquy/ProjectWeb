const showSearch = document.querySelector(".navbar-icon_search")
const hideSearch = document.querySelector(".search-close")
const searchBox = document.querySelector(".search-box")
const showMenuMobile = document.querySelector(".menu-mobile")
const hiddenMenuMobile = document.querySelector(".menu-mobile-close")
const menuMobile = document.querySelector(".navbar-menu")

const btnSubmenu = document.querySelector(".arrow-down")
const btnSubmenuUp = document.querySelector(".arrow-up")
const subMenu = document.querySelector(".dropdown-menu-mobile")
console.log(showSearch)

showSearch.addEventListener("click", function(){
    searchBox.classList.remove("hide-search")
    searchBox.style.zIndex = "100"
})
hideSearch.addEventListener("click", function(){
    searchBox.classList.add("hide-search")
    searchBox.style.zIndex = "-100"

})
// menu-mobile
showMenuMobile.addEventListener("click", function(){
    menuMobile.classList.add("show-navbar-menu")
    showMenuMobile.style.display = 'none'
    hiddenMenuMobile.style.display = 'block'
})
hiddenMenuMobile.addEventListener("click", function(){
    menuMobile.classList.remove("show-navbar-menu")
    showMenuMobile.style.display = 'block'
    hiddenMenuMobile.style.display = 'none'
})
// show sub-menu
console.log(btnSubmenu)
console.log(subMenu)
btnSubmenu.addEventListener("click", function(){
    subMenu.style.display = "block"
    btnSubmenuUp.style.display = "block"
    btnSubmenu.style.display = "none"
})
btnSubmenuUp.addEventListener("click", function(){
    subMenu.style.display = "none"
    btnSubmenu.style.display = "block"
    btnSubmenuUp.style.display = "none"

})