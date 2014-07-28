window.onload=setTimeout(function(){
  document.getElementById("logo").src = "/img/bunny1.png";

  setTimeout(function(){
    document.getElementById("logo").src = "/img/bunny2.png";
  }, 500);
}, 500);