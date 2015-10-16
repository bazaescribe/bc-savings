function carousel(){
  var h = 0;
  var mision = document.getElementById('mision');
  var vision = document.getElementById('vision');
  var valores = document.getElementById('valores');

  setInterval(function(){
    console.log(h);
    h += 1;
    if(h == 1){
      mision.style.display = "block";
      vision.style.display = "none";
      valores.style.display = "none";
    }else if (h == 2) {
      mision.style.display = "none";
      vision.style.display = "block";
      valores.style.display = "none";
    }else if (h == 3) {
      mision.style.display = "none";
      vision.style.display = "none";
      valores.style.display = "block";
    }else{
      h = 0;
    }
  }, 10000);
}
