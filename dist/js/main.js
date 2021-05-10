// links scroll to section
let links = document.querySelectorAll(".links li a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("." + e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
    links.forEach((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// scroll button
let btn = document.querySelector(".scroll i");
btn.addEventListener("click", (e) => {
  document.querySelector("header").scrollIntoView({
    behavior: "smooth",
  });
});
window.onscroll = function (e) {
  // log the length scrolled vertically
  // console.log(window.pageYOffset);
  if (document.documentElement.scrollTop <= 700) {
    btn.parentNode.style.display = "none";
  } else {
    btn.parentNode.style.display = "block";
  }
};
// setting box toggle button
let toggleButton = document.querySelector('.toggle-button')
let settingsBox = document.querySelector('.settings-box')
toggleButton.addEventListener('click', () => {
    settingsBox.classList.toggle('opened');
})

let liColor = document.querySelectorAll('.settings-box ul li')
liColor.forEach((li) => {
    li.addEventListener('click', (e) => {
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color )
        localStorage.setItem('Color_Option', e.target.dataset.color)
    })
})
let colorOption = localStorage.getItem('Color_Option')
if(colorOption !== null){
  console.log(colorOption)
  document.documentElement.style.setProperty('--main-color',colorOption )
}
// Toggle menu
let toggleMunuButton = document.querySelector('.toggle-menu i')
let linksMobile = document.querySelector(".links")
console.log(toggleMunuButton)
toggleMunuButton.addEventListener('click', (e) => {
  linksMobile.classList.toggle('opened')
})