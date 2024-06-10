import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector(".header-button");
  const menuList = document.querySelector(".header-nav");

  if (menuButton) {
    function openMenu(event) {
      event.preventDefault();
      menuButton.classList.toggle("ativo");
      menuList.classList.toggle("ativo");

      const btnX = menuButton.getBoundingClientRect().x;
      const btnY = menuButton.getBoundingClientRect().y;
      const btnMW = menuButton.getBoundingClientRect().width;
      const scroll = window.scrollY;

      menuList.style.left = btnX + "px";
      menuList.style.top = btnY + scroll + 45 + "px";
      menuList.style.width = btnMW + "px";

      outsideClick(menuList, "click", () => {
        menuButton.classList.remove("ativo");
        menuList.classList.remove("ativo");
      });
    }
    if (menuButton && menuList) {
      menuButton.addEventListener("click", openMenu);
    }
  }
}
