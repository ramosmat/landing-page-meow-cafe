//Remover evento padrão dos links
function preventEvent() {
  const allLinks = [...document.querySelectorAll("a")];

  allLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
}

// Substituir texto de link interno
function textChange() {
  const screen = window.innerWidth;
  const link = document.querySelector(".croissants-texto a");

  if (screen <= 1000) {
    link.innerText = "Veja Todos >";
  }
}

preventEvent();
textChange();
