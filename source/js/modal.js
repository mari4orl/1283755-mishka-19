var cartIcon = document.querySelectorAll('.order');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');
var addBtn = document.querySelector('.modal__add');

function openModal() {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
  }
}

function closeModal() {
  modal.classList.add('modal--closed');
}

for (var i = 0; i < cartIcon.length; i++) {
  cartIcon[i].addEventListener('click', openModal);
}

addBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if(e.target.keyCode === 27) {
    modal.classList.add('modal--closed');
  }
});
