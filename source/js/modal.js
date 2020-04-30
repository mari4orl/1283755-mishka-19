var cartIcon = document.querySelector('.product-catalog__cart');
var modal = document.querySelector('.modal');

cartIcon.addEventListener('click', function() {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  } else {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
  }
});
