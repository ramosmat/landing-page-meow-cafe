export default function initModal() {
  const botaoOpen = document.querySelector('[data-modal="abrir"]');
  const botaoClose = document.querySelector('[data-modal="fechar"]');
  const modalArea = document.querySelector(".modal-bg");

  function toggleModal(event) {
    event.preventDefault();
    modalArea.classList.toggle("ativo");
  }

  function clickOutModal(event) {
    if (event.target === this) {
      event.preventDefault();
      modalArea.classList.remove("ativo");
    }
  }

  botaoOpen.addEventListener("click", toggleModal);
  botaoClose.addEventListener("click", toggleModal);
  modalArea.addEventListener("click", clickOutModal);
}
