VanillaTilt.init(document.querySelectorAll(".skill-container"), {
    max: 25,
    speed: 400
});
// element on click
const navbar = document.querySelector(".navbar-menu")
const menus = navbar.getElementsByTagName("a")

for(let i=0; i<menus.length;i++){
    menus[i].addEventListener('click', function(){
        let elCurrent = document.querySelector(".active")
        elCurrent.classList.remove('active')
        menus[i].classList.add('active')
    })
}

// Element on scroll

const sections = document.querySelectorAll('section')
const menuItems = document.querySelectorAll('nav div a')

window.addEventListener('scroll', ()=>{
    let current = ""
    sections.forEach(section=>{
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if(scrollY >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
            console.log(current)
        }
    })

    menuItems.forEach(menuItem =>{
        menuItem.classList.remove('active')
        if(menuItem.classList.contains(current)){
            menuItem.classList.add('active')
        }
    })
    
})