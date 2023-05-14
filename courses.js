let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".list");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

const body = document.querySelector("body");
const darkBtn = document.querySelector(".btnDarkMode");
const headerNavbar = document.querySelector(".header__nav");
const linkCourses = document.querySelector(".linkKurslar");
const linkBlog = document.querySelector(".linkBlog");
const coursesTitle = document.querySelector(".oquv-kurslari");
const coursesCard = document.querySelectorAll(".card");
const cardTitle = document.querySelectorAll(".card-body-h2");
const cardText = document.querySelectorAll(".card-body-p"),
  footer = document.querySelector(".footer"),
  footerItem = document.querySelectorAll(".itemDrop"),
  footerText = document.querySelector(".footer-desc"),
  footerLink = document.querySelectorAll(".linkSss"),
  footerTextOne = document.querySelector(".brandDes"),
  footerTextTwo = document.querySelector(".himoya"),
  footerTextThree = document.querySelector(".manzil"),
  footerTextFour = document.querySelector(".muljal"),
  footerTextFiwe = document.querySelector(".box-Biz"),
  footerTextSix = document.querySelector(".tel_footer"),
  coursesBox = document.querySelector(".courses__container-box"),
  pageBox = document.querySelector(".sahifalar__container");

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark__body");
  headerNavbar.classList.toggle("dark_navbar");
  linkCourses.classList.toggle("dark__nav-link");
  linkBlog.classList.toggle("dark__nav-link");
  darkBtn.classList.toggle("dark__nav-btn");
  coursesTitle.classList.toggle("dark__title");
  coursesCard[0].classList.toggle("dark__form-box");
  coursesCard[1].classList.toggle("dark__form-box");
  cardTitle[0].classList.toggle("dark__title");
  cardTitle[1].classList.toggle("dark__title");
  cardText[0].classList.toggle("dark__title");
  cardText[1].classList.toggle("dark__title");
  footer.classList.toggle("dark_navbar");
  footerItem[0].classList.toggle("dark__footer-item");
  footerItem[1].classList.toggle("dark__footer-item");
  footerItem[2].classList.toggle("dark__footer-item");
  footerText.classList.toggle("dark__title");
  footerLink[0].classList.toggle("dark__title");
  footerLink[1].classList.toggle("dark__title");
  footerLink[2].classList.toggle("dark__title");
  footerLink[3].classList.toggle("dark__title");
  footerLink[4].classList.toggle("dark__title");
  footerLink[5].classList.toggle("dark__title");
  footerLink[6].classList.toggle("dark__title");
  footerLink[7].classList.toggle("dark__title");
  footerLink[8].classList.toggle("dark__title");
  footerTextOne.classList.toggle("dark__title");
  footerTextTwo.classList.toggle("dark__title");
  footerTextThree.classList.toggle("dark__title");
  footerTextFour.classList.toggle("dark__title");
  footerTextFiwe.classList.toggle("dark__title");
  footerTextSix.classList.toggle("dark__title");
  coursesBox.classList.toggle("dark__intro");
  pageBox.classList.toggle("dark__intro");
});
