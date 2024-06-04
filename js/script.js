// Substituir texto de link interno
const screen = window.innerWidth;
const link = document.querySelector(".croissants-texto a");

if (screen <= 1000) {
  link.innerText = "Veja Todos >";
}
