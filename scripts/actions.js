document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('#link-nav').forEach(function(element) {
        element.addEventListener('click', moveMenu(element));
      });
    
    if (document.querySelector('img') !== null) {
      document.querySelectorAll('img').forEach(function(element) {
        element.addEventListener('mouseover',changeOpacity(element));
      });
    }
  });
    

function moveMenu(element){
  element.style.marginTop = "30px";
  element.style.transition = "1s";
}

function changeOpacity(element){
  element.style.opacity = '1';
  element.style.transition = "2s";
}
