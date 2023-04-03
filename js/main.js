const specialelementy = document.querySelectorAll(".specialelement");
specialelementy.forEach((usluga) =>
  usluga.addEventListener("click", function () {
    this.classList.toggle("specialelement--expanded");
  })
);