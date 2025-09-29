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


var priceaprtmentSlider = new Swiper(".priceaprtmentSlider", {
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

