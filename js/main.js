window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 350) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

const contactBtn = document.getElementById('contact-btn');
const contactLink = document.getElementById('contact-link');
const modal = document.getElementById('contactModal');
const modalMessage = document.getElementById('modal-message');

  contactBtn.addEventListener('click', showContactModal);
  contactLink.addEventListener('click', showContactModal);

  function showContactModal() {

    $(modal).modal('show');

    modalMessage.textContent = 'Thank you for reaching out to us! We are working on some contact method but for now on you can tray to contact us on GitHub';

    modal.classList.add('animated', 'fadeIn');

    return false;
  }