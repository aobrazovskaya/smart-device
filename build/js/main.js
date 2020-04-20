(function () {
  var orderCall = document.querySelector('.order-call');

  var modal = document.querySelector('.modal-overlay');
  var closeButton = modal.querySelector('.form__close-button');
  var nameInput = modal.querySelector('input[name="name"]');
  var modalElements = document.querySelectorAll('.form__fields > [name]');

  orderCall.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.remove('visually-hidden');
    nameInput.focus();
  });

  closeButton.addEventListener('click', function () {
    modal.classList.add('visually-hidden');
  });

  modal.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      modal.classList.add('visually-hidden');
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

(function () {
  var wrapper = document.querySelector('.about-company__paragraph-wrapper p:last-child');
  var height;

  if (window.matchMedia('(max-width: 767px)').matches) {
    height = 180;
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    height = 100;
  } else {
    return;
  }

  var dot = new Dotdotdot(wrapper, {
    height: height
  });
})();
