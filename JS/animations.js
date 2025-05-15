var container = document.getElementById('menuBar');
var drone = document.getElementById('drone');

drone.style.position = "absolute";
drone.style.top= "50%";
drone.style.left= "50%";

container.addEventListener("mousemove", function(event) {
  drone.style.transform = `translate3d(${(event.offsetX)}px, ${(event.offsetY )}px, 0)`;
});


window.addEventListener('resize', function () {
    window.location.reload();
});