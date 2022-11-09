const showSearch = document.querySelector(".navbar-icon_search")
const hideSearch = document.querySelector(".search-close")
const searchBox = document.querySelector(".search-box")
const showMenuMobile = document.querySelector(".menu-mobile")
const menuMobile = document.querySelector(".navbar-menu")
console.log(showSearch)

showSearch.addEventListener("click", function(){
    searchBox.classList.remove("hide-search")
})
hideSearch.addEventListener("click", function(){
    searchBox.classList.add("hide-search")
})
showMenuMobile.addEventListener("click", function(){
    menuMobile.classList.add("show-navbar-menu")
})