let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".list");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

const darkBtn = document.querySelector(".btnDarkMode");
const headerNavbar = document.querySelector(".header__nav");
const linkCourses = document.querySelector(".linkKurslar");
const linkBlog = document.querySelector(".linkBlog");
const intro = document.querySelector(".header_inner");
const introTitle = document.querySelector(".hero__title");
const introText = document.querySelector(".header_des");
const advantage = document.querySelector(".advantage");
const advantageTitle = document.querySelector(".advantage__title");
const advantageMiniTitle = document.querySelectorAll(
  ".advantage__minibox-title"
);
const acardionBtnImg = document.querySelector(".advantage__btn-img");
const courses = document.querySelector(".courses");
const coursesTitle = document.querySelector(".courses__title");
const coursesText = document.querySelector(".courses__text");
const coursesSpan = document.querySelectorAll(".courses__span-one");
const coursesSpanOne = document.querySelectorAll(".courses__span-two"),
  workplace = document.querySelector(".workplace"),
  workplaceText = document.querySelector(".main_des"),
  forma = document.querySelector(".forma-section"),
  formBox = document.querySelector(".forma-right"),
  formMiniBox = document.querySelector(".forma-right-item"),
  formFirstLabel = document.querySelector(".first-label"),
  formSecondLabel = document.querySelector(".second-label"),
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
  comment = document.querySelector(".comment"),
  commentTitle = document.querySelector(".comment__title");

darkBtn.addEventListener("click", () => {
  headerNavbar.classList.toggle("dark_navbar");
  linkCourses.classList.toggle("dark__nav-link");
  linkBlog.classList.toggle("dark__nav-link");
  darkBtn.classList.toggle("dark__nav-btn");
  intro.classList.toggle("dark__intro");
  introTitle.classList.toggle("dark__title");
  introText.classList.toggle("dark__title");
  advantage.classList.toggle("dark__advantage");
  advantageTitle.classList.toggle("dark__title");
  advantageMiniTitle[0].classList.toggle("dark__title");
  advantageMiniTitle[1].classList.toggle("dark__title");
  advantageMiniTitle[2].classList.toggle("dark__title");
  advantageMiniTitle[3].classList.toggle("dark__title");
  advantageMiniTitle[4].classList.toggle("dark__title");
  advantageMiniTitle[5].classList.toggle("dark__title");
  advantageMiniTitle[6].classList.toggle("dark__title");
  advantageMiniTitle[7].classList.toggle("dark__title");
  acardionBtnImg.classList.toggle("dark__advantage_btn-img");
  courses.classList.toggle("dark__intro");
  coursesTitle.classList.toggle("dark__title");
  coursesText.classList.toggle("dark__text");
  coursesSpan[0].classList.toggle("dark__title");
  coursesSpan[1].classList.toggle("dark__title");
  coursesSpanOne[0].classList.toggle("dark__text");
  coursesSpanOne[1].classList.toggle("dark__text");
  workplace.classList.toggle("dark__advantage");
  workplaceText.classList.toggle("dark__title");
  forma.classList.toggle("dark__advantage");
  formBox.classList.toggle("dark__form-box");
  formMiniBox.classList.toggle("dark__advantage");
  formFirstLabel.classList.toggle("dark__form-label");
  formSecondLabel.classList.toggle("dark__form-label");
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
  comment.classList.toggle("dark__advantage");
  commentTitle.classList.toggle("dark__title");
});

const advantageBoxTwo = document.querySelector(".advantage__box-two");
const advantageBtn = document.querySelector(".advantage__btn");
const advantageBtnImg = document.querySelector(".advantage__btn-img");

advantageBtn.addEventListener("click", () => {
  advantageBoxTwo.classList.toggle("advantage__box_two-open");
  advantageBtnImg.classList.toggle("advantage__btn_img-active");
});

const firstLabel = document.querySelector(".first-label"),
  secondLabel = document.querySelector(".second-label"),
  firstInput = document.querySelector("#first-label"),
  secondInput = document.querySelector("#second-input"),
  form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  if (firstInput.value === "") {
    e.preventDefault();
    firstLabel.classList.add("label-error");
  }
  if (secondInput.value === "") {
    e.preventDefault();
    secondLabel.classList.add("label-error");
  }
});
