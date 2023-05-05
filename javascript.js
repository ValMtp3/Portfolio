// Afficher ou cacher le bouton en fonction de la position de défilement de la page
window.addEventListener("scroll", function () {
  var btn = document.getElementById("back-to-top-btn");
  if (window.pageYOffset > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Faire défiler la page jusqu'en haut lorsque le bouton est cliqué
document
  .getElementById("back-to-top-btn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
