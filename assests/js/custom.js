const closeBtn = document.getElementById('close');
const modalMenu = document.getElementById('modal');

setTimeout(() => {
  modalMenu.classList.add('show');
}, 1);

closeBtn.addEventListener('click', () => {
  modalMenu.classList.remove('show');
});

modalMenu.addEventListener('click', () => {
  modalMenu.classList.remove('show');
});

const countEl = document.getElementById('count');
