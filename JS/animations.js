var container = document.getElementById('menuBar');
var drone = document.getElementById('drone');


container.addEventListener("mousemove", function(event) {
  drone.style.transform = `translate3d(${(event.offsetX)}px, ${(event.offsetY )}px, 0)`;
});


window.addEventListener('resize', function () {
    window.location.reload();
});


const multiple = 10;
const mouseOverContainer = document.getElementById("characters");
const element = document.getElementsByClassName("character");

function transformElement(x, y,i) {
    let box = element[i].getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / multiple;
    const calcY = (x - box.x - box.width / 2) / multiple;
    const percentage = parseInt((x - box.x) / box.width * 1000) / 10;
    element[i].style.transform = "rotateX(" + calcX + "deg) rotateY(" + calcY + "deg)";
}

mouseOverContainer.addEventListener("mousemove", (e) => {
    window.requestAnimationFrame(function () {
        for(let i = 0; i < element.length; i++){
          if (e.clientX >= element[i].left && e.clientX <= element[i].right && e.clientY >= element[i].top && e.clientY <= element[i].bottom){
            transformElement(e.clientX, e.clientY, i);
          }
        }
    });
});

mouseOverContainer.addEventListener("mouseleave", (e) => {
    window.requestAnimationFrame(function () {
      for(let i = 0; i < element.length; i++){
          element[i].style.transform = "rotateX(0) rotateY(0)";
          
      }
    });
});
