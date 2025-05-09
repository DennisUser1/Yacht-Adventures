const refs = {
  form: document.querySelector('.rent-form'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close'),
  modal: document.querySelector('.backdrop'),
  modalTitle: document.querySelector('.modal-title'),
  inputUserName: document.querySelector('#username'),
};

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

refs.form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (refs.form.checkVisibility()) {
    refs.modalTitle.textContent = `${refs.inputUserName.value}, thank you!`;
    toggleModal();
    refs.form.reset();
  }
});

refs.closeModalBtn.addEventListener('click', function () {
    toggleModal();
});
