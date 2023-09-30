var tag_header = document.querySelectorAll(".link_hover");
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < tag_header.length; i++) {
      console.log(tag_header[i]);
      tag_header[i].classList.remove("link_active");
    }
    this.classList.add("link_active");
  });
}
