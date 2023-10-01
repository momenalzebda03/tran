var tag_header = document.querySelectorAll(".link_hover");
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < tag_header.length; i++) {
      tag_header[i].classList.remove("link_active");
    }
    this.classList.add("link_active");
  });
}

var divMenu = document.getElementById("iconMenu");
var boolen = true;

iconMenu.addEventListener("click", function () {
  var iconMenu = document.querySelector(".iconMenu");
  if (boolen == true) {
    iconMenu.classList.remove("fa-bars");
    iconMenu.classList.add("fa-xmark");
    boolen = false;
  } else {
    iconMenu.classList.remove("fa-xmark");
    iconMenu.classList.add("fa-bars");
    boolen = true;
  }
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var section = document.querySelector(".divArrow");
  if (scrollPosition >= 200) {
    section.classList.remove("d-none");
    section.classList.add("d-flex");
  } else if (scrollPosition <= 200) {
    section.classList.add("d-none");
  }
});
