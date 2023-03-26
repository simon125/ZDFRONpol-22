/**
 * Obsługa przycisku cancel
 */

const cancelButton = document.querySelector("#cancelButton");

cancelButton.addEventListener("click", () => {
  document.querySelector("#modalForm").removeAttribute("open");
});

const openModalButton = document.querySelector("#openModal");

openModalButton.addEventListener("click", () => {
  document.querySelector("#modalForm").setAttribute("open", "");
});
