// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

//---------------------------------------------------------

// Première solution

// const nav = document.querySelector("nav");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 10) {
//     nav.style.top = "-60px";
//   } else {
//     nav.style.top = "0px";
//   }
// });

//---------------------------------------------------------

// Deuxième solution

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-60px";
  }
  lastScroll = window.scrollY;
});
