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