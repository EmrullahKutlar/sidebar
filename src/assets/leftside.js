/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId)


    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('nav-toggle', 'navbar', 'body-pd')

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for (i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function() {
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    })
}

const mobile = document.getElementById("mobil-hamb");
mobile.addEventListener('click', () => {
    navbar.classList.add('expander')
    navbar.classList.add('mobile-opened')


});
const contents = document.getElementById("contents");
const closeMobile = document.getElementById("close-menu");
closeMobile.addEventListener('click', () => {
    console.log("tıklandıı");
    navbar.classList.remove('expander')
    navbar.classList.remove('mobile-opened')

})
contents.addEventListener('click', () => {
    console.log("tıklandıı");
    navbar.classList.remove('expander')
    navbar.classList.remove('mobile-opened')

})