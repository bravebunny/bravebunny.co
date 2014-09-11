window.onload=setTimeout(function(){
  document.getElementById("logo").src = "/img/bunny1.png";

  setTimeout(function(){
    document.getElementById("logo").src = "/img/bunny2.png";
  }, 500);
}, 500);

function hover(element) {
  element.setAttribute('src', '/img/bunny1.png');
}
function unhover(element) {
  element.setAttribute('src', '/img/bunny2.png');
}