var container = document.getElementById('menuBar');
var drone = document.getElementById('drone');


container.addEventListener("mousemove", function(event) {
  drone.style.transform = `translate3d(${(event.offsetX)}px, ${(event.offsetY )}px, 0)`;
});


window.addEventListener('resize', function () {
    window.location.reload();
});


const multiple = 10;
const mouseOverContainer = document.getElementsByClassName("character");
const element = document.getElementsByClassName("profile");

function transformElement(x, y, i) {
    let box = element[i].getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / multiple;
    const calcY = (x - box.x - box.width / 2) / multiple;
    const percentage = parseInt((x - box.x) / box.width * 1000) / 10;
    element[i].style.transform = "rotateX(" + calcX + "deg) rotateY(" + calcY + "deg)";
}

for(let i = 0; i < mouseOverContainer.length ; i++){
  mouseOverContainer[i].addEventListener('mouseover', (e)=>{
    window.requestAnimationFrame(function(){
      console.log(e.clientX);
      console.log(e.clientY);
      transformElement(e.clientX, e.clientY, i);
    });
  });






  mouseOverContainer[i].addEventListener('mouseleave', (e) => {
    window.requestAnimationFrame(function () {
          mouseOverContainer[i].style.transform = "rotateX(0) rotateY(0)";
    });
  } );

}
