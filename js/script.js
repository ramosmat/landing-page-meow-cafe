// Substituir cursor pela div
const divCursor = document.getElementById("cursor");

document.addEventListener("mousemove", (event) => {
  const Y = event.clientY;
  const X = event.clientX;

  divCursor.style.display = "block";
  divCursor.style.top = Y - 6 + "px";
  divCursor.style.left = X - 6 + "px";
});

// Substituir texto de link interno
const screen = window.innerWidth;
const link = document.querySelector(".croissants-texto a");

if (screen <= 1000) {
  link.innerText = "Veja Todos >";
}
