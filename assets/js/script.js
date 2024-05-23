document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var btnExit = document.querySelector('.btn-exit');

  menuToggle.addEventListener('change', function() {
    if (this.checked) {
      document.body.style.overflow = 'hidden';
      btnExit.style.display = 'block'; 
    } else {
      document.body.style.overflow = ''; 
      btnExit.style.display = 'none'; 
    }
  });

  
  btnExit.addEventListener('click', function() {
    menuToggle.checked = false;
    var event = new Event('change'); 
    menuToggle.dispatchEvent(event); 
  });
});






  