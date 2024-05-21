// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('menu-toggle').addEventListener('change', function() {
//     if (this.checked) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//   });
// });


// document.getElementById('close-menu').addEventListener('click', function() {
//     document.getElementById('menu-toggle').checked = false;
// });

document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var btnExit = document.querySelector('.btn-exit');

  menuToggle.addEventListener('change', function() {
    if (this.checked) {
      document.body.style.overflow = 'hidden';
      btnExit.style.display = 'block'; // Mostramos el botón de salir
    } else {
      document.body.style.overflow = ''; // Restablecemos el overflow a su valor predeterminado
      btnExit.style.display = 'none'; // Ocultamos el botón de salir
    }
  });

  // Agregamos un event listener al botón de salir para cerrar el menú
  btnExit.addEventListener('click', function() {
    menuToggle.checked = false;
    var event = new Event('change'); // Creamos un nuevo evento 'change'
    menuToggle.dispatchEvent(event); // Desencadenamos el evento 'change'
  });
});






  