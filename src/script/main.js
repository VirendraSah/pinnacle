// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    loop: false,
    navigation: {
        nextEl: ".custom-button-next",
        prevEl: ".custom-button-prev",
        disabledClass: "swiper-button-disabled", // default class Swiper adds
    },
    pagination: {
        el: ".swiper-pagination-progress", // main progressbar container
        type: "progressbar",
    },
});

// Fraction pagination (custom)
const fractionEl = document.querySelector('.swiper-fraction'); 
swiper.on('slideChange', function () {
    const totalSlides = swiper.slides.length; // real total slides
    const activeSlide = swiper.realIndex + 1; // 0-based index to human-readable
    fractionEl.textContent = `${activeSlide} / ${totalSlides}`;
});

fractionEl.innerHTML = `1 / ${swiper.slides.length}`; // Initialize on load

// close megaMenu
const closeMenu = document.getElementById('closeMenu');
const megaMenu = document.getElementById('megaMenu');

closeMenu.addEventListener('click', () => {
    megaMenu.classList.add('hidden');
});

// open megaMenu
const desktopmegamenuopenBtn = document.getElementById('desktopmegamenuopenBtn');
desktopmegamenuopenBtn.addEventListener('click', () => {
    megaMenu.classList.remove('hidden');
});

// open megaMenu mobile
const mobilemegamenuopenBtn = document.getElementById('mobilemegamenuopenBtn');
const mobiletogglemenu = document.getElementById('mobiletogglemenu');
mobilemegamenuopenBtn.addEventListener('click', () => {
    mobilemegamenuopenBtn.classList.toggle('rotate-[120deg]');
    mobiletogglemenu.classList.toggle('hidden');

})

// close megaMenu mobile
const MobilemegacloseIcon = document.getElementById('MobilemegacloseIcon');
const mobilemegaMenu = document.getElementById('mobilemegaMenu');
MobilemegacloseIcon.addEventListener('click', () => {
    mobilemegaMenu.classList.add('hidden');
})

const mobilemegamenutoggleBtn = document.getElementById('mobilemegamenutoggleBtn');
mobilemegamenutoggleBtn.addEventListener('click', () => {
    mobilemegaMenu.classList.toggle('hidden');
})


// open arrow down menu mobile
const mobilearrowDownbtns = document.querySelectorAll('.mobilearrow-downbtn');
const mobilearrowDowncontents = document.querySelectorAll('.mobilearrow-downcontent');

mobilearrowDownbtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    
    // closing other contents when one is opened
    mobilearrowDowncontents.forEach((content, i) => {
      if (i !== index) {
        content.classList.add('hidden');
        mobilearrowDownbtns[i].classList.remove('rotate-180');
      }
    });

    mobilearrowDowncontents[index].classList.toggle('hidden');
    btn.classList.toggle('rotate-180');
  });
});

// assistance circuar btn Remover

const assistanceremovebtn=document.getElementById('assistanceremovebtn')
const assistancebtn=document.getElementById('assistancebtn')
assistanceremovebtn.addEventListener('click', ()=>{
  assistancebtn.classList.add('hidden')
})

// assistance ractangular remver btn

const assistanceBoxclosebtn=document.getElementById('assistanceBox_close_btn')
const assistanceRactangularBox=document.getElementById('assistance_ractangular_box')
const assistanceCircleBtn=document.getElementById('assistance_circle_btn')

assistanceBoxclosebtn.addEventListener('click', ()=>{
  assistanceRactangularBox.classList.add('hidden')
})


assistanceCircleBtn.addEventListener('click',()=>{
  
  assistanceRactangularBox.classList.remove('hidden')
})

