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
