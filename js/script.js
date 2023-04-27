/*============= Sticky Navbar =============== */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*============ Toggle Icon Navbar ========== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('a.active');
};
/*============ scroll section ========== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/*============ scrol bouncing========== */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})
ScrollReveal().reveal('.home-content, .heading, #h1-timeline, .wrapper2 header', { origin: 'top' });
ScrollReveal().reveal('.home-img, .header1, .title-kontak', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============ ty JS ========== */
const typed = new Typed('.multiple-text', {
    strings: ['Network Engineer', 'IT Support Officer', 'IT Infrastructure'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

/*===== KRIIM PESAN ==*/
function kirim(){

    var id_nama = document.getElementById("nama").value;
    var id_perusahaan = document.getElementById("perusahaan").value;
    var id_departemen = document.getElementById("departemen").value;
    var id_pesan = document.getElementById("pesan").value;
      
var url = "https://wa.me/6281310000893?text="
+"Halo, Saya "+id_nama+"%0a"
+"Dari Tim "+id_departemen+"%0a"
+""+id_perusahaan+",%0a"
+""+id_pesan;

window.open(url,'_blank').focus();
  }


  /* ==== DISABLE KLIK KANAN =====*/

  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

  /* ==== DISABLE shourtcut view page source =====*/
  document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        
        return false;
    } else {
        return true;
    }
};
