var container = document.getElementById('menuBar');
var drone = document.getElementById('drone');
var droneCenter = {
  x: drone.offsetWidth / 2,
  y: drone.offsetHeight / 2
};

container.addEventListener("mousemove", function(event) {
  drone.style.transform = `translate3d(${event.offsetX - droneCenter.x}px, ${event.offsetY - droneCenter.y}px, 0)`;
});


