
window.onscroll = function() {scrollWin()};

function scrollWin() {
  var navbarcolor= document.getElementById('navbar');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbarcolor.style.backgroundColor='#58534D';
  } else {
    navbarcolor.style.backgroundColor='transparent';
  }
  
}


function goFullScreen(){

  var elem = document.getElementById('full-screen-map');

  if(elem.requestFullscreen){
      elem.requestFullscreen();
  }
  else if(elem.mozRequestFullScreen){
      elem.mozRequestFullScreen();
  }
  else if(elem.webkitRequestFullscreen){
      elem.webkitRequestFullscreen();
  }
  else if(elem.msRequestFullscreen){
      elem.msRequestFullscreen();
  }
}


function exitFullScreen(){

  if(document.exitFullscreen){
      document.exitFullscreen();
  }
  else if(document.mozCancelFullScreen){
      document.mozCancelFullScreen();
  }
  else if(document.webkitExitFullscreen){
      document.webkitExitFullscreen();
  }
  else if(document.msExitFullscreen){
      document.msExitFullscreen();
  }

}