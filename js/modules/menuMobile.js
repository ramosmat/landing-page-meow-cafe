import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector(".header-button");
  const menuList = document.querySelector(".header-nav");
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      menuButton.classList.toggle("ativo");
      menuList.classList.toggle("ativo");

      const btnX = menuButton.getBoundingClientRect().x;
      const btnY = menuButton.getBoundingClientRect().y;
      const btnMW = menuButton.getBoundingClientRect().width;

      menuList.style.left = btnX + "px";
      menuList.style.top = btnY + 45 + "px";
      menuList.style.width = btnMW + "px";

      outsideClick(menuList, eventos, () => {
        console.log("teste");
        menuButton.classList.remove("ativo");
        menuList.classList.remove("ativo");
      });
    }

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
