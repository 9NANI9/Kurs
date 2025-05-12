document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
      
      item.parentElement.classList.toggle('active');
    });
  });