(function () {
  var orderCall = document.querySelector('.order-call');

  var modal = document.querySelector('.modal-overlay');
  var closeButton = modal.querySelector('.form__close-button');
  var nameInput = modal.querySelector('input[name="name"]');
  var modalElements = document.querySelectorAll('.form__fields > [name]');
  var body = document.querySelector('body');

  orderCall.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.remove('visually-hidden');
    body.style['overflow-y'] = 'hidden';
    nameInput.focus();
  });

  closeButton.addEventListener('click', function () {
    modal.classList.add('visually-hidden');
    body.style['overflow-y'] = 'auto';
  });

  modal.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      modal.classList.add('visually-hidden');
      body.style['overflow-y'] = 'auto';
    }
  });

  modalElements.forEach(element => {
    element.value = window.localStorage.getItem(element.name);
    element.addEventListener('change', function () {
      window.localStorage.setItem(element.name, element.value);
    });
  });

  $('input[name="tel"]').mask('+7(000) 000-00-00');
})();
