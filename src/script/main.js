// download buttons
const downloadbrochures = document.querySelectorAll('.download-brochure');

if (downloadbrochures) {
  downloadbrochures.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Get brochure file from data attribute or use default
      const pdfUrl = btn.dataset.pdf || "./mediaFiles/Home page/Pinnacle brochure.pdf";
      const fileName = pdfUrl.split('/').pop();

      // Create temporary link element
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = fileName;
      document.body.appendChild(link);

      // Trigger download
      link.click();

      // Remove temporary element
      document.body.removeChild(link);
    });
  });
}


const header = document.getElementById("transparentBGonScroll");
const mainHeader = document.getElementById("mainheaderAppear_disappear");
const mobileBottomMenu = document.getElementById("mobileBottomMenu_disappear");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Hide on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 50) {
    mainHeader.classList.add("translate-y-[-100%]");
    mobileBottomMenu.classList.add("translate-y-[200%]");
  } else {
    mainHeader.classList.remove("translate-y-[-100%]");
    mobileBottomMenu.classList.remove("translate-y-[200%]");
  }

  // Background change on scroll
  if (currentScroll > 50) {
    header.classList.remove("bg-white");
  } else {
    header.classList.add("bg-white");
  }

  lastScroll = currentScroll;
});

// Initialize Swiper top Banner
var swiper = new Swiper(".mySwiperBanner", {
  loop: false,
  navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
    disabledClass: "swiper-button-disabled",
  },
  pagination: {
    el: ".swiper-pagination-progress",
    type: "progressbar",
  },
});

// Fraction pagination (custom)
const fractionEl = document.querySelector('.swiper-fraction');
// Initialize fraction on page load
if (fractionEl) {
  fractionEl.textContent = `1 / ${swiper.slides.length}`;
}


swiper.on('slideChange', function () {
  const totalSlides = swiper.slides.length;
  const activeSlide = swiper.realIndex + 1;
  fractionEl.textContent = `${activeSlide} / ${totalSlides}`;
});

// close megaMenu
// Support both megaMenu and megaMenuLocation
const megaMenu = document.getElementById('megaMenu');
const megaMenuLocation = document.getElementById('megaMenuLocation');
const closeMenu = document.getElementById('closeMenu');
if (closeMenu && (megaMenu || megaMenuLocation)) {
  closeMenu.addEventListener('click', () => {
    if (megaMenu) megaMenu.classList.add('hidden');
    if (megaMenuLocation) megaMenuLocation.classList.add('hidden');
  });
}

// open megaMenu (support both class and id)
const desktopBtns = document.querySelectorAll('.desktopmegamenuopenBtn');
const desktopBtnId = document.getElementById('desktopmegamenuopenBtn');
function openMegaMenu() {
  if (megaMenu) megaMenu.classList.remove('hidden');
  if (megaMenuLocation) megaMenuLocation.classList.remove('hidden');
}
if (desktopBtns.length > 0) {
  desktopBtns.forEach(btn => {
    btn.addEventListener('click', openMegaMenu);
  });
} else if (desktopBtnId) {
  desktopBtnId.addEventListener('click', openMegaMenu);
}

// open megaMenu mobile
const mobilemegamenuopenBtn = document.getElementById('mobilemegamenuopenBtn');
const mobiletogglemenu = document.getElementById('mobiletogglemenu');
const overlaybottommenu = document.getElementById('overlaybottommenu')
mobilemegamenuopenBtn?.addEventListener('click', () => {
  mobilemegamenuopenBtn.classList.toggle('rotate-[120deg]');
  mobiletogglemenu.classList.toggle('hidden');
  overlaybottommenu.classList.toggle('hidden')
})

overlaybottommenu?.addEventListener('click', () => {
  mobilemegamenuopenBtn.classList.toggle('rotate-[120deg]');
  mobiletogglemenu.classList.toggle('hidden');
  overlaybottommenu.classList.toggle('hidden')
})

// close megaMenu mobile
const MobilemegacloseIcon = document.getElementById('MobilemegacloseIcon');
const mobilemegaMenu = document.getElementById('mobilemegaMenu');
MobilemegacloseIcon?.addEventListener('click', () => {
  mobilemegaMenu.classList.add('hidden');
})

const mobilemegamenutoggleBtn = document.getElementById('mobilemegamenutoggleBtn');
mobilemegamenutoggleBtn?.addEventListener('click', () => {
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

const assistanceremovebtn = document.getElementById('assistanceremovebtn')
const assistancebtnsmall = document.querySelector('.assistancebtnsmall')
const assistancebtn = document.getElementById('assistancebtn')
assistanceremovebtn?.addEventListener('click', () => {
  assistancebtn.classList.add('hidden')
  assistancebtnsmall.classList.remove('hidden')
})

assistancebtnsmall?.addEventListener('click', () => {
  assistancebtn.classList.remove('hidden')
  assistancebtnsmall.classList.add('hidden')
})

// assistance ractangular remver btn
const assistanceBtn = document.getElementById("assistance_circle_btn");
const assistanceBox = document.getElementById("assistance_ractangular_box");
const assistanceCloseBtn = document.getElementById("assistanceBox_close_btn");

assistanceBtn?.addEventListener("click", () => {
  // Show box
  assistancebtn.classList.add('hidden')
  assistanceBox.classList.remove("hidden");
  assistanceBox.classList.add("scale-0");
  setTimeout(() => {
    assistanceBox.classList.remove("scale-0");
    assistanceBox.classList.add("scale-100", "transition-transform", "duration-500", "ease-in-out");
  }, 10);
});

assistanceCloseBtn?.addEventListener("click", () => {
  assistancebtn.classList.remove('hidden')
  assistanceBox.classList.remove("scale-100");
  assistanceBox.classList.add("scale-0");

  setTimeout(() => {
    assistanceBox.classList.add("hidden");
  }, 500);
});

// Read More Data
// Read More Data
const aboutSection = document.getElementById('about');
const readMoreBtn = document.getElementById('readMoreBtn');
const readMoreData = document.getElementById('readMoreData');
const paragraphBr = document.getElementById('paragraphBr');
const AboutusData = document.querySelector('.AboutusData');

if (readMoreBtn && readMoreData && AboutusData) {
  readMoreBtn.addEventListener('click', () => {
    const isReadMore = readMoreBtn.textContent.trim().toLowerCase() === 'read more';

    // Toggle button text
    readMoreBtn.textContent = isReadMore ? 'Read Less' : 'Read More';

    // Toggle hidden content
    readMoreData.classList.toggle('hidden', !isReadMore);
    paragraphBr.classList.toggle('hidden', isReadMore);

    // Height toggle
    if (isReadMore) {
      AboutusData.classList.remove('h-lvh');
      AboutusData.classList.add('h-auto');
    } else {
      AboutusData.classList.remove('h-auto');
      AboutusData.classList.add('h-lvh');
    }
  });
}


// Odometer Counter Animation
function animateCounter(id, start, end, duration, suffix = '', separator = false) {
  const el = document.getElementById(id);
  if (!el) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    let value = Math.floor(progress * (end - start) + start);
    if (separator) {
      value = value.toLocaleString('en-IN');
    }
    el.textContent = value + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

let odometerStarted = false;
function handleOdometerOnScroll() {
  const section = document.getElementById('pinnacle-numbers-section');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // Trigger when bottom of section is in view
  if (!odometerStarted && rect.bottom <= windowHeight && rect.top >= 0) {
    odometerStarted = true;
    animateCounter('odometer-acre', 0, 8, 1000);
    animateCounter('odometer-residence', 0, 700, 1200);
    animateCounter('odometer-tower', 0, 6, 1000);
    animateCounter('odometer-clubhouse', 0, 100000, 1500, '', true);
    animateCounter('odometer-parking', 0, 1400, 1200, '+');
    window.removeEventListener('scroll', handleOdometerOnScroll);
  }
}
window.addEventListener('scroll', handleOdometerOnScroll);
// In case already in view on load
setTimeout(handleOdometerOnScroll, 500);






// Data for each button's content
const residenceData = {
  '4BHKbtn': [
    {
      title: 'Elite Residences 4 BHK Apartments',
      area: 'Approx. 2,600–2,800sq.ft',
      tower: 'Zenith & Crest',
      status: 'Under Construction',
      handover: '2028',
      furnishing: 'SEMI FURNISHED',
      availability: 'Price on Request',
      image: './mediaFiles/Home page/Counter number/Products/4BHK1_image.webp',
      bg: 'var(--4bhk-bg)'
    }
    , {
      title: 'Elite Residences 4 BHK Apartments',
      area: 'To Be Announced',
      tower: 'Prime',
      status: 'Under Construction',
      handover: '2028',
      furnishing: 'To Be Announced',
      availability: 'Price on Request ',
      image: './mediaFiles/Home page/Counter number/Products/4BHK_image.webp',
      bg: 'var(--4bhk-bg)'
    },
  ],
  '3BHKbtn': {
    title: 'Executive Residences 3 BHK Apartments',
    area: 'Approx. 2,400–2,650sq.ft',
    tower: 'Apex',
    status: 'Under Construction',
    handover: '2028',
    furnishing: 'Semi Furnished',
    availability: 'Coming Soon',
    image: ['./mediaFiles/Home page/Counter number/Products/3BHK_image.webp'],
    bg: 'var(--3bhk-bg)'
  },
  '5BHKbtn': [{
    title: 'Presidential Sky Homes 5 BHK Apartments',
    area: 'To Be Announced',
    tower: 'Everest',
    status: 'Under Construction',
    furnishing: 'To Be Announced',
    availability: 'Coming Soon',
    image: './mediaFiles/Home page/Counter number/Products/5BHK_image.webp',
    bg: 'var(--5bhk-bg)'
  },
  {
    title: 'Presidential Sky Homes 5 BHK Apartments',
    area: 'To Be Announced',
    tower: 'Crown',
    status: 'Under Construction',
    furnishing: 'To Be Announced',
    availability: 'Coming Soon',
    image: ['./mediaFiles/Home page/Counter number/Products/5BHK1_image.webp'],
    bg: 'var(--5bhk-bg)'
  }
  ],
  'pentHouse': {
    title: 'Cloud Villas Sky Penthouses',
    area: 'To Be Announced',
    tower: 'All Towers – 36th Floor Duplex',
    status: 'Under Construction',
    furnishing: 'To Be Announced',
    availability: 'Coming Soon',
    image: ['./mediaFiles/Home page/Counter number/Products/penthouse_image.webp'],
    bg: 'var(--penthouse-bg)'
  }
};

// ============ DOM SELECTORS ============
const bhkButtons = document.querySelectorAll('.BHKResidence');
const dynamicImg = document.querySelector('.dynamic-image');
const dynamicTitle = document.getElementById('dynamic-title');
const dynamicArea = document.getElementById('dynamic-area');
const dynamicTower = document.getElementById('dynamic-tower');
const dynamicStatus = document.getElementById('dynamic-status');
const dynamicHandover = document.getElementById('dynamic-handover');
const dynamicFurnishing = document.getElementById('dynamic-furnishing');
const dynamicAvailability = document.getElementById('dynamic-availability');
const rightArrow = document.querySelector('.SignatureResidence-custom-next-button');
const leftArrow = document.querySelector('.SignatureResidence-custom-prev-button');

// ============ STATE ============
let currentButton = '3BHKbtn';
let currentIndex = 0;

// ============ FUNCTION TO UPDATE DOM ============
function updateDom() {
  try{
    
  const data = residenceData[currentButton];
  let currentData = Array.isArray(data) ? data[currentIndex] : data;

  if (!currentData) return;
  // Update DOM content


  if(dynamicImg?.src){
    dynamicImg.src = currentData?.image;
  }

   if(dynamicTitle?.textContent){
      dynamicTitle.textContent = currentData?.title + '';
   }

   if(dynamicArea?.textContent){
      dynamicArea.textContent = `Area: ${currentData.area}`;
   }

  dynamicTower.textContent = `Tower: ${currentData.tower}`;
  
  dynamicStatus.textContent = `Status: ${currentData.status}`;
  
  dynamicHandover.textContent = `Expected Handover: ${currentData.handover || '—'}`;
  
  dynamicFurnishing.textContent = `Furnishing: ${currentData.furnishing}`;
  
  dynamicAvailability.textContent = `Availability: ${currentData.availability}`;

  // Optional background update
  document.querySelector('.dynamicData').style.background = currentData.bg;

  // Toggle arrow visibility
  toggleArrowVisibility();
  }catch(e){
    console.error(e)
  }
}

// ============ TOGGLE ARROW VISIBILITY ============
function toggleArrowVisibility() {
  const data = residenceData[currentButton];

  if (Array.isArray(data) && data.length > 1) {
    rightArrow.classList.remove('hidden');
    leftArrow.classList.remove('hidden');
  } else {
    rightArrow.classList.add('hidden');
    leftArrow.classList.add('hidden');
  }
}

// ============ BUTTON CLICK EVENT ============
bhkButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Button active state
    bhkButtons.forEach(btn => {
      btn.classList.remove('bg-[#003253]', 'text-white');
      btn.classList.add('bg-white', 'text-[#003253]');
    });

    button.classList.add('bg-[#003253]', 'text-white');
    button.classList.remove('bg-white', 'text-[#003253]');

    currentButton = button.id;
    currentIndex = 0;
    updateDom();
  });
});

// ============ ARROW BUTTON EVENTS ============
rightArrow?.addEventListener('click', () => {
  const data = residenceData[currentButton];
  if (Array.isArray(data)) {
    currentIndex = (currentIndex + 1) % data.length;
    updateDom();
  }
});

leftArrow?.addEventListener('click', () => {
  const data = residenceData[currentButton];
  if (Array.isArray(data)) {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    updateDom();
  }
});

// ============ DEFAULT LOAD ============
updateDom();

const residenceDataMobile = {
  '4BHKbtn': [
    {
      title: 'Elite Residences 4 BHK Apartments',
      area: 'Approx. 2,600–2,800sq.ft',
      tower: 'Zenith & Crest',
      status: 'Under Construction',
      handover: '2028',
      furnishing: 'SEMI FURNISHED',
      availability: 'Price on Request',
      image: './mediaFiles/Home page/Counter number/Products/signatureresidencemobile1.svg',
      bg: 'var(--4bhk-bg)'
    }
    , {
      title: 'Elite Residences 4 BHK Apartments',
      area: 'To Be Announced',
      tower: 'Prime',
      status: 'Under Construction',
      handover: '2028',
      furnishing: 'To Be Announced',
      availability: 'Price on Request ',
      image: './mediaFiles/Home page/Counter number/Products/Prime 4 BHk.svg',
      bg: 'var(--4bhk-bg)'
    },
  ],
  '3BHKbtn': {
    title: 'Executive Residences 3 BHK Apartments',
    area: 'Approx. 2,400–2,650sq.ft',
    tower: 'Apex',
    status: 'Under Construction',
    handover: '2028',
    furnishing: 'Semi Furnished',
    availability: 'Coming Soon',
    image: './mediaFiles/Home page/Counter number/Products/3bhkmobile.svg',
    bg: 'var(--3bhk-bg)'
  },
  '5BHKbtn': [{
    title: 'Presidential Sky Homes 5 BHK Apartments',
    area: 'To Be Announced',
    tower: 'Everest',
    status: 'Under Construction',
    furnishing: 'To Be Announced',
    availability: 'Coming Soon',
    image: './mediaFiles/Home page/Counter number/Products/Tower_ Everest.svg',
    bg: 'var(--5bhk-bg)'
  },
  {
    title: 'Presidential Sky Homes 5 BHK Apartments',
    area: 'To Be Announced',
    tower: 'Crown',
    status: 'Under Construction',
    furnishing: 'To Be Announced',
    availability: 'Coming Soon',
    image: './mediaFiles/Home page/Counter number/Products/Presidential Sky Homes 5 BHK Apartments.svg',
    bg: 'var(--5bhk-bg)'
  }
  ],
  'pentHouse': {
    title: 'Cloud Villas Sky Penthouses',
    area: 'To Be Announced',
    tower: 'All Towers – 36th Floor Duplex',
    status: 'Under Construction',
    furnishing: 'To Be Announced',
    availability: 'Coming Soon',
    image: './mediaFiles/Home page/Counter number/Products/Cloud Villas  Sky Penthouses.svg',
    bg: 'var(--penthouse-bg)'
  }
};


const buttons = document.querySelectorAll('.BHKResidenceMobile');
const swiperWrapper = document.querySelector('.SignatureResidenceSwiper .swiper-wrapper');

let swiperInstance;

function updateSlides(dataKey) {
  let key = dataKey.replace('mobile', '');
  let data = residenceDataMobile[key];
  if (!Array.isArray(data)) data = [data];

  const slidesHTML = data.map(item => `
    <div class="swiper-slide">
                                <div class=" flex h-max lg:flex-row flex-col dynamicData">
                                    <div class="grow w-auto lg:max-w-[909.67px]">
                                        <!-- image -->
                                        <div class="w-full h-full">
                                            <img src="${item.image}" alt=${item.title} class=" h-full w-full object-cover dynamic-image">
                                        </div>
                                    </div>
                                    <!-- data -->
                                    <div class=" bg-no-repeat bg-cover lg:w-[331.18px] h-auto flex flex-col gap-[21.97px] pt-[29.67px] pb-[15px] items-start lg:items-center"
                                        style="background-image: var(--signature_residance-r-BG);">
                                        <div
                                            class="w-full lg:w-full h-full flex flex-col items-center sm:items-start lg:items-center justify-center gap-[22.32px]">
                                            <h3 id="dynamic-title"
                                                class="px-[12px] font-jost text-center sm:text-start font-medium text-[28px] lg:px-[18.2px] leading-[127%] tracking-[3%] space-y-[3.8px] text-white">
                                                ${item.title} </h3>
                                            <div
                                                class="w-full flex flex-col gap-[22.32px] items-center justify-center">
                                                <div class="w-full h-max bg-white flex flex-col">
                                                    <div
                                                        class="w-full h-[47.3px] py-[13.64px] px-[8.5px] flex gap-[11.88px] items-center justify-start shadow-[0px_3.1px_3.1px_0px_#00000040]">
                                                        <figure
                                                            class="w-[22.25px] h-[22.25px] flex items-center justify-center">
                                                            <img src="./mediaFiles/Home page/Counter number/signature_Residance/Area_icon.png"
                                                                alt="Area icon" class="w-[22.25px] h-[22.25px]">
                                                        </figure>

                                                        <p id="dynamic-area"
                                                            class="font-jost font-semibold text-[17px] leading-[100%] -tracking-[2%] text-[#003253]">
                                                            Area: ${item.area}</p>
                                                    </div>
                                                    <div
                                                        class="w-full h-[47.3px] flex gap-[11.88px] px-[8.5px] items-center justify-start border-b border-[#CACACA4D]">
                                                        <figure
                                                            class="w-[22.25px] h-[22.25px] flex items-center justify-center">
                                                            <img src="./mediaFiles/Home page/Counter number/signature_Residance/Tower_icon.png"
                                                                alt="Tower icon" class="w-[22.25px] h-[22.25px]">
                                                        </figure>
                                                        <p id="dynamic-tower"
                                                            class="font-jost font-normal text-[17px] leading-[100%] -tracking-[2%] text-[#003253] capitalize">
                                                            Tower: ${item.tower}</p>
                                                    </div>
                                                    <div
                                                        class="w-full h-[47.3px] flex gap-[11.88px] px-[8.5px] items-center justify-start border-b border-[#CACACA4D]">
                                                        <figure
                                                            class="w-[22.25px] h-[22.25px] flex items-center justify-center">
                                                            <img src="./mediaFiles/Home page/Counter number/signature_Residance/status_icon.png"
                                                                alt="Status icon" class="w-[22.25px] h-[22.25px]">
                                                        </figure>
                                                        <p id="dynamic-status"
                                                            class="font-jost font-normal text-[17px] leading-[100%] -tracking-[2%] text-[#003253] capitalize">
                                                            Status: ${item.status}</p>
                                                    </div>
                                                    <div
                                                        class="w-full h-[47.3px] flex gap-[11.88px] px-[8.5px] items-center justify-start border-b border-[#CACACA4D]">
                                                        <figure
                                                            class="w-[22.25px] h-[22.25px] flex items-center justify-center">
                                                            <img src="./mediaFiles/Home page/Counter number/signature_Residance/key_icon.png"
                                                                alt="Key icon" class="w-[11.9px] h-[23.98px]">
                                                        </figure>

                                                        <p id="dynamic-handover"
                                                            class="font-jost font-normal text-[17px] leading-[100%] -tracking-[2%] text-[#003253] capitalize">
                                                            Expected Handover: ${item.handover}</p>
                                                    </div>
                                                    <div
                                                        class="w-full h-[47.3px] flex gap-[11.88px] px-[8.5px] items-center justify-start border-b border-[#CACACA4D]">
                                                        <figure
                                                            class="w-[22.25px] h-[22.25px] flex items-center justify-center">
                                                            <img src="./mediaFiles/Home page/Counter number/signature_Residance/furnishing_icon.png"
                                                                alt="furnishing_icon" class="w-[25px] h-[14.53px]">
                                                        </figure>

                                                        <p id="dynamic-furnishing"
                                                            class="font-jost font-normal text-[17px] leading-[100%] -tracking-[2%] text-[#003253] capitalize">
                                                            Furnishing: ${item.furnishing}</p>
                                                    </div>
                                                    <div
                                                        class="w-full h-[47.3px] flex gap-[11.88px] px-[8.5px] items-center justify-start border-b border-[#CACACA4D]">
                                                        <figure
                                                            class="w-[22.25px] h-[22.25px] flex items-center justify-center">
                                                            <img src="./mediaFiles/Home page/Counter number/signature_Residance/rupees_icon.png"
                                                                alt="rupees_icon" class="w-[12.68px] h-[19.2px]">
                                                        </figure>

                                                        <p id="dynamic-availability"
                                                            class="font-jost font-normal text-[17px] leading-[100%] -tracking-[2%] text-[#003253] capitalize">
                                                            Availability: ${item.availability}</p>
                                                    </div>

                                                </div>
                                                <div class="w-max h-auto py-[5px] flex-col items-center">
                                                    <!-- Swiper Buttons -->
                                                    <div class="flex gap-[13.91px] items-center">
                                                        <button
                                                            class="cursor-pointer w-[133.24px] h-[39.62px] text-[#173F63] font-jost font-medium text-[13.08px] leading-[19.62px] uppercase border bg-white">
                                                            Enquire Now
                                                        </button>
                                                        <button
                                                            class="cursor-pointer w-[133.24px] h-[39.62px] text-white font-jost font-medium text-[13.08px] leading-[19.62px] uppercase border bg-transparent flex items-center justify-center gap-[6.54px]">
                                                            <img src="./mediaFiles/Home page/Counter number/ri_download-line.png"
                                                                alt="download_icon" class="w-[18px] h-[18px]">
                                                            Floor Plan
                                                        </button>
                                                    </div>
                                                    <div class="hidden lg:block ">
                                                        <div
                                                            class="flex py-[27.26px] items-center gap-[21.26px] carousel-controls">
                                                            <button type="button"
                                                                class=" left_arrow_btn SignatureResidence-custom-prev-button cursor-pointer w-[35.89px] h-[35.89px] border border-white rounded-full">
                                                                <i class="fa-solid fa-arrow-left text-white"></i>
                                                            </button>
                                                            <button type="button"
                                                                class="right_arrow_btn SignatureResidence-custom-next-button cursor-pointer  w-[35.89px] h-[35.89px] border border-white rounded-full">
                                                                <i class="fa-solid fa-arrow-right text-white"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  `).join('');

  if (swiperInstance) swiperInstance.destroy(true, true);
  swiperWrapper.innerHTML = slidesHTML;

  function initSwiper() {
    const totalSlides = document.querySelectorAll('.SignatureResidenceSwiper .swiper-slide').length;

    swiperInstance = new Swiper(".SignatureResidenceSwiper", {
      loop: totalSlides > 1,           // loop only if more than 1 slide            // always center the active slide
      spaceBetween: 20,
      slidesPerView: totalSlides > 1 ? 1.1 : 1,  // if more than 1 slide, use 1.1
      autoplay: totalSlides > 1 ? { delay: 3000, disableOnInteraction: false } : false,
      breakpoints: totalSlides > 1 ? {
        640: { slidesPerView: 1.1 },
        730: { slidesPerView: 1.7 },
        1024: { slidesPerView: 2.3 },
      } : {},
    });
  }
  initSwiper();
}

// Buttons click
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('bg-[#003253]', 'text-white'));
    buttons.forEach(b => b.classList.add('text-[#003253]', 'bg-transparent'));

    btn.classList.add('bg-[#003253]', 'text-white');
    btn.classList.remove('text-[#003253]', 'bg-transparent');

    updateSlides(btn.id);
  });
});

// Initialize first view
updateSlides('3BHKbtnmobile');






// Know More Constructions Milestone
const conTructionMileStoneBtn = document.querySelectorAll('.conTructionMileStoneBtn');
const ConsTructionProgressList = document.querySelectorAll('.ConsTructionProgressList');

// Set one section to be open by default on page load
const defaultIndex = 0;
if (ConsTructionProgressList[defaultIndex]) {
  ConsTructionProgressList[defaultIndex].classList.remove('hidden');
  conTructionMileStoneBtn[defaultIndex].classList.add('rotate-180');
}

conTructionMileStoneBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {

    // Check if the section is currently visible before toggling
    const isCurrentlyVisible = !ConsTructionProgressList[index].classList.contains('hidden');

    // Close all other sections
    ConsTructionProgressList.forEach((content, i) => {
      if (i !== index) {
        content.classList.add('hidden');
        conTructionMileStoneBtn[i].classList.remove('rotate-180');
      }
    });

    // Toggle the visibility of the current section
    ConsTructionProgressList[index].classList.toggle('hidden');
    btn.classList.toggle('rotate-180');

    // Check if the section was just closed
    if (isCurrentlyVisible) {
      // Find the index of the next button, wrapping around if at the end
      const nextIndex = (index + 1) % conTructionMileStoneBtn.length;

      // Trigger a click on the next button to open the next section
      conTructionMileStoneBtn[nextIndex].click();
    }
  });
});


// Testimonial Swiper
var testimonialSwiper = new Swiper(".TestimonialSwiper", {
  loop: true,
  freeMode: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  breakpoints: {
    640: {
      slidesPerView: 1.7,
    },
    730: {
      slidesPerView: 2.3,
    },
  }
});


// FAQS
const faqButtons = document.querySelectorAll('.FAQButton');
const faqAnswers = document.querySelectorAll('.MakeVisibleOnclick');

// Default open first FAQ
const defaultFAQIndex = 0;
if (faqAnswers[defaultFAQIndex]) {
  faqAnswers[defaultFAQIndex].classList.remove('hidden');
  const icon = faqButtons[defaultFAQIndex].querySelector("i");
  icon.classList.replace("fa-plus", "fa-minus");
  icon.classList.replace("fa-angle-down", "fa-angle-up");
}

faqButtons.forEach((btn, index) => {
  const parent = btn.parentElement;
  parent.addEventListener('click', () => {
    const isCurrentlyVisible = !faqAnswers[index].classList.contains('hidden');

    // Close all other FAQs
    faqAnswers.forEach((answer, i) => {
      if (i !== index) {
        answer.classList.add('hidden');
        const otherIcon = faqButtons[i].querySelector("i");
        otherIcon.classList.replace("fa-minus", "fa-plus");
        otherIcon.classList.replace("fa-angle-up", "fa-angle-down");
      }
    });

    // Toggle current FAQ
    faqAnswers[index].classList.toggle('hidden');
    const currentIcon = btn.querySelector("i");

    faqAnswers[index].classList.contains("hidden")
      ? (currentIcon.classList.replace("fa-minus", "fa-plus"),
        currentIcon.classList.replace("fa-angle-up", "fa-angle-down"))
      : (currentIcon.classList.replace("fa-plus", "fa-minus"),
        currentIcon.classList.replace("fa-angle-down", "fa-angle-up"));

    // If closed → auto open next
    if (isCurrentlyVisible) {
      const nextIndex = (index + 1) % faqButtons.length;
      faqButtons[nextIndex].click();
    }
  });
});


// Location - why pinnacle Mohali
var featureSwiper = new Swiper(".featureSwiper", {
  loop: true,
  freeMode: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1.1,
  breakpoints: {
    640: {
      slidesPerView: 1.7,
    },
    730: {
      slidesPerView: 2.3,
    },
  }
});

const locationBtn = document.getElementById("LocationMap");
const googleBtn = document.getElementById("googleMap");
const locationImages = document.getElementById("locationImages");
const googleFrame = document.getElementById("googleMapFrame");

// Default: show location map, hide Google Map
if (locationImages || googleFrame) {
  locationImages.style.display = "block";
  googleFrame.style.display = "none";
}

// When clicking "Location Map"
if (locationBtn) {
  locationBtn.addEventListener("click", () => {
    locationImages.style.display = "block";
    googleFrame.style.display = "none";
    locationBtn.classList.add("bg-[var(--main-blue)]", "text-white");
    googleBtn.classList.remove("bg-[var(--main-blue)]", "text-white");
  });
}

// When clicking "Google Map"
if (googleBtn) {
  googleBtn.addEventListener("click", () => {
    locationImages.style.display = "none";
    googleFrame.style.display = "block";
    googleBtn.classList.add("bg-[var(--main-blue)]", "text-white");
    locationBtn.classList.remove("bg-[var(--main-blue)]", "text-white");
  });
}

// Location - DestinationSwiper

var DestinationSwiper = new Swiper(".DestinationSwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1.1,
  breakpoints: {
    640: {
      slidesPerView: 2.7, // show part of next slide
    },
    1024: {
      slidesPerView: 4.3, // for larger screens
    },
  }
});

// jquery country code selection
if (typeof $ !== "undefined") {
  $(document).ready(function () {
    const inputs = document.querySelectorAll(".mobile_code");

    inputs.forEach((input) => {
      window.intlTelInput(input, {
        separateDialCode: true,
        initialCountry: "in",
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Image Array
  const imageArray = [
    "./mediaFiles/Location/highway_circle.webp",      // default
    "./mediaFiles/Location/OverBridge.webp",
    "./mediaFiles/Location/highway_infrastructure.webp",
    "./mediaFiles/Location/investment1.svg",
  ];

  // Target image
  const mainImage = document.querySelector(".dynamicimageonclickchange img");

  // Set default image
  let currentIndex = 0;
  if (mainImage) {
    mainImage.src = imageArray[currentIndex];
  }
  // Get all clickable icons
  const changeBtns = document.querySelectorAll(".onclickchange-image");

  // Add click listener to each
  changeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      mainImage.src = imageArray[index] || imageArray[0]; // fallback if index not found
    });
  });
});


// price--page

// data 
const PricingOverViewData = {
  Heading: [
    '4 BHK Apartments',
    '3 BHK Apartments',
    '5 BHK Apartments',
    'Penthouse'
  ],
  InnerBtn: {
    '4BHK': ['Zenith Tower', 'Crest Tower', 'Prime Tower'],
    '3BHK': ['Apex Tower'],
    '5BHK': ['Everest Tower', 'Crown Tower'],
    'Penthouse': [
      'Zenith Tower',
      'Crest Tower',
      'Prime Tower',
      'Apex Tower',
      'Everest Tower',
      'Crown Tower'
    ]
  },
  mainData: {
    '4BHK': {
      'Zenith Tower': {
        image: './mediaFiles/Price/guest-room.webp',
        tag: {
          arrowBg: 'border-l-[#876025]',
          bgcolor: 'bg-[#C48B39]',
          tagName: 'Luxury Zone',
          tagIcon: './mediaFiles/Price/ion_diamond-sharp.webp',

        },
        Headline: '4 BHK – Zenith Tower',
        SuperArea: '2,600-2,800 sq. ft.',
        Status: 'Now Booking',
        HandoverDate: 'December 2028',
        Furnishing: 'SEMI FURNISHED'
      },
      'Crest Tower': {
        image: './mediaFiles/Price/bedRoom.webp',
        tag: {
          arrowBg: 'border-l-[#2E5013]',
          bgcolor: 'bg-[#3E6A19]',
          tagName: 'Best Seller',
          tagIcon: './mediaFiles/Price/best_seller.webp'
        },
        Headline: '4 BHK – Crest Tower',
        SuperArea: '2,600-2,800 sq. ft.',
        Status: 'Now Booking',
        HandoverDate: 'December 2028',
        Furnishing: 'SEMI FURNISHED'
      },
      'Prime Tower': {
        image: './mediaFiles/Price/dinning_table.webp',
        tag: {
          arrowBg: 'border-l-[#552424]',
          bgcolor: 'bg-[#833E3E]',
          tagName: 'Launching Soon',
          tagIcon: './mediaFiles/Price/rocket_icon.webp'
        },
        Headline: '4 BHK – Prime Tower (Compact)',
        SuperArea: '2,450 sq. ft.',
        Status: 'To Be Announced',
        HandoverDate: 'To Be Announced',
        Furnishing: 'SEMI FURNISHED'
      },
    },
    '3BHK': {
      'Apex Tower': {
        image: './mediaFiles/Price/Apex-Tower-BedRoom.svg',
        tag: {
          arrowBg: 'border-l-[#0F2B43]',
          bgcolor: 'bg-[#173F63]',
          tagName: 'Coming Soon',
          tagIcon: './mediaFiles/Price/comming_soon_icon.webp',

        },
        Headline: '3 BHK – Apex Tower',
        SuperArea: '2,400–2,650 sq.ft',
        Status: 'Under Construction',
        HandoverDate: 'December 2028',
        Furnishing: 'SEMI FURNISHED'
      }
    },
    '5BHK': {
      'Everest Tower': {
        image: './mediaFiles/Price/drawing-rrom.webp',
        tag: {
          arrowBg: 'border-l-[#50402D]',
          bgcolor: 'bg-[#6B563C]',
          tagName: 'Limited Inventory',
          tagIcon: './mediaFiles/Price/check.webp',

        },
        Headline: '5 BHK – Everest Tower',
        SuperArea: '3,400+ sq. ft.',
        Status: 'Now Booking',
        HandoverDate: 'December 2028',
        Furnishing: 'SEMI FURNISHED'
      },
      'Crown Tower': {
        image: './mediaFiles/Price/drawing-rrom.webp',
        tag: {
          arrowBg: 'border-l-[#4D0A4B]',
          bgcolor: 'bg-[#821D7F]',
          tagName: 'Iconic Tower',
          tagIcon: './mediaFiles/Price/iconic_icon.webp',

        },
        Headline: '5 BHK – Crown Tower (Signature Standalone)',
        SuperArea: 'To Be Announced',
        Status: 'Launching Soon',
        HandoverDate: 'To Be Announced',
        Furnishing: 'To Be Announced'
      }
    },
    'Penthouse': {
      'Zenith Tower': {
        image: './mediaFiles/Price/guest-room.webp',
        tag: {
          arrowBg: 'border-l-[#876025]',
          bgcolor: 'bg-[#C48B39]',
          tagName: 'Luxury Zone',
          tagIcon: './mediaFiles/Price/ion_diamond-sharp.webp',

        },
        Headline: '4 BHK – Zenith Tower',
        SuperArea: '2,600-2,800 sq. ft.',
        Status: 'Now Booking',
        HandoverDate: 'December 2028',
        Furnishing: 'SEMI FURNISHED'
      },
      'Crest Tower': {
        image: './mediaFiles/Price/bedRoom.webp',
        tag: {
          arrowBg: 'border-l-[#2E5013]',
          bgcolor: 'bg-[#3E6A19]',
          tagName: 'Best Seller',
          tagIcon: './mediaFiles/Price/best_seller.webp'
        },
        Headline: '4 BHK – Crest Tower',
        SuperArea: '2,600-2,800 sq. ft.',
        Status: 'Now Booking',
        HandoverDate: 'December 2028',
        Furnishing: 'SEMI FURNISHED'
      },
      'Prime Tower': {
        image: './mediaFiles/Price/dinning_table.webp',
        tag: {
          arrowBg: 'border-l-[#552424]',
          bgcolor: 'bg-[#833E3E]',
          tagName: 'Launching Soon',
          tagIcon: './mediaFiles/Price/rocket_icon.webp'
        },
        Headline: '4 BHK – Prime Tower (Compact)',
        SuperArea: '2,450 sq. ft.',
        Status: 'To Be Announced',
        HandoverDate: 'To Be Announced',
        Furnishing: 'SEMI FURNISHED'
      },
      'Apex Tower': {
        image: './mediaFiles/Price/Apex-Tower-BedRoom.svg',
        tag: {
          arrowBg: 'border-l-[#0F2B43]',
          bgcolor: 'bg-[#173F63]',
          tagName: 'Coming Soon',
          tagIcon: './mediaFiles/Price/comming_soon_icon.webp',

        },
        Headline: '3 BHK – Apex Tower',
        SuperArea: '2,400–2,650 sq.ft',
        Status: 'Under Construction',
        HandoverDate: 'December 2028',
        Furnishing: 'SEMI FURNISHED'
      },
      'Everest Tower': {
        image: './mediaFiles/Price/drawing-rrom.webp',
        tag: {
          arrowBg: 'border-l-[#50402D]',
          bgcolor: 'bg-[#6B563C]',
          tagName: 'Limited Inventory',
          tagIcon: './mediaFiles/Price/check.webp',

        },
        Headline: '5 BHK – Everest Tower',
        SuperArea: '3,400+ sq. ft.',
        Status: 'Now Booking',
        HandoverDate: 'December 2028',
        Furnishing: 'SEMI FURNISHED'
      },
      'Crown Tower': {
        image: './mediaFiles/Price/master-bedroom.webp',
        tag: {
          arrowBg: 'border-l-[#876025]',
          bgcolor: 'bg-[#B48A0A]',
          tagName: 'Ultra-Luxury',
          tagIcon: './mediaFiles/Price/crown_icon.webp',
        },

        Headline: 'Sky Villas – Penthouse Duplex (All Towers)',
        SuperArea: 'To Be Announced',
        Status: 'Launching Soon',
        HandoverDate: 'To Be Announced',
        Furnishing: 'To Be Announced'
      }
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const Apartmentbtn = document.querySelectorAll('.Apartmentbtn');
  const dynamicheader = document.querySelector('.dynamicheader');
  const dynamicbuttoninnerbtn = document.querySelector('.dynamicbuttoninnerbtn');
  const desktopMainData = document.querySelector('.desktopMainData');
  const keys = Object.keys(PricingOverViewData.InnerBtn);

  let currentApartmentType = keys[0]; // default active type

  // Render tower buttons
  function renderButtons(index) {
    const key = keys[index];
    if (!key) return;
    currentApartmentType = key;
    if (dynamicheader) {
      dynamicheader.textContent = PricingOverViewData?.Heading[index] || '';
    }
    if (dynamicbuttoninnerbtn) {
      dynamicbuttoninnerbtn.innerHTML = '';
    }
    // Inside renderButtons
    PricingOverViewData.InnerBtn[key].forEach((tower, i) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'w-max xl:w-[210px] flex flex-col items-center justify-center group tower-card';

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'innerBtn cursor-pointer font-jost text-[17px] md:text-[20px] font-medium leading-[150%] text-[#003253]';
      btn.textContent = tower;
      btn.dataset.apartment = key;
      btn.dataset.tower = tower;

      const line = document.createElement('div');
      line.className = 'w-full bg_gradient_line h-[3px] bg-default';

      wrapper.appendChild(btn);
      wrapper.appendChild(line);
      if (dynamicbuttoninnerbtn) {
        dynamicbuttoninnerbtn.appendChild(wrapper);
      }
      // 👇 ADD CLICK HANDLER
      btn.addEventListener('click', () => {
        const apartmentType = btn.dataset.apartment;
        const towerName = btn.dataset.tower;
        const data = PricingOverViewData.mainData?.[apartmentType]?.[towerName];

        // set active states
        setActiveInnerButton(btn);
        setActiveLineWrapper(wrapper);

        // render both
        renderTowerData(apartmentType, towerName);
        renderMobileSlider(apartmentType, towerName, data);
      });

      // 👇 by default load first tower of category
      if (i === 0) {
        const data = PricingOverViewData.mainData?.[key]?.[tower];
        setActiveInnerButton(btn);
        setActiveLineWrapper(wrapper);
        renderTowerData(key, tower);
        renderMobileSlider(key, tower, data);
      }
    });

  }

  function setActiveLineWrapper(wrapper) {
    if (dynamicbuttoninnerbtn) {
      dynamicbuttoninnerbtn.querySelectorAll('.bg_gradient_line').forEach(l => {
        l.classList.remove('bg-gradient-custom');
        l.classList.add('bg-default');
      });
    }
    if (!wrapper) return;
    const line = wrapper.querySelector('.bg_gradient_line');
    if (line) {
      line.classList.remove('bg-default');
      line.classList.add('bg-gradient-custom');
    }
  }

  function setActiveInnerButton(btn) {
    if (dynamicbuttoninnerbtn) {
      dynamicbuttoninnerbtn.querySelectorAll('.innerBtn').forEach(b => b.classList.remove('inner-active'));
    }
    if (btn) btn.classList.add('inner-active');
  }

  function setActiveLineIndex(i) {
    if (!dynamicbuttoninnerbtn) {
      return;
    }

    const wrapper = dynamicbuttoninnerbtn.children[i];
    if (wrapper) setActiveLineWrapper(wrapper);
  }

  // 👇 Data render function
  function renderTowerData(apartmentType, towerName) {
    const data = PricingOverViewData.mainData?.[apartmentType]?.[towerName];
    if (data) {
      if (desktopMainData) {
        desktopMainData.innerHTML = `
     <figure class="w-full md:w-[40%] h-[-webkit-fill-available]">
                                <img src="${data.image}" alt="${towerName}"
                                    class="w-full h-full object-fill object-center">
                            </figure>
                            <div class="w-full md:w-[60%] px-[22px] py-[70px] h-full border border-[#EDECEC] bg-cover bg-center relative flex flex-col items-start gap-[42px]"
                                style="background-image: var(--paper-crash-decorative-bg);">
                                <!-- Tag -->
                                <div class="absolute -right-[13.5px] top-[5.66px]">
                                    <div
                                        class="flex items-center justify-center gap-[6.91px] px-[13.5px] py-[10.16px] ${data.tag.bgcolor} relative">
                                        <!-- decorative -->
                                        <div class="absolute -z-[1] -top-[9px] right-0 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] ${data.tag.arrowBg}"></div>
                                        <!-- content -->
                                        <img src="${data.tag.tagIcon}" alt="${data.tag.tagName}"
                                            class="w-[16px] h-[16px] object-cover object-center">
                                        <span class="text-white font-jost text-[13.825px] font-medium uppercase">${data.tag.tagName}</span>
                                        <!-- decorative -->
                                        <div class="absolute -z-[1] -bottom-[9px] right-0 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] ${data.tag.arrowBg}">
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col items-start gap-[17.91px]">
                                    <h3
                                        class="font-medium leading-[127%] tracking-[0.75px] capitalize text-[25px] text-[#003253]">${data.Headline}</h3>
                                    <div class="grid grid-cols-2 gap-y-[17.26px]">
                                        <div class="flex items-center justify-center gap-[15.47px]">
                                            <img src="./mediaFiles/Price/area_icon.webp" alt="area_icon"
                                                class="w-[25.296px] h-[25.296px]">
                                            <div class="flex flex-col w-full">
                                                <span
                                                    class="font-jost text-[14px] font-medium capitalize text-[#003253]">Super
                                                    Area* </span>
                                                <span
                                                    class="text-[#474A49] font-jost text-[20px] font-medium">${data.SuperArea}</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-center gap-[15.47px] ">
                                            <img src="./mediaFiles/Price/status_icon.webp" alt="status_icon"
                                                class="w-[31px] h-[30px]">
                                            <div class="flex flex-col w-full">
                                                <span
                                                    class="font-jost text-[14px] font-medium capitalize text-[#003253]">Status</span>
                                                <span
                                                    class="text-[#474A49] font-jost text-[20px] font-medium xl:text-nowrap">${data.Status}</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-center gap-[15.47px]">
                                            <img src="./mediaFiles/Price/key.webp" alt="key_icon"
                                                class="w-[12.679px] h-[25.551px]">
                                            <div class="flex flex-col w-full">
                                                <span
                                                    class="font-jost text-[14px] font-medium capitalize text-[#003253]">Handover
                                                    Date</span>
                                                <span class="text-[#474A49] font-jost text-[20px] font-medium">${data.HandoverDate}</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-center gap-[15.47px] ">
                                            <img src="./mediaFiles/Price/furnishing_icon.webp" alt="furnishing_icon"
                                                class="w-[35.359px] h-[24.044px]">
                                            <div class="flex flex-col w-full">
                                                <span
                                                    class="font-jost text-[14px] font-medium capitalize text-[#003253]">Furnishing
                                                </span>
                                                <span
                                                    class="text-[#474A49] font-jost text-[20px] font-medium text-nowrap">${data.Furnishing}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <button
                                        class="px-[20.74px] py-[10.34px] flex items-center gap-[10.37px] justify-center border border-[#FFC267] shadow-[0_0_4px_0_rgba(0,0,0,0.25)]">
                                        <img src="./mediaFiles/Price/lock.webp" alt="lock_icon"
                                            class="w-[13.825px] h-[17.282px]">
                                        <span
                                            class="uppercase font-jost text-[#003253] text-[13.825px] font-medium">Unlock
                                            Price</span>
                                    </button>
                                </div>
                                <!-- decorative items-->
                                <img src="./mediaFiles/Home page/Counter number/slider 01145/The Pinnacle PPT short 3.png"
                                    alt="decoratives"
                                    class="w-[45.1px] h-[48.86px] sm:w-[112.27px] sm:h-[121.67px]  lg:w-[45.1px] lg:h-[48.86px] xl:w-[112.27px] xl:h-[121.67px] absolute -right-[12px] bottom-0 z-10">
                            </div>
      `;
      }
    }
  }

  function renderMobileSlider(apartmentType, towerName, data) {
    const swiperWrapper = document.querySelector('.priceaprtmentSlider .swiper-wrapper');
    if (swiperWrapper) {
      swiperWrapper.innerHTML = ''; // clear old slides if any
    }
    // Create slide dynamically
    const slide = document.createElement('div');
    slide.className = 'swiper-slide group';

    slide.innerHTML = `
    <div
                                        class="w-full min-h-[385.77px] flex flex-col md:flex-row items-start justify-center">
                                        <figure class="w-full md:w-[40%] h-[-webkit-fill-available]">
                                            <img src="${data.image}" alt="${towerName}"
                                                class="w-full h-full object-fill object-center">
                                        </figure>
                                        <div class="w-full md:w-[60%] px-[22px] py-[70px] h-full border border-[#EDECEC] bg-cover bg-center relative flex flex-col items-start gap-[42px]"
                                            style="background-image: var(--paper-crash-decorative-bg);">
                                            <!-- Tag -->
                                            <div class="absolute -right-[13.5px] top-[5.66px]">
                                                <div
                                                    class="flex items-center justify-center gap-[6.91px] px-[13.5px] py-[10.16px] ${data.tag.bgcolor} relative">
                                                    <!-- decorative -->
                                                    <div
                                                        class="absolute -z-[1] -top-[9px] right-0 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] ${data.tag.arrowBg}">
                                                    </div>
                                                    <!-- content -->
                                                    <img src="${data.tag.tagIcon}" alt="${data.tag.tagName}"
                                                        class="w-[16px] h-[16px] object-cover object-center">
                                                    <span
                                                        class="text-white font-jost text-[13.825px] font-medium uppercase">${data.tag.tagName}</span>
                                                    <!-- decorative -->
                                                    <div
                                                        class="absolute -z-[1] -bottom-[9px] right-0 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] ${data.tag.arrowBg}">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col items-start gap-[17.91px]">
                                                <h3
                                                    class="font-medium leading-[127%] tracking-[0.75px] capitalize text-[21px] text-[#003253]">${data.Headline}</h3>
                                                <div class="grid grid-cols-2 gap-y-[17.26px]">
                                                    <div class="flex items-center justify-center gap-[15.47px]">
                                                        <img src="./mediaFiles/Price/area_icon.webp" alt="area_icon"
                                                            class="w-[17.55px] h-[17.55px]">
                                                        <div class="flex flex-col w-full">
                                                            <span
                                                                class="font-jost text-[11.5px] font-medium capitalize text-[#003253]">Super
                                                                Area* </span>
                                                            <span
                                                                class="text-[#474A49] font-jost text-[16px] font-medium">${data.SuperArea}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center justify-center gap-[15.47px] ">
                                                        <img src="./mediaFiles/Price/status_icon.webp" alt="status_icon"
                                                            class="w-[19.391px] h-[18.313px]">
                                                        <div class="flex flex-col w-full">
                                                            <span
                                                                class="font-jost text-[11.5px] font-medium capitalize text-[#003253]">Status</span>
                                                            <span
                                                                class="text-[#474A49] font-jost text-[16px] font-medium xl:text-nowrap">${data.Status}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center justify-center gap-[15.47px]">
                                                        <img src="./mediaFiles/Price/key.webp" alt="key_icon"
                                                            class="w-[10.415px] h-[20.989px]">
                                                        <div class="flex flex-col w-full">
                                                            <span
                                                                class="font-jost text-[11.5px] font-medium capitalize text-[#003253]">Handover
                                                                Date</span>
                                                            <span
                                                                class="text-[#474A49] font-jost text-[16px] font-medium">${data.HandoverDate}</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center justify-center gap-[15.47px] ">
                                                        <img src="./mediaFiles/Price/furnishing_icon.webp"
                                                            alt="furnishing_icon" class="w-[25.048px] h-[17.033px]">
                                                        <div class="flex flex-col w-full">
                                                            <span
                                                                class="font-jost text-[11.5px] font-medium capitalize text-[#003253]">Furnishing
                                                            </span>
                                                            <span
                                                                class="text-[#474A49] font-jost text-[16px] font-medium text-nowrap">${data.Furnishing}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="">
                                                <button
                                                    class="px-[20.74px] py-[10.34px] flex items-center gap-[10.37px] justify-center border border-[#FFC267] shadow-[0_0_4px_0_rgba(0,0,0,0.25)]">
                                                    <img src="./mediaFiles/Price/lock.webp" alt="lock_icon"
                                                        class="w-[13.825px] h-[17.282px]">
                                                    <span
                                                        class="uppercase font-jost text-[#003253] text-[13.825px] font-medium">Unlock
                                                        Price</span>
                                                </button>
                                            </div>
                                            <!-- decorative items-->
                                            <img src="./mediaFiles/Home page/Counter number/slider 01145/The Pinnacle PPT short 3.png"
                                                alt="decoratives"
                                                class="w-[45.1px] h-[48.86px] sm:w-[112.27px] sm:h-[121.67px]  lg:w-[45.1px] lg:h-[48.86px] xl:w-[112.27px] xl:h-[121.67px] absolute -right-[12px] bottom-0 z-10">
                                        </div>
                                    </div>
  `;

    if (swiperWrapper) {
      swiperWrapper.appendChild(slide);
    }
    // Re-init Swiper after DOM update
    if (window.priceaprtmentSlider) {
      window.priceaprtmentSlider.update();
    }
  }


  // Initial load
  renderButtons(0);
  if (Apartmentbtn[0]) {
    Apartmentbtn[0].classList.add('activeBtn');
  }
  setTimeout(() => {
    setActiveLineIndex(0);

    // 👇 First Apartment + First Tower ka data show kare
    if (dynamicbuttoninnerbtn) {
      const firstBtn = dynamicbuttoninnerbtn.querySelector('.innerBtn');

      if (firstBtn) {
        setActiveInnerButton(firstBtn);
        renderTowerData(firstBtn.dataset.apartment, firstBtn.dataset.tower);
      }
    }
  }, 0);


  // Apartment Tab Click
  Apartmentbtn.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      Apartmentbtn.forEach(b => b.classList.remove('activeBtn'));
      tab.classList.add('activeBtn');
      renderButtons(index);

      setTimeout(() => {
        setActiveLineIndex(0);

        const firstBtn = dynamicbuttoninnerbtn.querySelector('.innerBtn');
        if (firstBtn) {
          setActiveInnerButton(firstBtn);
          renderTowerData(firstBtn.dataset.apartment, firstBtn.dataset.tower);
        }
      }, 0);
    });
  });

  // Tower Click
  if (dynamicbuttoninnerbtn) {
    dynamicbuttoninnerbtn.addEventListener('click', (e) => {
      const clickedBtn = e.target.closest('.innerBtn');
      if (!clickedBtn) return;

      const wrapper = clickedBtn.closest('.group');
      setActiveLineWrapper(wrapper);
      setActiveInnerButton(clickedBtn);

      renderTowerData(clickedBtn.dataset.apartment, clickedBtn.dataset.tower);
    });
  }
});


var priceaprtmentSlider = new Swiper(".priceaprtmentSlider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1.1,
});


var DestinationSwiper = new Swiper(".ApprovedBankSwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 3.5,
  breakpoints: {
    640: {
      slidesPerView: 5, // show part of next slide
    },
  }
});

var BrowseAppartment = new Swiper(".BrowseApartmentswiper", {
  loop: true,
  spaceBetween: 5,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 2.1,
  breakpoints: {
    500: {
      slidesPerView: 2.5, // show part of next slide
    },
  }
});

var TowerLayoutSwiper = new Swiper(".TowerLayoutSwiper", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1.2,
});


// lush open space mobile banner

const lushopenspace = new Swiper(".lushopenspace", {
  loop: false,
  effect: "scroll",
  navigation: {
    nextEl: ".custom-button-next2",
    prevEl: ".custom-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination-progress2",
    type: "progressbar",
  },
});

// fraction text update
const lushopenspaceFraction = document.querySelector(".Lush-Open-Spaces-fraction");

// pehle hi set kar do
if (lushopenspace && lushopenspace.slides && lushopenspaceFraction) {
  lushopenspaceFraction.textContent = `${lushopenspace.realIndex + 1} / ${lushopenspace.slides.length}`;
}

lushopenspace.on("slideChange", () => {
  lushopenspaceFraction.textContent = `${lushopenspace.realIndex + 1} / ${lushopenspace.slides.length}`;
});


var ElevatingAmenitiesSwiper = new Swiper(".ElevatingAmenitiesSwiper", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1.3,
  breakpoints: {
    500: {
      slidesPerView: 2.5, // show part of next slide
    },
    768: {
      slidesPerView: 3.3, // for larger screens
    },
    1280: {
      slidesPerView: 4.3, // for larger screens
    },
  }

});

// Gallery-data and rendering logic
// 🔹 Data Arrays
const contentData = [
  { title: "Project Walkthrough – The Pinnacle Mohali", desc: "Watch a guided visual tour of the lifestyle, architecture, and ambience of our premium residences." },
  { title: "Step Inside Our Sample Flats", desc: "Get a first-hand look at luxurious interiors, layouts, and design aesthetics of your future home." },
  { title: "The Pinnacle in Pictures", desc: "Browse curated images of interiors, exteriors, amenities, and landscapes of the development." },
  { title: "Construction Progress & Site Updates", desc: "See how The Pinnacle Mohali is shaping up — floor-by-floor, tower-by-tower." }
];

const galleryImages = {
  1: [
    { src: "./mediaFiles/Gallery/Sample-flat/1.webp", classes: "w-full h-auto md:h-[600px] aspect-video col-span-2 md:col-span-3" },
    { src: "./mediaFiles/Gallery/Sample-flat/2.svg", classes: "w-full h-auto" },
    { src: "./mediaFiles/Gallery/Sample-flat/3.webp", classes: "w-full h-auto" },
    { src: "./mediaFiles/Gallery/Sample-flat/4.webp", classes: "w-full h-auto" },
    { src: "./mediaFiles/Gallery/Sample-flat/5.webp", classes: "w-full h-full md:row-span-2 md:aspect-square" },
    { src: "./mediaFiles/Gallery/Sample-flat/6.webp", classes: "w-full" },
    { src: "./mediaFiles/Gallery/Sample-flat/7.webp", classes: "w-full" },
    { src: "./mediaFiles/Gallery/Sample-flat/mobile.svg", classes: "w-full block md:hidden col-span-2" },
    { src: "./mediaFiles/Gallery/Sample-flat/8.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Sample-flat/9.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Sample-flat/10.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Sample-flat/11.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Sample-flat/12.webp", classes: "onclickshowmore w-full hidden md:block" }
  ],
  2: [
    { src: "./mediaFiles/Gallery/Project-gallery/1.webp", classes: "w-full h-auto md:h-[600px] aspect-video col-span-2 md:col-span-3" },
    { src: "./mediaFiles/Gallery/Project-gallery/2.svg", classes: "w-full h-auto" },
    { src: "./mediaFiles/Gallery/Project-gallery/3.svg", classes: "w-full h-auto" },
    { src: "./mediaFiles/Gallery/Project-gallery/4.svg", classes: "w-full h-auto" },
    { src: "./mediaFiles/Gallery/Project-gallery/5.webp", classes: "w-full h-full md:row-span-2 md:aspect-square" },
    { src: "./mediaFiles/Gallery/Project-gallery/6.webp", classes: "w-full" },
    { src: "./mediaFiles/Gallery/Project-gallery/7.webp", classes: "w-full" },
    { src: "./mediaFiles/Gallery/Project-gallery/8.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Project-gallery/9.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Project-gallery/10.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Project-gallery/11.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Project-gallery/12.webp", classes: "onclickshowmore w-full hidden md:block" }
  ],
  3: [
    { src: "./mediaFiles/Gallery/Construction/1.webp", classes: "w-full h-auto md:h-[600px] aspect-video col-span-2 md:col-span-3" },
    { src: "./mediaFiles/Gallery/Construction/2.svg", classes: "w-full h-auto" },
    { src: "./mediaFiles/Gallery/Construction/3.svg", classes: "w-full h-auto" },
    { src: "./mediaFiles/Gallery/Construction/4.svg", classes: "w-full h-auto" },
    { src: "./mediaFiles/Gallery/Construction/5.webp", classes: "w-full h-full md:row-span-2 md:aspect-square" },
    { src: "./mediaFiles/Gallery/Construction/6.webp", classes: "w-full" },
    { src: "./mediaFiles/Gallery/Construction/7.webp", classes: "w-full" },
    { src: "./mediaFiles/Gallery/Construction/8.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Construction/9.webp", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Construction/10.svg", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Construction/11.svg", classes: "onclickshowmore w-full hidden md:block" },
    { src: "./mediaFiles/Gallery/Construction/12.svg", classes: "onclickshowmore w-full hidden md:block" }
  ]
};

// 🔹 DOM Elements
const flowButtons = document.querySelectorAll(".flowgallerybtn");
const dynamicContent = document.querySelector("#dynamicContent");
const projectWalktrough = document.querySelector('#projectWalktrough');
const otherswalkthrough = document.querySelector('#otherswalkthrough');
const mobileButtons = document.querySelectorAll('#threeLayerButtons .btn');

// 🔹 Function to reset desktop buttons
function resetFlowButtons() {
  flowButtons.forEach(btn => {
    btn.classList.remove("bg-[#003253]", "text-white");
    btn.classList.add("bg-[#F2F2F2]", "text-[#003253]");
  });
}

// 🔹 Function to reset mobile buttons
function resetMobileButtons() {
  mobileButtons.forEach(btn => {
    btn.querySelector('.bottomlayer').style.background = '#105686';
    btn.querySelector('.middlelayer').style.background = '#08436B';
    btn.querySelector('.toplayer').style.background = '#003253';
  });
}

// 🔹 Render content function
function renderGallery(index) {
  const { title, desc } = contentData[index];
  dynamicContent.innerHTML = `
    <h2 class="text-[#173150] font-semibold md:font-medium text-[24px] md:text-[40px] text-center">${title}</h2>
    <p class="text-[#474A49] tracking-[2%] leading-[28px] text-[16px] md:text-[20px] text-center">${desc}</p>
  `;

  if (index === 0) {
    projectWalktrough.classList.remove("hidden");
    otherswalkthrough.classList.add("hidden");
  } else {
    projectWalktrough.classList.add("hidden");
    otherswalkthrough.classList.remove("hidden");
    const galleryData = galleryImages[index];
    otherswalkthrough.innerHTML = `
      <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-[6px] md:gap-[20px]">
        ${galleryData.map(item => `
          <figure class="${item.classes}">
            <img src="${item.src}" alt="gallery-image" class="w-full h-full object-cover object-center" />
          </figure>`).join("")}
      </div>
      <button id="gallery-showmore" class="px-[24px] py-[12px] bg-[#003253] uppercase text-white m-auto font-medium cursor-pointer md:hidden block">Show more</button>
    `;
  }
}

// 🔹 Desktop button clicks
flowButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    resetFlowButtons();
    btn.classList.remove("bg-[#F2F2F2]", "text-[#003253]");
    btn.classList.add("bg-[#003253]", "text-white");
    renderGallery(index);
  });
});

// 🔹 Mobile button clicks
mobileButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    resetMobileButtons();
    btn.querySelector('.bottomlayer').style.background = '#FFCA7B';
    btn.querySelector('.middlelayer').style.background = '#EBAF56';
    btn.querySelector('.toplayer').style.background = 'linear-gradient(to bottom, #FFC267 0%, #99753E 100%)';
    renderGallery(index + 1); // mobile index: first button corresponds to gallery 1
    projectWalktrough.classList.remove("hidden");
  });
});

// 🔹 Default Rendering
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 768) {
    // Mobile default: first button active
    if (mobileButtons[0]) {
      mobileButtons[0].click();
    }
    if (projectWalktrough) {
      projectWalktrough.classList.remove("hidden");
    }
  } else {
    // Desktop default: Project Walkthrough
    if (flowButtons[0]) {
      flowButtons[0].click();
    }
  }
});

// showMore buttons functionality
if (otherswalkthrough) {
  otherswalkthrough.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'gallery-showmore') {
      // Find all hidden images
      const hiddenImages = otherswalkthrough.querySelectorAll('.onclickshowmore');

      hiddenImages.forEach(img => img.classList.remove('hidden'));

      // Hide the Show More button
      e.target.style.display = 'none';
    }
  });
}



const video = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");
const thumbnailOverlay = document.getElementById("thumbnailOverlay");
if (playBtn) {
  playBtn.addEventListener("click", () => {
    thumbnailOverlay.classList.add("hidden"); // thumbnail hide
    video.classList.remove("hidden");         // video show
    video.play();                             // play video
  });
}


// plan page configration

const plansqftimages = {
  '4BHK': {
    heading: `Premium 4 BHK Apartments`,
    desc: `Best-selling 4 BHK layouts with expansive living and superior specifications.`,
    buttons: [`Zenith Tower`, `Crest Tower`, `Prime Tower`],
    buttonsData: {
      zenithTower: {
        name: 'Zenith Tower',
        imagebtn: [`2600 Sqft`, `2800 Sqft`],
        images: {
          '2600sqft': `./mediaFiles/Plan/Plan/map1.webp`,
          '2800sqft': `./mediaFiles/Plan/Plan/map1.webp`,
        },
        SuperArea: `2,600–2,800 sq.ft.`,
        BuiltupArea: `1,697.81 sq.ft.`,
        BalconyArea: `389.44 sq.ft.`,
        RERACarpetArea: `1,592.53 sq.ft.`,
      },
      crestTower: {
        name: 'Crest Tower',
        imagebtn: [`2600 Sqft`, `2800 Sqft`],
        images: {
          '2600sqft': `./mediaFiles/Plan/Plan/map1.webp`,
          '2800sqft': `./mediaFiles/Plan/Plan/map1.webp`,
        },
        SuperArea: `2,600–2,800 sq.ft.`,
        BuiltupArea: `1,697.81 sq.ft.`,
        BalconyArea: `389.44 sq.ft.`,
        RERACarpetArea: `1,592.53 sq.ft.`,
      },
      primeTower: {
        name: 'Prime Tower',
        imagebtn: [`2600 Sqft`, `2800 Sqft`],
        images: {
          '2600sqft': `./mediaFiles/Plan/Plan/map1.webp`,
          '2800sqft': `./mediaFiles/Plan/Plan/map1.webp`,
        },
        SuperArea: `2,600–2,800 sq.ft.`,
        BuiltupArea: `1,697.81 sq.ft.`,
        BalconyArea: `389.44 sq.ft.`,
        RERACarpetArea: `1,592.53 sq.ft.`,
      },
    },
  },

  '3BHK': {
    heading: `Modern 3 BHK Residences`,
    desc: `Thoughtfully designed for modern families, blending space, sunlight, and privacy.`,
    buttons: [`Apex Tower`],
    buttonsData: {
      apexTower: {
        name: 'Apex Tower',
        imagebtn: [`2400–2650 Sqft`],
        images: {
          '2400–2650sqft': `./mediaFiles/Plan/Plan/map1.webp`,
        },
        SuperArea: `2,400–2,650 sq.ft.`,
        BuiltupArea: `1,453.89 sq.ft.`,
        BalconyArea: `431.64 sq.ft.`,
        RERACarpetArea: `1,367.89 sq.ft.`,
      },
    },
  },

  '5BHK': {
    heading: `New Launch: 5 BHK Ultra-Spacious Homes`,
    desc: `Spanning luxury with 5 bedrooms, open green views, and private comforts.`,
    buttons: [`Everest Tower`, `Crown Tower`],
    buttonsData: {
      everestTower: {
        name: 'Everest Tower',
        imagebtn: [`3400 Sqft`],
        images: {
          '3400sqft': `./mediaFiles/Plan/Plan/3400sqft.svg`,
        },
        SuperArea: `3,400 sq.ft.`,
        BuiltupArea: `2,200 sq.ft.`,
        BalconyArea: `400 sq.ft.`,
        RERACarpetArea: `600 sq.ft.`,
      },
      crownTower: {
        name: 'Crown Tower',
        imagebtn: [`3400 Sqft`],
        images: {
          '3400sqft': `./mediaFiles/Plan/Plan/comming-soon.webp`,
        },
        SuperArea: `To Be Announced`,
        BuiltupArea: `To Be Announced`,
        BalconyArea: `To Be Announced`,
        RERACarpetArea: `To Be Announced`,
      },
    },
  },

  'Penthouse': {
    heading: `Exclusive Luxury Penthouses`,
    desc: `Commanding views, large terraces, and unmatched privacy — designed for the elite.`,
    buttons: [`Zenith`, `Crest`, `Prime`, `Apex`, `Everest`, `Crown`],
    buttonsData: {
      zenith: {
        name: 'zenith',
        imagebtn: [`2600 Sqft`, `2800 Sqft`],
        images: {
          '2600sqft': `./mediaFiles/Plan/Plan/map1.webp`,
          '2800sqft': `./mediaFiles/Plan/Plan/map1.webp`,
        },
        SuperArea: `2,600–2,800 sq.ft.`,
        BuiltupArea: `1,697.81 sq.ft.`,
        BalconyArea: `389.44 sq.ft.`,
        RERACarpetArea: `1,592.53 sq.ft.`,
      },
      crest: {
        name: 'Crest',
        imagebtn: [`2600 Sqft`, `2800 Sqft`],
        images: {
          '2600sqft': `./mediaFiles/Plan/Plan/map1.webp`,
          '2800sqft': `./mediaFiles/Plan/Plan/map1.webp`,
        },
        SuperArea: `2,600–2,800 sq.ft.`,
        BuiltupArea: `1,697.81 sq.ft.`,
        BalconyArea: `389.44 sq.ft.`,
        RERACarpetArea: `1,592.53 sq.ft.`,
      },
      prime: {
        name: 'Prime',
        imagebtn: [`To Be Announced`],
        images: {
          'comingSoon': `./mediaFiles/Plan/Plan/comming-soon.webp`,
        },
        SuperArea: `To Be Announced`,
        BuiltupArea: `To Be Announced`,
        BalconyArea: `To Be Announced`,
        RERACarpetArea: `To Be Announced`,
      },
      apex: {
        name: 'Apex',
        imagebtn: [`2400–2650 Sqft`],
        images: {
          '2400–2650sqft': `./mediaFiles/Plan/Plan/map1.webp`,
        },
        SuperArea: `2,400–2,650 sq.ft.`,
        BuiltupArea: `1,453.89 sq.ft.`,
        BalconyArea: `431.64 sq.ft.`,
        RERACarpetArea: `1,367.89 sq.ft.`,
      },
      everest: {
        name: 'Everest',
        imagebtn: [`3400 Sqft`],
        images: {
          '3400sqft': `./mediaFiles/Plan/Plan/map1.webp`,
        },
        SuperArea: `3,400 sq.ft.`,
        BuiltupArea: `2,200 sq.ft.`,
        BalconyArea: `400 sq.ft.`,
        RERACarpetArea: `600 sq.ft.`,
      },
      crown: {
        name: 'Crown',
        imagebtn: [`3400 Sqft`],
        images: {
          '3400sqft': `./mediaFiles/Plan/Plan/comming-soon.webp`,
        },
        SuperArea: `To Be Announced`,
        BuiltupArea: `To Be Announced`,
        BalconyArea: `To Be Announced`,
        RERACarpetArea: `To Be Announced`,
      },
    },
  },
};

document.addEventListener('DOMContentLoaded', function () {
  // DOM Elements
  const bhkButtons = document.querySelectorAll('.bhkBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const planHeading = document.getElementById('planHeading');
  const planDescription = document.getElementById('planDescription');
  const planImage = document.getElementById('planImage');
  const superArea = document.getElementById('superArea');
  const builtupArea = document.getElementById('builtupArea');
  const balconyArea = document.getElementById('balconyArea');
  const reraCarpetArea = document.getElementById('reraCarpetArea');
  const sqftButtonsContainer = document.getElementById('sqftButtonsContainer');
  const towerButtonsContainer = document.getElementById('towerButtonsContainer');

  // Current state
  let currentBHK = '4BHK';
  let currentTower = 'zenithTower';
  let currentSize = '2600 Sqft';

  // Initialize page
  function initializePage() {
    updateBHKButtons();
    updateContent();
  }

  // Update BHK buttons
  function updateBHKButtons() {
    bhkButtons.forEach(btn => {
      console.log(btn)
      const btnBHK = btn.getAttribute('data-bhk') || btn.textContent.trim();
      if (btnBHK === currentBHK) {
        btn.classList.remove('bg-transparent', 'border-[#BCBCBC]', 'text-[#003253]');
        btn.classList.add('bg-[#003253]', 'border-[#FFC267]', 'text-white');
        if (btn.parentElement) {
          btn.parentElement.classList.remove('hover:bg-gradient-to-b');
        }
      } else {
        btn.classList.remove('bg-[#003253]', 'border-[#FFC267]', 'text-white');
        btn.classList.add('bg-transparent', 'border-[#BCBCBC]', 'text-[#003253]');
        if (btn.parentElement) {
          btn.parentElement.classList.remove('bg-gradient-to-b', 'from-[#FFC267]', 'to-[#99753E]');
          btn.parentElement.classList.add('hover:bg-gradient-to-b');
        }
      }
    });
  }

  // Update tower buttons container dynamically
  function updateTowerButtonsContainer() {
    if (towerButtonsContainer) {
      towerButtonsContainer.innerHTML = '';
    }

    const bhkData = plansqftimages[currentBHK];
    const towerKeys = Object.keys(bhkData.buttonsData);

    towerKeys.forEach((towerKey, index) => {
      const towerName = bhkData.buttonsData[towerKey].name || towerKey;
      const isActive = towerKey === currentTower;

      const buttonGroup = document.createElement('div');
      buttonGroup.className = 'max-w-[210px] w-full flex flex-col items-center justify-center group';
      buttonGroup.innerHTML = `
            <button class="towerBtn cursor-pointer font-jost text-[17px] md:text-[20px] font-medium leading-[150%] text-[#003253]" data-tower="${towerKey}">
                ${towerName}
            </button>
            <div class="w-full h-[3px] ${isActive ? 'bg-gradient-to-b from-[#FFC267] to-[#99753E]' : 'bg-[#D8D6D5]'}"></div>
        `;

      if (towerButtonsContainer) {
        towerButtonsContainer.appendChild(buttonGroup);
      }
    });

    attachTowerButtonListeners();
  }


  // Update sqft buttons container dynamically
  function updateSqftButtonsContainer(sizes) {
    if (sqftButtonsContainer) {
      sqftButtonsContainer.innerHTML = '';
    }

    sizes.forEach((size, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `changePlansimage rounded-[4px] inset-0 border py-[3.5px] md:py-[8px] px-[11px] md:px-[40px] font-jost font-medium text-[14.69px] md:text-[16.65px] cursor-pointer capitalize`;
      button.setAttribute('data-size', size);
      button.textContent = size;

      // Apply initial active class based on currentSize
      if (size === currentSize) {
        button.classList.add('bg-[#003253]', 'border-[#FFC267]', 'text-white');
      } else {
        button.classList.add(
          'bg-[#F2F2F2]', 'border-[#BCBCBC]', 'text-[#003253]',
          'hover:border-[#FFC267]', 'hover:bg-[#003253]', 'hover:text-white', 'duration-200'
        );
      }
      if (sqftButtonsContainer) {
        sqftButtonsContainer.appendChild(button);
      }
    });

    // If no currentSize set, default to first
    if (!currentSize && sizes.length > 0) currentSize = sizes[0];

    // Re-attach event listeners
    attachSqftButtonListeners();

    // Update button states in case currentSize changed
    updateSqftButtons();
  }


  // Attach event listeners to tower buttons
  function attachTowerButtonListeners() {
    const towerBtns = document.querySelectorAll('.towerBtn');
    towerBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        currentTower = this.getAttribute('data-tower');
        const towerData = plansqftimages[currentBHK].buttonsData[currentTower];
        if (towerData.imagebtn.length > 0) currentSize = towerData.imagebtn[0];
        updateTowerButtons();
        updateSqftButtons();
        updateContent();
      });
    });
  }

  // Attach event listeners to sqft buttons
  function attachSqftButtonListeners() {
    const sqftBtns = document.querySelectorAll('.changePlansimage');
    sqftBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        currentSize = this.getAttribute('data-size');
        updateSqftButtons();
        updateContent();
      });
    });
  }

  // Update tower buttons active states
  function updateTowerButtons() {
    const towerBtns = document.querySelectorAll('.towerBtn');
    towerBtns.forEach(btn => {
      const line = btn.parentElement.querySelector('div');
      if (btn.getAttribute('data-tower') === currentTower) {
        line.className = 'w-full h-[3px] bg-gradient-to-b from-[#FFC267] to-[#99753E]';
      } else {
        line.className = 'w-full h-[3px] bg-[#D8D6D5]';
      }
    });
  }

  // Update sqft buttons appearance based on currentSize
  function updateSqftButtons() {
    const sqftBtns = document.querySelectorAll('.changePlansimage');

    sqftBtns.forEach(btn => {
      const btnSize = btn.getAttribute('data-size')?.trim();
      const currSize = currentSize.trim();

      if (btnSize === currSize) {
        // Active button stays static
        btn.classList.remove(
          'bg-[#F2F2F2]', 'border-[#BCBCBC]', 'text-[#003253]',
          'hover:border-[#FFC267]', 'hover:bg-[#003253]', 'hover:text-white'
        );
        btn.classList.add('bg-[#003253]', 'border-[#FFC267]', 'text-white');
      } else {
        // Inactive buttons retain hover effect
        btn.classList.remove('bg-[#003253]', 'border-[#FFC267]', 'text-white');
        btn.classList.add(
          'bg-[#F2F2F2]', 'border-[#BCBCBC]', 'text-[#003253]',
          'hover:border-[#FFC267]', 'hover:bg-[#003253]', 'hover:text-white', 'duration-200'
        );
      }
    });
  }


  // Update content

  function updateContent() {
    const bhkData = plansqftimages[currentBHK];
    const towerData = bhkData.buttonsData[currentTower];
    if (planHeading) {
      planHeading.textContent = bhkData.heading;
    }
    if (planDescription) {
      planDescription.textContent = bhkData.desc;
    }

    updateTowerButtonsContainer(bhkData.buttons);
    updateSqftButtonsContainer(towerData.imagebtn);
    if (superArea || builtupArea || balconyArea || reraCarpetArea) {
      superArea.textContent = towerData.SuperArea;
      builtupArea.textContent = towerData.BuiltupArea;
      balconyArea.textContent = towerData.BalconyArea;
      reraCarpetArea.textContent = towerData.RERACarpetArea;
    }
    const sizeKey = currentSize.toLowerCase().replace(/[\s–]/g, '');
    if (planImage) {
      planImage.src = towerData.images[sizeKey] || towerData.images[Object.keys(towerData.images)[0]];
      planImage.alt = `${currentBHK} ${currentTower} ${currentSize} floor plan`;
    }

    updateDownloadButton();
  }

  // Download button
  function updateDownloadButton() {
    const towerData = plansqftimages[currentBHK].buttonsData[currentTower];
    const sizeKey = currentSize.toLowerCase().replace(/[\s–]/g, '');
    const imageUrl = towerData.images[sizeKey];

    if (downloadBtn) {
      downloadBtn.onclick = function () {
        if (imageUrl && !imageUrl.includes('comming-soon')) {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.download = `${currentBHK}-${currentTower}-${currentSize}-floor-plan.webp`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          alert('Floor plan download will be available soon!');
        }
      };
    }
  }

  // BHK button clicks
  bhkButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      currentBHK = this.getAttribute('data-bhk') || this.textContent.trim();
      const bhkData = plansqftimages[currentBHK];
      currentTower = Object.keys(bhkData.buttonsData)[0];
      currentSize = bhkData.buttonsData[currentTower].imagebtn[0];
      updateBHKButtons();
      updateContent();
    });
  });

  // Initialize
  initializePage();
});



// Explore the Project’s Tower Layout

document.addEventListener('DOMContentLoaded', function () {

  const projectTowerLayot = {
    '3BHK-Apex Tower': [
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '1 St  FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '2nd.7th 12th, 22nd & 32nd FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '3rd,8th, 13th, 18th, 23rd & 28th FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '4th 9th, 14th, 19th, 24th & 29th FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '5th,10th, 15th 20th 25th & 30th FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '6th.11th 16th, 21th, 26th & 31st FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '17th & 27th Refuze FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '33rd & 34th FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '35th Duplex Lower  FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Apex tower/Apex tower_page-0003.webp', name: '35th Duplex Lower  FLOOR PLAN' },
    ],
    '4BHK-Zenith & Crest Tower': [
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/garden-side.svg', name: '1 St  FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/garden-side.svg', name: '2nd.7th 12th, 22nd & 32nd FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/garden-side.svg', name: '3rd,8th, 13th, 18th, 23rd & 28th FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/garden-side.svg', name: '4th 9th, 14th, 19th, 24th & 29th FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/garden-side.svg', name: '5th,10th, 15th 20th 25th & 30th FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/ZEnith  & Crest tower_page-0002.webp', name: '6th.11th 16th, 21th, 26th & 31st FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/ZEnith  & Crest tower_page-0002.webp', name: '17th & 27th Refuze FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/ZEnith  & Crest tower_page-0002.webp', name: '33rd & 34th FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/ZEnith  & Crest tower_page-0002.webp', name: '35th Duplex Lower  FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/ZEnith  & Crest tower_page-0002.webp', name: '35th Duplex Lower  FLOOR PLAN' },
      { src: './mediaFiles/Plan/Tower plan images/Zenith & Crest tower/ZEnith  & Crest tower_page-0002.webp', name: '36th Duplex Upper FLOOR PLAN' },
    ],
    '4BHK-Prime Tower': [
      { src: './mediaFiles/Plan/Plan/comming-soon.webp', name: ' To Be Announced' },
    ],
    '5BHK-Everest Tower': [
      { src: './mediaFiles/Plan/Plan/3400sqft.svg', name: 'Floor Plans' },
    ],
    '5BHK-Crown Tower': [
      { src: './mediaFiles/Plan/Plan/comming-soon.webp', name: ' To Be Announced' },
    ]

  }

  // DOM Elements
  const projectTowerButtons = document.querySelectorAll('.projectTower');
  const desktopContainer = document.querySelector('.projectTowerDesktopData');
  const mobileContainer = document.querySelector('.projectTowermobileData');

  let currentTower = '3BHK-Apex Tower';

  // Render tower floor plans
  function renderTowerData(towerName) {
    const data = projectTowerLayot[towerName];
    if (!data) return;

    // Clear previous
    if (desktopContainer) {
      desktopContainer.innerHTML = '';
    }
    if (mobileContainer) {
      mobileContainer.innerHTML = '';
    }

    // Render Desktop
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'w-full h-auto';
      div.innerHTML = `
                <figure class="group relative w-full h-auto border border-[#E0E0E0] px-[20.76px] py-[16.54px] flex items-center justify-center">
                    <img src="${item.src}" alt="${item.name}" class="w-full h-full object-contain">
                    <div class="group-hover:block hidden px-[20.76px] py-[16.54px] absolute w-full h-full top-0 left-0">
                        <div class="w-full h-full bg-[#173F63]/60 flex items-center justify-center">
                            <img src="./mediaFiles/Plan/Plan/+sign.svg" alt="+sign" class="w-[47.48px] h-[47.48px] object-fill object-center cursor-pointer">
                        </div>
                    </div>
                </figure>
                <div class="bg-[#173F63] w-full h-auto py-[11.95px] text-center font-medium text-[14px] xl:text-[18px] text-white">${item.name}</div>
            `;
      if (desktopContainer) {
        desktopContainer.appendChild(div);
      }
    });

    // Render Mobile
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'swiper-slide';
      div.innerHTML = `
                <div class="w-full h-auto">
                    <figure class="group relative w-full h-auto border border-[#E0E0E0] px-[20.76px] py-[16.54px] flex items-center justify-center">
                        <img src="${item.src}" alt="${item.name}" class="w-full h-full object-contain">
                        <div class="group-hover:block hidden px-[20.76px] py-[16.54px] absolute w-full h-full top-0 left-0">
                            <div class="w-full h-full bg-[#173F63]/60 flex items-center justify-center">
                                <img src="./mediaFiles/Plan/Plan/+sign.svg" alt="+sign" class="w-[47.48px] h-[47.48px] object-fill object-center cursor-pointer">
                            </div>
                        </div>
                    </figure>
                    <div class="bg-[#173F63] w-full h-auto py-[11.95px] text-center font-medium text-[14px] xl:text-[18px] text-white">${item.name}</div>
                </div>
            `;
      if (mobileContainer) {
        mobileContainer.appendChild(div);
      }
    });
  }

  // Tower button click
  projectTowerButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const towerName = btn.textContent.trim();

      console.log(towerName)

      // Update active button
      projectTowerButtons.forEach(b => {
        b.classList.remove('bg-white', 'text-[#003253]');
        b.classList.add('bg-transparent', 'text-white');
      });
      btn.classList.add('bg-white', 'text-[#003253]');
      btn.classList.remove('bg-transparent', 'text-white');

      // Update tower data
      currentTower = towerName;
      renderTowerData(currentTower);
    });
  });

  // Initial render
  renderTowerData(currentTower);

});

// contactus openoverlap
const contactusBtn = document.querySelector('#contactusBtn')
const overlapform = document.querySelector('.overlapform')
if (contactusBtn) {
  contactusBtn.addEventListener('click', () => {
    overlapform.classList.remove('-translate-y-[110%]')
  })
}

const closeoverlapform = document.querySelector('.closeoverlapform')

if (closeoverlapform) {
  closeoverlapform.addEventListener('click', () => {
    overlapform.classList.add('-translate-y-[110%]')
  })
}


// register plugin
gsap.registerPlugin(ScrollTrigger);

// get slides array and compute dynamic end
const slides = gsap.utils.toArray(".craftedbannerslide");
const numSlides = slides.length;

// set all slides overlapping via grid-area
gsap.set(".craftedbannerslide:not(:last-child)", { clipPath: "inset(0 0 0 0)" });

// master timeline
const tl = gsap.timeline();

tl.to(".craftedbannerslide:not(:last-child)", {
  ease: "none",
  // move clipPath horizontally: reveal from right to left
  clipPath: "inset(0 100% 0 0)", // ⬅️ hides from right side
  stagger: 1,
  duration: 1,
}).to(
  ".craftedbannerslide .heading",
  {
    opacity: 1,
    duration: 0.6,
    stagger: 1,
  },
  "<"
);

// create ScrollTrigger that pins and scrubs the timeline
ScrollTrigger.create({
  trigger: ".craftedBannerslides",
  start: "top top",
  // proportional scroll distance
  end: () => "+=" + numSlides * 100 + "%",
  scrub: true,
  pin: true,
  animation: tl,
  // markers: true
});

// stack slides visually (topmost last)
gsap.set(".craftedbannerslide", {
  zIndex: (i, target, targets) => targets.length - i,
});

// Initialize Swiper top Banner
var swiper = new Swiper(".carftedBanner", {
  effect:'fade',
  loop: false,
  navigation: {
    nextEl: ".custom-button-next-f2",
    prevEl: ".custom-button-prev-f2",
    disabledClass: "swiper-button-disabled",
  },
  pagination: {
    el: ".swiper-pagination-progress",
    type: "progressbar",
  },
  // 👇 enable touch scroll/swipe
  simulateTouch: true,
  allowTouchMove: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
});

// Fraction pagination (custom)
const fractionE2 = document.querySelector('.swiper-fraction-craftedBanner');

// Initialize fraction on page load
if (fractionE2) {
  fractionE2.textContent = `1 / ${swiper.slides.length}`;
}


swiper.on('slideChange', function () {
  const totalSlides = swiper.slides.length;
  const activeSlide = swiper.realIndex + 1;
  fractionE2.textContent = `${activeSlide} / ${totalSlides}`;
});