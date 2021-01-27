// met hulp van marijn heb ik hier het hamburger menu dat uitklapt het komt er op Neer Dat als je op hamburger klikt dat de functie
// uit klap wordt gestart in css die de input weer naar beneden moet brengen.


var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('menu');

function uitklappen() {
  menu.classList.toggle('uitklap');
};

hamburger.addEventListener('click', uitklappen);

// Dit is het zelfde als het hamburger menu maar met een extratje er zijn meerderen items die naar benenden moet dus meer
// variabelen die uit eindelijk getoggled moeten worden. Als laatsten is er ook nog een extra event listener toe gevoegd
// om zo op kruisje het weer weg te kunnen klikken.

var vergrootglas = document.getElementById('vergrootglas');
var zoek = document.getElementById('zoek');
var wegklik = document.getElementById('wegklik');
var vergrootglas2 = document.getElementById('vergrootglas2')


function opzoeken() {
  zoek.classList.toggle('zoeken');
  wegklik.classList.toggle('wegklikken');
  vergrootglas2.classList.toggle('decoratiezoek')


};


vergrootglas.addEventListener('click', opzoeken);
wegklik.addEventListener('click', opzoeken);
