//Remover evento padrão dos links
const allLinks = [...document.querySelectorAll("a")];

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

// Substituir texto de link interno
const screen = window.innerWidth;
const link = document.querySelector(".croissants-texto a");

if (screen <= 1000) {
  link.innerText = "Veja Todos >";
}
