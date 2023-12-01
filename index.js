function toggler() {
  var element = document.querySelector(".burger");
  element.classList.toggle("close");
  navbar = document.querySelector(".navbar-container").style;
  if (navbar.display == "flex") {
    navbar.display = "none";
  } else {
    navbar.display = "flex";
  }
}
