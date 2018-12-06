Array.from(document.querySelectorAll(".carousel")).forEach(function (carousel) {
  var horses = Array.from(carousel.querySelectorAll("img"));

  var i = 0;
  setInterval(function () {
    i = (i + 1) % horses.length;
    horses.forEach(function (horse) {return horse.classList.remove("show");});
    horses[i].classList.add("show");
  }, 3000);
});