function scrollChange(){
  var distanceY = window.scrollY;
  var shrinkOn = 100;
  var header = document.getElementById('menuBar');
  var headerSize = $("#menuBar").height();

  if (distanceY > shrinkOn) {
    $("#menuBar").css('background', 'rgba(255, 255, 255, 1)');
    $("#menuBar").css('border-bottom', '1px solid rgba(200, 200, 200, 0.5)');
  } else {
    if (headerSize < 101) {
      $("#menuBar").css('background', 'rgba(0, 0, 0, 0)');
      $("#menuBar").css('border-bottom', '1px solid rgba(200, 200, 200, 0)');
    }
  }
}

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("#menuBar");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();

function scrollMenu(){
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  var breakpoint = 100;

  console.log(top);

  if(top >= breakpoint){ //Cuando baja
    $("#menuBar").animate({ height:'45'}, 600);
    //console.log("Baja");
  }else{ //Cuando sube
    $("#menuBar").animate({ height:'0'}, 600);
    //console.log("Sube");
  }
}


function showMenu(){
  var menu = document.getElementById('menu-full');
  menu.style.display = "";
  $("#menu-full").css('background', 'rgba(102, 117, 127, 0.95)');
}

function hideMenu(){
  var menu = document.getElementById('menu-full');
  $("#menu-full").css('background', 'rgba(85, 172, 238, 0)');
  menu.style.display = "none";
}

function showVideo(){
  document.getElementById('videoContainer').style.display = "";
  document.getElementById('videoBC').play();
}

function hideVideo(){
  document.getElementById('videoContainer').style.display = "none";
  document.getElementById('videoBC').pause();
}

//$(menu).animate({left: "-=300px"}, 300);
