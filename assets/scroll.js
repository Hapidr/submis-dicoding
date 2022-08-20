var posY = 0;
var jarak = 15;

function smoothScroll(id) {
  var target = document.getElementById(id).offsetTop; //Jarak antara atas dan div
  var scrollAnimate = setTimeout(function() {
    smoothScroll(id);
  }, 5) //fungsi, waktu

  posY += jarak;

  // Berhenti pada bagian tertentu
  if (posY >= target) {
    clearTimeout(scrollAnimate);
    posY = 0;
  } else {
    window.scroll(0, posY)
  }

  return false;
}