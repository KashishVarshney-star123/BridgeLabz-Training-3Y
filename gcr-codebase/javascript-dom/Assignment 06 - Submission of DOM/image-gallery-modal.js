const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeButton = document.getElementById("closeButton");

function openModal(thumbnail) {
  modalImage.src = thumbnail.dataset.full;
  modalImage.alt = thumbnail.alt;
  modalCaption.textContent = thumbnail.alt;

  modal.classList.add("open");
  document.body.classList.add("modal-open");
  closeButton.focus();
}

function closeModal() {
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
  modalImage.removeAttribute("src");
}

gallery.addEventListener("click", (event) => {
  const thumbnail = event.target.closest(".gallery-image");

  if (thumbnail) {
    openModal(thumbnail);
  }
});

modal.addEventListener("click", closeModal);

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

closeButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});