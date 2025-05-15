var container = document.getElementById('menuBar');
var drone = document.getElementById('drone');
var droneCenter = {
  x: drone.width() / 2,
  y: drone.height() / 2
};

container.on('mousemove', function(event) {
  drone.css('transform', `translate3d(${event.offsetX - droneCenter.x}px, ${event.offsetY - droneCenter.y}px, 0)`);
});


let visible = false;
container.addEventListener("mouseover", function(){
    if(!visible){
        drone.style.visibility = "visible";
        visible = !visible;
    }else{
        drone.style.visibility = "hidden";
        visible = !visible;
    }
})