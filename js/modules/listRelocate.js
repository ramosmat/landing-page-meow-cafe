export default function listRelocate() {
  const nav = document.querySelector(".header-nav");
  const list1 = document.querySelector(".header-nav ul");
  const list2 = document.querySelector(".header-nav ul:nth-child(2)");
  const list2Children = [...list2.children];

  const windowWidth = window.matchMedia("(max-width: 1000px)").matches;

  if (windowWidth) {
    list2Children.forEach((children) => {
      list1.append(children);
    });

    nav.removeChild(list2);
  }
}
