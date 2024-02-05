// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = new Typed('.auto-input', {
    strings: ['Entrepreneur','Front-End Developer','Musician','Affiliate Associate'],
    typeSpeed: 110,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

// Active link State on scroll

// Get All Links
let navLinks = document.querySelectorAll('nav ul li a')
// Get All Sections
let sections = document.querySelector('section')
console.log(sections)

window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY = 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            })
        }
    })
})