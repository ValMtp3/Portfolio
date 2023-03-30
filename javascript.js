// Afficher ou cacher le bouton en fonction de la position de défilement de la page
window.addEventListener('scroll', function() {
    var btn = document.getElementById('back-to-top-btn');
    if (window.pageYOffset > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });
  
  // Faire défiler la page jusqu'en haut lorsque le bouton est cliqué
  document.getElementById('back-to-top-btn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
// Récupération de l'élément du message de bienvenue
var welcomeMessage = document.getElementById('welcome-message');

// Fonction pour animer le message de bienvenue
function animateWelcomeMessage() {
  // Animation d'entrée du message de bienvenue
  welcomeMessage.style.opacity = '0';
  welcomeMessage.style.transition = 'opacity 1s ease-in-out';
  setTimeout(function() {
    welcomeMessage.style.opacity = '1';
  }, 100);

  // Animation de sortie du message de bienvenue
  setTimeout(function() {
    welcomeMessage.style.opacity = '0';
    setTimeout(function() {
      welcomeMessage.style.transition = '';
    }, 1000);
  }, 4000);
}

// Animation initiale du message de bienvenue
animateWelcomeMessage();

// Animation répétée du message de bienvenue
setInterval(function() {
  animateWelcomeMessage();
}, 8000);

