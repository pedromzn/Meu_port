// // funcionalidades de menu mobile
// class MobileNavbar {
//     constructor(mobileMenu, navList, navLinks) {
//         this.mobileMenu = document.querySelector(mobileMenu);
//         this.navList = document.querySelector(navList);
//         this.navLinks = document.querySelectorAll(navLinks); 
//         this.activeClass = 'active';

//         this.handleClick = this.handleClick.bind(this); 
//     } 

//     handleClick() {
//         this.navList.classList.toggle(this.activeClass); 
//     }
    

//     addClickEvent() {
//         this.mobileMenu.addEventListener('click', this.handleClick);
//     }

//     init() {
//         if (this.mobileMenu) {
//             this.addClickEvent();
//         }
//         return this;
//     }
// }

// const mobileNavbar = new MobileNavbar(
//     '.hamburger',
//     '.nav-list',
//     '.nav-list li'
// );

// mobileNavbar.init();

const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-list')

hamburger.addEventListener('click', () =>{
    nav.classList.toggle('active')
})

// alteração nos porjetos

const btn_proje = document.querySelector('.btn-mostra')
const projeto = document.querySelector('.projetos')

btn_proje.addEventListener('click', () =>{
    projeto.classList.toggle('active')
})

// dark and white mode
let icon = document.getElementById('icon')

icon.onclick = function(){
    document.body.classList.toggle('white-theme')
    if(document.body.classList.contains('white-theme')){
        icon.src = 'imagens/moon.png'
    }else{
        icon.src = 'imagens/sun.png'
    }
}
 // efeito do scroll

 window.sr = ScrollReveal({reset: true})

 sr.reveal('.sobre-hero',{
     rotate:{x:100, y:0, z:0},
     duration: 1000,
 })
 sr.reveal('.conhecimentos',{
    rotate:{x:100, y:0, z:0},
    duration: 1000,
})
sr.reveal('.projetos-cards',{
    rotate:{x:100, y:0, z:0},
    duration: 2000,
})
// sr.reveal('.projetos',{
//     rotate:{x:100, y:0, z:0},
//     duration: 1000,
// })
// sr.reveal(' .contatos-content',{
//     rotate:{x:100, y:0, z:0},
//     duration: 1000,
// })