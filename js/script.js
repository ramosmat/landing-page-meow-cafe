//Remover evento padrão dos links
function scrollSmooth() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const sectionTarget = document.querySelector(href);
    sectionTarget.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  [...linksInternos].forEach((link) => {
    link.addEventListener("click", scrollToSection);
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

scrollSmooth();
textChange();
