var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('menu');

function uitklappen() {
  menu.classList.toggle('uitklap');
};

hamburger.addEventListener('click', uitklappen);



var vergrootglas = document.getElementById('vergrootglas');
var zoek = document.getElementById('zoek');

function opzoeken() {
  zoek.classList.toggle('zoeken');
};

vergrootglas.addEventListener('click', opzoeken);
