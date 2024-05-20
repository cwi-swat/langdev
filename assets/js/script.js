document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menu-toggle').addEventListener('change', function() {
    if (this.checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
});

  