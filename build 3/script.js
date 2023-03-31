var width = 10;
function move() {
  var elem = document.getElementById("Bar");
    if (width <= 100) {
      width+=10;
      if (width > 100) {
        width = 0;
      }
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
    
}