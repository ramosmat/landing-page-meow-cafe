export default function outsideClick(element, event, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    setTimeout(() => {
      html.addEventListener(event, handleOutsideClick, { once: true });
    });
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);

      html.removeEventListener(event, handleOutsideClick);

      callback;
    }
  }

  element.setAttribute(outside, "");
}
