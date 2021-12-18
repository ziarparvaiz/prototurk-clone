// ----------------------------------------------------
// Home Page | .programming-language

const swiper_programming_language = new Swiper(".programming-language", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// ----------------------------------------------------

// ----------------------------------------------------
// Home Page | .question-part

const swiper_question_part = new Swiper(".question-part", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// ----------------------------------------------------


// ----------------------------------------------------
// Home Page | .blog-part

const swiper_blog_part = new Swiper(".blog-part", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// ----------------------------------------------------


// ----------------------------------------------------
// Home Page | .member-section

const swiper_member_section = new Swiper(".member-section", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// ----------------------------------------------------


// ----------------------------------------------------
// Login Popup
const OpenLogin_Popup = document.getElementById('Login_Popup')
const Login_Popup = document.querySelector(".login-popup")
const Close_LoginPopup = document.getElementById("Close_Login-Popup")

OpenLogin_Popup.addEventListener('click', () => {
  Login_Popup.style.visibility = 'visible'
})

Close_LoginPopup.addEventListener('click', () => {
  Login_Popup.style.visibility = 'hidden'
})

// ----------------------------------------------------

// ----------------------------------------------------
// Sidebar Open
const sidebar = document.getElementById('sidebar')
const Open_Sidebar = document.getElementById('Open-sidebar')

Open_Sidebar.addEventListener('click', () => {
  sidebar.classList.toggle('active')
})
// ----------------------------------------------------