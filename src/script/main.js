const header = document.getElementById("transparentBGonScroll");
const mainHeader = document.getElementById("mainheaderAppear_disappear");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Hide on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 50) {
    mainHeader.classList.add("translate-y-[-100%]");
  } else {
    mainHeader.classList.remove("translate-y-[-100%]");
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
mobilemegamenuopenBtn.addEventListener('click', () => {
  mobilemegamenuopenBtn.classList.toggle('rotate-[120deg]');
  mobiletogglemenu.classList.toggle('hidden');
  overlaybottommenu.classList.toggle('hidden')
})

overlaybottommenu.addEventListener('click', () => {
  mobilemegamenuopenBtn.classList.toggle('rotate-[120deg]');
  mobiletogglemenu.classList.toggle('hidden');
  overlaybottommenu.classList.toggle('hidden')
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

const assistanceremovebtn = document.getElementById('assistanceremovebtn')
const assistancebtn = document.getElementById('assistancebtn')
assistanceremovebtn.addEventListener('click', () => {
  assistancebtn.classList.add('hidden')
})

// assistance ractangular remver btn
const assistanceBtn = document.getElementById("assistance_circle_btn");
const assistanceBox = document.getElementById("assistance_ractangular_box");
const assistanceCloseBtn = document.getElementById("assistanceBox_close_btn");

assistanceBtn.addEventListener("click", () => {
  // Show box
  assistanceBox.classList.remove("hidden");
  assistanceBox.classList.add("scale-0");
  setTimeout(() => {
    assistanceBox.classList.remove("scale-0");
    assistanceBox.classList.add("scale-100", "transition-transform", "duration-500", "ease-in-out");
  }, 10);
});

assistanceCloseBtn.addEventListener("click", () => {
  assistanceBox.classList.remove("scale-100");
  assistanceBox.classList.add("scale-0");

  setTimeout(() => {
    assistanceBox.classList.add("hidden");
  }, 500);
});

// Read More Data
const readMoreBtn = document.getElementById('readMoreBtn');
const readMoreData = document.getElementById('readMoreData')
const paragraphBr = document.getElementById('paragraphBr')
if (readMoreBtn && readMoreData) {
  const readMoreBr = readMoreData.previousElementSibling; // <br>
  readMoreBtn.addEventListener('click', () => {
    const current = readMoreBtn.textContent.trim().toLowerCase();
    readMoreBtn.textContent = current === 'read more' ? 'read less' : 'read more';
    readMoreBr.classList.toggle('hidden', current !== 'read more');
    readMoreData.classList.toggle('hidden', current !== 'read more');
    paragraphBr.classList.toggle('hidden', current !== 'read less');

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


// Crafted for top 1% Banner
const swiper2 = new Swiper(".mySwiperBanner2", {
  loop: false,
  effect: "fade",
  mousewheel: true,
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
const fraction2 = document.querySelector(".swiper-fraction2");
swiper2.on("slideChange", () => {
  if (fraction2) {
    fraction2.textContent = `1 / ${swiper2.slides.length}`;
  }
  fraction2.textContent = `${swiper2.realIndex + 1} / ${swiper2.slides.length}`;
});


// Data for each button's content
const residenceData = {
  '4BHKbtn': {
    title: 'Elite Residences 4 BHK Apartments',
    area: 'To Be Announced',
    tower: 'Prime',
    status: 'Under Construction',
    handover: '2028',
    furnishing: 'To Be Announced',
    availability: 'Price on Request ',
    image: ['./mediaFiles/Home page/Counter number/Products/4BHK1_image.webp', './mediaFiles/Home page/Counter number/Products/4BHK_image.webp'],
    bg: 'var(--4bhk-bg)'
  },
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
  '5BHKbtn': {
    title: 'Presidential Sky Homes 5 BHK Apartments',
    area: 'To Be Announced',
    tower: 'Everest',
    status: 'Ready To Move',
    handover: '2025',
    furnishing: 'Fully Furnished',
    availability: 'Sold Out',
    image: ['./mediaFiles/Home page/Counter number/Products/5BHK_image.webp', './mediaFiles/Home page/Counter number/Products/5BHK1_image.webp'],
    bg: 'var(--5bhk-bg)'
  },
  'pentHouse': {
    title: 'Cloud Villas Sky Penthouses',
    area: 'Under Construction',
    tower: 'Apex',
    status: 'Ready To Move',
    handover: '2025',
    furnishing: 'To Be Announced',
    availability: 'Coming Soon',
    image: ['./mediaFiles/Home page/Counter number/Products/penthouse_image.webp'],
    bg: 'var(--penthouse-bg)'
  }
};

// Swiper instance variable
let swiperInstance;

// Select all buttons and dynamic content elements
const bhkButtons = document.querySelectorAll('.BHKResidence');
const dynamicElements = {
  title: document.getElementById('dynamic-title'),
  area: document.getElementById('dynamic-area'),
  tower: document.getElementById('dynamic-tower'),
  status: document.getElementById('dynamic-status'),
  handover: document.getElementById('dynamic-handover'),
  furnishing: document.getElementById('dynamic-furnishing'),
  availability: document.getElementById('dynamic-availability'),
  infoBg: document.getElementById('dynamic-info-bg'),
  swiperWrapper: document.querySelector('.SignatureResidenceSwiper .swiper-wrapper')
};

const activeClasses = ['bg-[#003253]', 'text-[white]'];
const inactiveClasses = ['bg-white', 'text-[#003253]'];

// Function to update the DOM with new data and dynamically create slides
const updateDom = (key) => {
  const data = residenceData[key];
  if (!data) return;

  // Update text content
  dynamicElements.title.textContent = data.title;
  dynamicElements.area.textContent = `Area: ${data.area}`;
  dynamicElements.tower.textContent = `Tower: ${data.tower}`;
  dynamicElements.status.textContent = `Status: ${data.status}`;
  dynamicElements.handover.textContent = `Expected Handover: ${data.handover}`;
  dynamicElements.furnishing.textContent = `FURNISHing: ${data.furnishing}`;
  dynamicElements.availability.textContent = `Availability: ${data.availability}`;


  // Clear existing slides
  dynamicElements.swiperWrapper.innerHTML = '';

  // Create a new slide for each image
  data.image.forEach(src => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;
    img.classList.add('h-full', 'w-full', 'object-cover');
    slide.appendChild(img);
    dynamicElements.swiperWrapper.appendChild(slide);
  });

  // Destroy and re-initialize Swiper to refresh with new slides
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }
  swiperInstance = new Swiper(".SignatureResidenceSwiper", {
    effect: "fade",
    navigation: {
      nextEl: ".SignatureResidence-custom-next-button",
      prevEl: ".SignatureResidence-custom-prev-button",
    },
  });
};

// Function to handle button state and data change on click
const handleButtonClick = (event) => {
  // Remove active classes from all buttons
  bhkButtons.forEach(btn => {
    btn.classList.remove(...activeClasses);
    btn.classList.add(...inactiveClasses);
  });

  // Add active classes to the clicked button
  const clickedButton = event.currentTarget;
  clickedButton.classList.add(...activeClasses);
  clickedButton.classList.remove(...inactiveClasses);

  // Update the DOM with the new data
  updateDom(clickedButton.id);
};

// Add event listeners to all buttons
bhkButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// Optional: Set a default button on page load
const defaultButton = document.getElementById('4BHKbtn');
if (defaultButton) {
  defaultButton.classList.add(...activeClasses);
  defaultButton.classList.remove(...inactiveClasses);
  updateDom(defaultButton.id);
}

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
  btn.addEventListener('click', () => {
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

$(document).ready(function () {
  const input = document.querySelector("#mobile_code");
  const iti = window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry: "in",
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
    dynamicheader.textContent = PricingOverViewData.Heading[index] || '';
    dynamicbuttoninnerbtn.innerHTML = '';

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
      dynamicbuttoninnerbtn.appendChild(wrapper);

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
    dynamicbuttoninnerbtn.querySelectorAll('.bg_gradient_line').forEach(l => {
      l.classList.remove('bg-gradient-custom');
      l.classList.add('bg-default');
    });
    if (!wrapper) return;
    const line = wrapper.querySelector('.bg_gradient_line');
    if (line) {
      line.classList.remove('bg-default');
      line.classList.add('bg-gradient-custom');
    }
  }

  function setActiveInnerButton(btn) {
    dynamicbuttoninnerbtn.querySelectorAll('.innerBtn').forEach(b => b.classList.remove('inner-active'));
    if (btn) btn.classList.add('inner-active');
  }

  function setActiveLineIndex(i) {
    const wrapper = dynamicbuttoninnerbtn.children[i];
    if (wrapper) setActiveLineWrapper(wrapper);
  }

  // 👇 Data render function
  function renderTowerData(apartmentType, towerName) {
    const data = PricingOverViewData.mainData?.[apartmentType]?.[towerName];
    if (data) {
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

  function renderMobileSlider(apartmentType, towerName, data) {
    const swiperWrapper = document.querySelector('.priceaprtmentSlider .swiper-wrapper');
    console.log(swiperWrapper)
    swiperWrapper.innerHTML = ''; // clear old slides if any

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

    swiperWrapper.appendChild(slide);

    // Re-init Swiper after DOM update
    if (window.priceaprtmentSlider) {
      window.priceaprtmentSlider.update();
    }
  }


  // Initial load
  renderButtons(0);
  Apartmentbtn[0].classList.add('activeBtn');
  setTimeout(() => {
    setActiveLineIndex(0);

    // 👇 First Apartment + First Tower ka data show kare
    const firstBtn = dynamicbuttoninnerbtn.querySelector('.innerBtn');
    if (firstBtn) {
      setActiveInnerButton(firstBtn);
      renderTowerData(firstBtn.dataset.apartment, firstBtn.dataset.tower);
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
  dynamicbuttoninnerbtn.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('.innerBtn');
    if (!clickedBtn) return;

    const wrapper = clickedBtn.closest('.group');
    setActiveLineWrapper(wrapper);
    setActiveInnerButton(clickedBtn);

    renderTowerData(clickedBtn.dataset.apartment, clickedBtn.dataset.tower);
  });
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

